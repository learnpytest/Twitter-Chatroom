import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueSocketIO from "vue-socket.io";

// import "@fortawesome/fontawesome-free/css/all.css";
// import "@fortawesome/fontawesome-free/js/all.js";

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: "http://metinseylan.com:1992",
    vuex: {
      store,
      actionPrefix: "SOCKET_",
      mutationPrefix: "SOCKET_",
    },
    options: { path: "/my-app/" }, //Optional options
  })
);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
