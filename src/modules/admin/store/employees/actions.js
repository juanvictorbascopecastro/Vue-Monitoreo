import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import {
  COMPANIES_COLLECTION,
  EMPLOYEES_COLLECTION,
  HISTORY_COLLECTION,
} from "../../../../common/collections";
import { swalProsgres, swalSmoll } from "../../../../helpers/alert-message";
import { errorResponse } from "../../../../helpers/response-error";
import { db } from "../../../../api/firebase";
import Swal from "sweetalert2";

export const load = async ({ commit }) => {
  try {
    commit("setLoading", true);
    const querySnap = await getDocs(
      query(collection(db, EMPLOYEES_COLLECTION), orderBy("name", "asc"))
    );
    const list = [];
    querySnap.forEach((doc) => {
      list.push({ code: doc.id, data: doc.data() });
    });

    commit("setList", list);
    return list;
  } catch (error) {
    commit("setLoading", false);
    errorResponse(error);
    return false;
  }
};

// guradar un registro
export const create = async ({ commit, dispatch }, values) => {
  try {
    swalProsgres("Guardando datos...");
    const docRef = await addDoc(collection(db, EMPLOYEES_COLLECTION), values);
    await dispatch("load");
    swalSmoll("Registrado correctamente!");
    return true;
  } catch (error) {
    errorResponse(error);
    return false;
  }
};

// editar un registro
export const update = async ({ commit, dispatch }, values) => {
  try {
    swalProsgres("Guardando datos...");
    const { code, data } = values;
    const docRef = await setDoc(doc(db, EMPLOYEES_COLLECTION, code), data);
    // console.log(docRef);
    await dispatch("load");
    swalSmoll("Editado correctamente!");
    return true;
  } catch (error) {
    errorResponse(error);
    return false;
  }
};
// eliminar un registro
export const remove = async ({ commit, dispatch }, code) => {
  try {
    swalProsgres("Eliminando registro...");
    await deleteDoc(doc(db, EMPLOYEES_COLLECTION, code));
    // await dispatch("load");
    commit("deleteData", code);
    swalSmoll("Datos eliminado correctamente!");
    return true;
  } catch (error) {
    errorResponse(error);
    return false;
  }
};

// ubicacion real time
export const realTime = ({ rootGetters, commit }) => {
  const user = rootGetters["auth/getUserColletion"];
  const idcompany = user.data.idcompany;

  const q = query(
    collection(db, EMPLOYEES_COLLECTION),
    where("idcompany", "==", idcompany),
    where("working", "==", true)
  );

  const list = [];
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    querySnapshot.docChanges().forEach((change) => {
      const employees = change.doc.data();
      employees.dni = change.doc.id;
      switch (change.type) {
        case "added":
          list.push(employees);
          console.log("nuevo usuario", employees.name, employees.location);
          commit("setListActive", list);
          break;
        case "modified":
          const index1 = list.findIndex((item) => item.dni === employees.dni);
          if (index1 !== -1) {
            console.log(
              "usuario actualizada",
              employees.name,
              employees.location
            );
            list[index1] = employees;
            commit("setListActive", list);
          }
          break;
        case "removed":
          const index2 = list.findIndex((item) => item.dni === employees.dni);
          list.splice(index2, 1);
          console.log("usuario abandono", employees.name, employees.location);
          commit("setListActive", list);
          break;
      }
    });
  });
};

export const getHistory = ({ rootGetters }, values) => {
  swalProsgres("Cargando datos...");
  const { idemployees, date } = values;
  const dateInit = new Date(date);
  const dateFin = new Date(date);
  dateInit.setHours(0, 0, 0, 0);
  dateFin.setHours(0, 0, 0, 0);
  dateInit.setDate(dateFin.getDate() + 1);
  dateFin.setDate(dateFin.getDate() + 2);

  const user = rootGetters["auth/getUserColletion"];
  const idcompany = user.data.idcompany;
  const q = query(
    collection(db, COMPANIES_COLLECTION, idcompany, HISTORY_COLLECTION),
    where("idemployees", "==", idemployees),
    where("date", ">=", dateInit),
    where("date", "<=", dateFin),
    orderBy("date", "asc")
  );
  const list = [];
  return new Promise((resolve, reject) => {
    getDocs(q)
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          list.push({
            code: doc.id,
            data: {
              ...doc.data(),
              date: doc.data().date
                ? new Date(doc.data().date.seconds * 1000)
                : null,
            },
          });
        });
        Swal.close();
        resolve(list);
      })
      .catch((error) => {
        console.error("Error al realizar la consulta:", error);
        Swal.close();
        reject(error);
      });
  });
};
