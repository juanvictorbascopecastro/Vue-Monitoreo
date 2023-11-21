import { createStore } from "vuex";
import auth from "./../modules/app/store/auth";
import departamento from "./../modules/admin/store/departamento";
import ciudad from "./../modules/admin/store/ciudad";
import employees from "./../modules/admin/store/employees";
import user from "./../modules/admin/store/user";

export default createStore({
  state: {},
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    auth,
    departamento,
    ciudad,
    employees,
    user,
  },
});
