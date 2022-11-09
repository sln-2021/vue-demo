import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  // {
  //   path: "/login",
  //   name: "login",
  //   components: () => import("../components/login/index.vue")
  // }
];
export default new Router({
  routes,
  mode: 'hash',
});
