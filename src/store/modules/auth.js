const state = {
  token: localStorage.getItem("token"),
};

const actions = {
  logout(context) {
    context.commit("logout");
  },
};

const getters = {
  isAuthenticated: (state) => !!state.token,
  isUnauthenticated: (state) => !state.token,
  token: (state) => state.token,
};

const mutations = {
  token(state, token) {
    if (token !== null) {
      localStorage.setItem("token", token);
      state.token = token;
    } else {
      localStorage.removeItem("token");
      state.token = null;
    }
  },
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
