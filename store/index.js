export const state = () => ({
  queryUpPopUp: false,
});

export const mutations = {
  // set header queryUpPopUp
  setQueryUpPopUp(state, data) {
    state.queryUpPopUp = data.status;
  },
};
