import state from "./state";
import * as getters from "./getters";
import * as mutations from "./mutations";
import * as actions from "./actions";
import { NAME_STORAGE_USER } from "../../../../common/constants";

const storeAuth = {
  namespaced: true,
  state,
  actions,
  mutations: {
    ...mutations,
    setUserColletion(state, data) {
      if (data) localStorage.setItem(NAME_STORAGE_USER, JSON.stringify(data));
      else localStorage.removeItem(NAME_STORAGE_USER);
      state.user = data;
    },
  },
  getters,
};
export default storeAuth;
