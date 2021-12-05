// need to use this for real sign in
import userAccountAPI from "../../apis/userAccountAPI";

import {
  vm
} from "../../main";

import {
  GET_ACCOUNT_INFO,
  SET_ACCOUNT_INFO,
  POST_ACCOUNT,
} from "../store-types";

const state = {
  accountInfo: {
    account: "",
    username: "",
    email: "",
    password: "",
    checkPassword: "",
  },
};
const getters = {
  [GET_ACCOUNT_INFO]: (state) => state.accountInfo,
};
const actions = {
  [SET_ACCOUNT_INFO]: async ({
    commit
  }, accountInfo) => {
    console.log(accountInfo);

    commit(SET_ACCOUNT_INFO, accountInfo);
  },
  [POST_ACCOUNT]: async ({
    state
  }) => {
    // todo 必填欄位與密碼確認的提示
    const {
      account,
      username: name,
      email,
      password,
      checkPassword,
    } = state.accountInfo;
    if (!account || !name || !email || password !== checkPassword) {
      throw new Error("欄位填寫不正確");
    }
    //  request api
    console.log("postAccountUser");
    const res = await userAccountAPI.signUp({
      account,
      name,
      email,
      password,
      checkPassword,
    });

    if (res.data.status !== "success") {
      throw new Error(res.data.message);
    }
    // todo 提示註冊成功再導向登入頁
    vm.$router.push("/login");
  },
};
const mutations = {
  [SET_ACCOUNT_INFO]: (state, accountInfo) => {
    state.accountInfo = {
      ...state.accountInfo,
      ...accountInfo,
    };
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};