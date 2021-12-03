// import axios from "axios";

// import {
//   GET_CURRENT_USER,
//   SET_CURRENT_USER
// } from "../store-types";

// // todo this is initial dummy data
// const state = {
//   currentUser: {
//     id: -1,
//     name: "",
//     email: "",
//     image: "",
//     isAdmin: false,
//   },
//   isAuthenticated: false,
// };
// const getters = {
//   [GET_CURRENT_USER]: (state) => state.currentUser,
// };
// const actions = {
//   [SET_CURRENT_USER]: async ({
//     commit
//   }) => {
//     const response = await axios.get("https://fakestoreapi.com/products");
//     commit(SET_CURRENT_USER, response.data);
//   },
// };
// const mutations = {
//   [SET_CURRENT_USER]: (state, currentUser) => {
//     state.currentUser = {
//       ...state.currentUser,
//       ...currentUser,
//     };
//     state.isAuthenticated = true;
//   },
// };

// export default {
//   state,
//   getters,
//   actions,
//   mutations,
// };