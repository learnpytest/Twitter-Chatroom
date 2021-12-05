import axios from "axios";
// import Swal from "sweetalert2"
// import store from "../../store"

// const baseURL = 'https://forum-express-api.herokuapp.com/api'
const baseURL = "https://twitter-llrs-api.herokuapp.com/api";

const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    // if (!store.state.workInProcess.work) {
    //   store.commit('setPreloader', true)
    // } else {
    //   store.commit('setPreloader', false)
    // }
    return config;
  },
  (err) => Promise.reject(err)
);

// todo set pre-loader
// axiosInstance.interceptors.response.use(response => {
//   store.commit('setPreloader', false)
//   return response
// }, err => Promise.reject(err))

export const apiHelper = axiosInstance;

// todo notification
// export const Toast = Swal.mixin({
//   toast: true,
//   position: "center",
//   showConfirmButton: false,
//   timer: 3000
// })