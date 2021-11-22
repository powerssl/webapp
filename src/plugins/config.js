import Vue from "vue";

// if (window.powerssl === undefined) {
//   window.powerssl = {};
// }

const config = {
  grpcWebURI: window.powerssl.grpcWebURI || process.env.VUE_APP_GRPC_WEB_URI,
  authURI: window.powerssl.authURI || process.env.VUE_APP_AUTH_URI,
  apiURI: window.powerssl.apiURI || process.env.VUE_APP_API_URI,
};

Vue.use({
  install(Vue) {
    Vue.appConfig = config;
    Vue.prototype.$appConfig = config;
  },
});
