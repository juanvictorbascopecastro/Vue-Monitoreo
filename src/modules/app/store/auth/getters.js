import { NAME_STORAGE_USER } from "../../../../common/constants";

export const getUserColletion = (state) => {
  // if (state.user) return state.user;
  let user = localStorage.getItem(NAME_STORAGE_USER);
  if (user) user = JSON.parse(user);
  state.user = user;
  return user;
};
