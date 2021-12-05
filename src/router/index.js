import Vue from "vue";
import VueRouter from "vue-router";
import UserMain from "../views/UserMain.vue";
import store from "../store";

const authenticateIsAdmin = (to, from, next) => {
  const currentUser = store.state.user.currentUser;
  if (currentUser && currentUser.account !== "admin") {
    alert("PERSSION DENIED");
    // next("PERSSION DENIED");
    next("/admin/login");
  }
  next();
};

Vue.use(VueRouter);

const routes = [
  {
    path: "/reply",
    name: "reply-list",
    component: () => import("@/views/ReplyList"),
  },
  {
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
    path: "/admin/users",
    name: "admin-users-list",
    component: () => import("@/views/AdminUsers"),
    beforeEnter: authenticateIsAdmin,
  },
  {
    path: "/admin/tweets",
    name: "admin-tweet-list",
    component: () => import("@/views/AdminMain"),
    beforeEnter: authenticateIsAdmin,
  },

  {
    path: "/usermain",
    name: "UserMain",
    component: UserMain,
  },
  {
    path: "/admin",
    name: "admin-root",
    redirect: "/admin/login",
  },
  {
    path: "/",
    name: "root",
    redirect: "/login",
  },
];

const router = new VueRouter({
  linkExactActiveClass: "active",
  routes,
});

// router.beforeEach((to, from, next) => {
//   // 已經登入以後
//   // 在這個地方要使用vuex要import store
//   console.log("beforeEach", to, from);
//   store.dispatch(SET_CURRENT_USER);
//   // 等取得現在使用者資料再用commit存好當前使用者
//   next();
// });

export default router;