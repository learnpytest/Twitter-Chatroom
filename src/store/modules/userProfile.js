// need to use this for real sign in
import usersAPI from "../../apis/usersAPI";
import currentUserAPI from "../../apis/currentUserAPI";

// import {
//   vm
// } from "../../main";

import {
  PUT_CURRENT_USER_PROFILE,
  SET_IS_PROCESSING,
  SET_CURRENT_USER_PROFILE,
  FETCH_CURRENT_USER,
} from "../store-types";

const state = {};
const getters = {
  [FETCH_CURRENT_USER]: (state) => state.currentUserProfile,
};
const actions = {
  [SET_CURRENT_USER_PROFILE]: async ({
    commit
  }) => {
    const res = await currentUserAPI.getCurrentUser();

    commit(SET_CURRENT_USER_PROFILE, res.data);
  },
  [PUT_CURRENT_USER_PROFILE]: async ({
    rootState,
    dispatch
  }, formData) => {
    const userId = rootState.user.currentUser.id;
    try {
      dispatch(SET_IS_PROCESSING, true);
      const res = await usersAPI.putUserProfile({
        userId,
        formData,
      });
      const {
        data,
        statusText
      } = res;
      if (statusText !== "OK" || data.status !== "success") {
        throw new Error(data.message);
      }
      dispatch(SET_CURRENT_USER_PROFILE);
      console.log("putuserprofile", userId, res);
      dispatch(SET_IS_PROCESSING, false);
    } catch (err) {
      dispatch(SET_IS_PROCESSING, false);
    }

    // const {
    //   account,
    //   username: name,
    //   email,
    //   password,
    //   checkPassword,
    // } = state.accountInfo;
    // if (!account || !name || !email || password !== checkPassword) {
    //   throw new Error("欄位填寫不正確");
    // }
    // //  request api
    // const id = rootState.user.currentUser.id;
    // const res = await userAccountAPI.update(id, {
    //   account,
    //   name,
    //   email,
    //   password,
    //   checkPassword,
    // });
    // const {
    //   data,
    //   statusText
    // } = res;
    // if (data.status !== "success" || statusText !== "OK") {
    //   throw new Error(data.message);
    // }
    // // 提示修改資料成功再拉取當前使用者資料
    // dispatch(ADD_NOTIFICATION, {
    //   type: "success",
    //   message: "已編輯個人資料",
    // });
  },
};

const mutations = {
  [SET_CURRENT_USER_PROFILE]: async (state, currentUserProfile) => {
    state.currentUserProfile = {
      ...currentUserProfile,
    };
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};