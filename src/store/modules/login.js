// todo this is initial dummy data
import {
  dummyCurrentUser
} from "../../data/dummyUsers";

// import axios from "axios";
import {
  GET_LOGIN_INFO,
  SET_LOGIN_INFO,
  POST_LOGIN,
  SET_CURRENT_USER,
} from "../store-types";

const state = {
  loginInfo: {
    email: "",
    password: "",
  },
};
const getters = {
  [GET_LOGIN_INFO]: (state) => state.loginInfo,
};
const actions = {
  [SET_LOGIN_INFO]: async ({
    commit
  }, {
    email,
    password
  }) => {
    console.log("setlogininfo");
    commit(SET_LOGIN_INFO, {
      email,
      password,
    });
  },

  [POST_LOGIN]: async ({
    dispatch
  }) => {
    // todo request login api with state.email, state.password
    // if success set current user
    dispatch(SET_CURRENT_USER, dummyCurrentUser);
  },
};
const mutations = {
  [SET_LOGIN_INFO]: (state, {
    email,
    password
  }) => {
    state.loginInfo = {
      ...state.loginInfo,
      ...{
        email,
        password,
      },
    };
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};