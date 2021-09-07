// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import '@/styles/index.css';
import VueButtonAnimation from "vue-button-animation";
import CityPinyin from "vue-city-pinyin";
import VueSimplemde from "vue-simplemde";
import "simplemde/dist/simplemde.min.css";

Vue.component("vue-simplemde", VueSimplemde);
Vue.config.productionTip = false;

/* eslint-disable no-new */
// Vue.use(ElementUI, { size: "small", zIndex: 3000 });
Vue.use(ElementUI);
Vue.use(VueButtonAnimation);
Vue.use(CityPinyin);

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
