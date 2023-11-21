export const getByCode =
  (state) =>
  (code = "") => {
    return state.list.find((item) => item.code === code);
  };
