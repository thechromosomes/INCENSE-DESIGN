export const state = () => ({
  queryUpPopUp: false,
  // BASE_URL: "http://localhost:3001",
  BASE_URL: process.env.BASE_URL,
  INSTA_TOKEN:process.env.INSTA_TOKEN,
  homePageBannerLoaded: false,
  EMAIL_PASS: process.env.EMAIL_PASS,

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

  updateBaseUrl(state, { url }) {
    state.BASE_URL = url;
  }
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
