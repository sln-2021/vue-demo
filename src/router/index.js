import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Main from '@/components/Layout/Main';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "main",
      component: Main
    },
    {
      path: "/home",
      name: "home",
      component: Home
    }
  ]
});
