import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { USERS_COLLECTION } from "../../../../common/collections";
import { swalProsgres, swalSmoll } from "../../../../helpers/alert-message";
import { errorResponse } from "../../../../helpers/response-error";
import { db } from "../../../../api/firebase";

export const load = async ({ commit }) => {
  try {
    commit("setLoading", true);
    const querySnap = await getDocs(
      query(collection(db, USERS_COLLECTION), orderBy("name", "asc"))
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
    const docRef = await addDoc(collection(db, USERS_COLLECTION), values);
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
    const docRef = await setDoc(doc(db, USERS_COLLECTION, code), data);
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
    await deleteDoc(doc(db, USERS_COLLECTION, code));
    // await dispatch("load");
    commit("deleteData", code);
    swalSmoll("Datos eliminado correctamente!");
    return true;
  } catch (error) {
    errorResponse(error);
    return false;
  }
};
