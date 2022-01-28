export const state = () => ({
  queryUpPopUp: false,
  // BASE_URL: "http://localhost:3001",
  BASE_URL: "https://incensedesign.com",
  INSTA_TOKEN:
    "IGQVJWd1hJdG5uQ1NMUV90Q25jQ3VsYUF1ZAmpRdGliY1lIMVFSYXBtdDBiTWNTSW1kQ3l4YjJHc3UxREhCVHp6WTRqbTZALendrQ2prb2NwdjNVZAF9Mc2FFWm4wOGN6OFNKdHJqVHRFQTVJNm9mamJwUgZDZD",
  homePageBannerLoaded: false,

  pageLoader: false,
});

export const mutations = {
  // set header queryUpPopUp
  setQueryUpPopUp(state, data) {
    state.queryUpPopUp = data.status;
  },

  setHomePageBannerLoaded(state, data) {
    state.homePageBannerLoaded = data.status;
  },
  // update loader status
  updatePageLoader(state, { display }) {
    state.pageLoader = display;
  },
};

export const actions = {
  ApiCall(context, payload) {
    if (!payload.params.noLoader) {
      context.commit("updatePageLoader", { display: true });
    }
    let request = payload.params;
    var authOptions = {
      method: payload.method,
      url: context.state.BASE_URL + payload.url,
      headers: {
        "Content-Type": "application/json",
      },
      data: request,
    };

    return new Promise((resolve, reject) => {
      this.$axios(authOptions)
        .then((response) => {
          context.commit("updatePageLoader", { display: false });
          resolve(response.data);
        })
        .catch((error) => {
          context.commit("updatePageLoader", { display: false });
          reject(error);
        });
    });
  },
};
