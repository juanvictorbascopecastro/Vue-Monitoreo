import state from "./state";
import * as getters from "./getters";
import * as mutations from "./mutations";
import * as actions from "./actions";
const storeCiudad = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
export default storeCiudad;
