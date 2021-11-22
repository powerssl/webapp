import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/signIn",
    name: "SignIn",
    component: () =>
      import(/* webpackChunkName: "signIn" */ "../views/SignIn.vue"),
  },
  {
    path: "/signOut",
    name: "SignOut",
    component: () =>
      import(/* webpackChunkName: "signOut" */ "../views/SignOut.vue"),
  },
  {
    path: "/acmeAccounts",
    name: "ACMEAccounts",
    component: () =>
      import(
        /* webpackChunkName: "acmeAccounts" */ "../views/ACMEAccounts.vue"
      ),
  },
  {
    path: "/acmeServers",
    name: "ACMEServersIndex",
    component: () =>
      import(
        /* webpackChunkName: "acmeServersIndex" */ "../views/ACMEServers/Index.vue"
      ),
  },
  {
    path: "/acmeServers/new",
    name: "ACMEServersNew",
    component: () =>
      import(
        /* webpackChunkName: "newACMEServerNew" */ "../views/ACMEServers/New.vue"
      ),
  },
  {
    path: "/acmeServers/:acmeServerId",
    name: "ACMEServersShow",
    component: () =>
      import(
        /* webpackChunkName: "newACMEServerNew" */ "../views/ACMEServers/Show.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
