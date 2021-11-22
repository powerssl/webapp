const state = {
  token: localStorage.getItem("token"),
};

const getters = {
  isAuthenticated: (state) => !!state.token,
  token: (state) => state.token,
  metadata: () => {
    return { Authorization: `Bearer ${state.token}` };
  },
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
  getters,
  mutations,
};
