import {
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import {
  swalMessage,
  swalProsgres,
  swalSuccessful,
} from "../../../../helpers/alert-message";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { USERS_COLLECTION } from "../../../../common/collections";
import Swal from "sweetalert2";
import { auth, db } from "../../../../api/firebase";
import router from "../../../../router";

export const login = async ({ commit }, data) => {
  const { email, password } = data;
  swalProsgres("Verificando datos...");
  signInWithEmailAndPassword(auth, email, password)
    .then(async (credential) => {
      const docUser = await getDoc(
        doc(db, USERS_COLLECTION, credential.user.uid)
      );
      if (docUser.exists()) {
        if (docUser.data().active) {
          Swal.close();
          commit("setUserColletion", {
            code: docUser.id,
            data: docUser.data(),
          });
          router.push({ name: "inicio" });
        } else {
          swalMessage("¡Su cuenta está desactivada temporalmente!", "error");
          signOut(auth);
        }
      } else {
        // si no encontro su usuario eliminamos la session
        swalMessage(
          "¡Se ha producido un error al encontrar tu cuenta!",
          "error"
        );
        signOut(auth);
      }
    })
    .catch((error) => {
      console.log(error.message);
      switch (error.message) {
        case "Firebase: Error (auth/email-already-in-use).":
          swalMessage("El correo ya existe!", "error");
          break;
        case "Firebase: Error (auth/wrong-password).":
          swalMessage(
            "¡El correo electrónico o la contraseña son incorrectos!",
            "error"
          );
          break;
        case "Firebase: Error (auth/user-not-found).":
          swalMessage(
            "¡El correo electrónico o la contraseña son incorrectos!",
            "error"
          );
          break;
        case "Firebase: Error (auth/invalid-login-credentials).":
          swalMessage(
            "¡El correo electrónico o la contraseña son incorrectos!",
            "error"
          );
          break;
        default:
          swalMessage(error.message, "error");
          break;
      }
    });
};

export const logOut = ({ commit }) => {
  signOut(auth).then(() => {
    commit("setUserColletion", null);
    commit("setUser", null);
    router.push({ path: "/" });
    // location.reload();
  });
};

export const update = async ({ rootState, commit }, values) => {
  const { passwordActual, password, email, name, address, phone, ci } = values;
  let user = auth.currentUser;
  user = Object.freeze(user);
  const checkUs = await checkUser(user.email, passwordActual);
  if (!checkUs) {
    swalMessage("Su contraseña no es correcta!", "warning");
    return;
  }
  swalProsgres("Guardando cambios...");
  // const userColl = rootState.auth.user;
  const promises = [];
  // verificamos si quiere actualizar la contrasenia
  if (password) {
    //actualizamos la contrasenia
    promises.push(
      new Promise((resolve, reject) => {
        updatePassword(auth.currentUser, password)
          .then(() => {
            resolve(true);
          })
          .catch((error) => {
            reject(error);
          });
      })
    );
  }
  // verificamos si quiere cambiar el email
  if (user.email != email) {
    promises.push(
      new Promise((resolve, reject) => {
        updateEmail(auth.currentUser, email)
          .then(() => {
            resolve(true);
          })
          .catch((error) => {
            reject(error);
          });
      })
    );
  }

  // editamos los datos
  promises.push(
    new Promise(async (resolve, reject) => {
      const newData = {};
      newData.name = name;
      newData.address = address;
      newData.phone = phone;
      newData.ci = ci;
      newData.email = email;
      // const batch = writeBatch(db);
      // const batchAllData = await updateUserCollection(
      //   batch,
      //   rootState.auth.user.code,
      //   newData
      // );
      // const docRef1 = doc(db, USERS_COLLECTION, rootState.auth.user.code);
      // batchAllData.update(docRef1, { ...newData });
      // await batchAllData.commit();
      // if (userColl.data.rol === "admin") newData.rol = rol;
      setDoc(doc(db, USERS_COLLECTION, rootState.auth.user.code), newData, {
        merge: true,
      })
        .then(() => {
          resolve(true);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    })
  );
  promises.push(
    new Promise((resolve, reject) => {
      updateProfile(auth.currentUser, {
        displayName: name,
        // photoURL: 'https://'
      })
        .then(() => {
          resolve(true);
        })
        .catch((error) => {
          reject(error);
        });
    })
  );
  const result = await Promise.all(promises);
  const errors = [];
  result.forEach((item) => {
    console.log(item);
    if (typeof item !== "boolean" && item !== true) {
      errors.push(item);
    }
  });
  if (errors.length > 0) swalMessage(errors.join(", "), "warning");
  else {
    swalSuccessful("Datos actualizado correctamente");
    // actualizar session
    updateSession(commit, auth.currentUser.uid);
  }
};

function checkUser(email, password) {
  return new Promise((resolve) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(async (credential) => {
        resolve(true);
      })
      .catch((error) => {
        resolve(false);
      });
  });
}
async function updateSession(commit, code) {
  const docUser = await getDoc(doc(db, USERS_COLLECTION, code));
  if (docUser.exists()) {
    if (docUser.data().active) {
      Swal.close();
      commit("setUserColletion", {
        code: docUser.id,
        data: docUser.data(),
      });
    } else {
      swalMessage("¡Su cuenta está desactivada temporalmente!", "error");
      signOut(auth);
    }
  } else {
    // si no encontro su usuario eliminamos la session
    swalMessage("¡Se ha producido un error al encontrar tu cuenta!", "error");
    signOut(auth);
  }
}
