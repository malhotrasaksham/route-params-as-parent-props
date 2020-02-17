import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import home from "@/components/home";
import about from "@/components/about";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", redirect: { name: "home" } },
    { path: "/home", name: "home", component: home },
    { path: "/about/:topic/", name: "about", component: about, props: true }
  ]
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
