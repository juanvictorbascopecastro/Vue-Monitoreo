export const setList = (state, datas) => {
  state.list = datas;
  state.isLoading = false;
};

export const setLoading = (state, value) => {
  state.isLoading = value;
};

export const updateData = (state, data) => {
  const index = state.list.findIndex((item) => item.code == data.code);
  if (index !== -1) state.list[index] = data;
};

export const deleteData = (state, code) => {
  state.list = state.list.filter((data) => data.code !== code);
};

export const setListActive = (state, datas) => {
  state.listActive = datas;
};
