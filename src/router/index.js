import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import {
  SET_CURRENT_USER
} from "../store/store-types";

Vue.use(VueRouter);

const routes = [{
    path: "/login",
    name: "user-login",
    component: () => import("@/views/UserLogin"),
  },
  {
    path: "/register",
    name: "register",
  },
  {
    path: "/admin/login",
    name: "admin-login",
    component: () => import("@/views/AdminLogin"),
  },
  {
    path: "/",
    name: "home",
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  // 已經登入以後
  // 在這個地方要使用vuex要import store
  console.log("beforeEach", to, from);
  store.dispatch(SET_CURRENT_USER);
  // 等取得現在使用者資料再用commit存好當前使用者
  next();
});

export default router;