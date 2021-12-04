import Vue from "vue";
import VueRouter from "vue-router";
import UserMain from "../views/UserMain.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/usermain",
    name: "UserMain",
    component: UserMain,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
