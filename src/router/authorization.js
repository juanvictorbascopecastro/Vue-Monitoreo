import { onAuthStateChanged } from "firebase/auth";
import store from "./../store";
import { auth, db } from "../api/firebase";
import { doc, getDoc } from "firebase/firestore";
import { USERS_COLLECTION } from "../common/collections";

export const isAuthenticateGuard = async (to, from, next) => {
  if (to.meta.requiresAuth) {
    // verificamos si ese rol tiene acceso a esa ruta
    next();
  } else next(); // si la ruta no requeire de usuario continua
};

export const canAccess = async (meta) => {
  let collUser = store.getters["auth/getUserColletion"];
  if (store.state.auth.user) {
    if (!collUser)
      collUser = await loadUserCollection(store.state.auth.user.uid);
    if (meta.roles.includes(collUser.data.rol)) return store.state.auth.user;
    else if (collUser) return "403";
    return false;
    // return store.getters["auth/user"];
  } else {
    return new Promise((resolve) => {
      onAuthStateChanged(auth, async (user) => {
        if (!user) return resolve(false);
        collUser = await loadUserCollection(user.uid);
        store.commit("auth/setUser", user);
        if (collUser && meta.roles.includes(collUser.data.rol)) resolve(user);
        else if (collUser) return resolve("403");
        return resolve(false);
      });
    });
  }
};

async function loadUserCollection(uid) {
  const docSnap = await getDoc(doc(db, USERS_COLLECTION, uid));
  if (docSnap.exists()) {
    return {
      code: docSnap.id,
      data: docSnap.data(),
    };
  } else return null;
}
