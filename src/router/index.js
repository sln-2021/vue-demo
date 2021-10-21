import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Main from "@/components/Layout/Main";
Vue.use(Router);

// import Home from "../components/home/index.vue";

import VueRouter from "vue-router";
const Foo = { template: "<div>foo</div>" };
const Bar = { template: "<div>bar</div>" };
const Baz = { template: "<div>baz</div>" };
Vue.use(VueRouter);
export default new Router({
  routes: [
    {
      path: "/",
      components: () => import("../components/home/index")
    },
    {
      path: "/other",
      components: {
        default: Baz,
        a: Bar,
        b: Foo
      }
    }
  ]
});
