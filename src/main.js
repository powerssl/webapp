import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import "./plugins/config";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  if (to.name !== "SignIn" && !store.getters["auth/isAuthenticated"])
    next({ name: "SignIn" });
  else next();
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
