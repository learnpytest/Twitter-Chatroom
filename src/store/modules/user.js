// import axios from "axios";

import {
  GET_CURRENT_USER,
  SET_CURRENT_USER
} from "../store-types";

const state = {
  currentUser: {
    id: -1,
    name: "",
    email: "",
    image: "",
    isAdmin: false,
  },
  isAuthenticated: false,
};
const getters = {
  [GET_CURRENT_USER]: (state) => state.currentUser,
};
const actions = {
  [SET_CURRENT_USER]: async ({
    commit
  }, currentUser) => {
    // todo replace the dummyCurrentUser with response by sending api
    // start
    // const response = await axios.get("https://fakestoreapi.com/products");
    // const {data, status, statusText} = response
    // if (status !== 'success' || data.status !== 'success') throw new Error('statusText')
    // commit(SET_CURRENT_USER, response.data);
    // end
    commit(SET_CURRENT_USER, currentUser);
  },
};
const mutations = {
  [SET_CURRENT_USER]: (state, currentUser) => {
    state.currentUser = {
      ...state.currentUser,
      ...currentUser,
    };
    state.isAuthenticated = true;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};