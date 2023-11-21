import state from "./state";
import * as getters from "./getters";
import * as mutations from "./mutations";
import * as actions from "./actions";
const storeDpto = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
export default storeDpto;
