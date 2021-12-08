// import currentUserAPI from "../../apis/currentUserAPI";
import followshipAPI from "../../apis/followshipAPI";
// import {
//   vm
// } from "../../main";

import {
  GET_CURRENT_USER_FOLLOWERS,
  SET_CURRENT_USER_FOLLOWERS,
  GET_CURRENT_USER_FOLLOWINGS,
  SET_CURRENT_USER_FOLLOWINGS,
  POST_FOLLOWSHIP,
  DELETE_FOLLOWSHIP,
  ADD_NOTIFICATION,
} from "../store-types";

const state = {
  currentUserFollowers: [],
  currentUserFollowings: [],
};
const getters = {
  [GET_CURRENT_USER_FOLLOWERS]: (state) => state.currentUserFollowers,
  [GET_CURRENT_USER_FOLLOWINGS]: (state) => state.currentUserFollowings,
};
const actions = {
  [SET_CURRENT_USER_FOLLOWERS]: async ({
    commit,
    rootState
  }) => {
    // send api
    const userId = rootState.user.currentUser.id;

    try {
      const res = await followshipAPI.getFollowers(userId);
      const {
        statusText,
        data
      } = res;
      if (statusText !== "OK") {
        throw new Error(statusText);
      }
      commit(SET_CURRENT_USER_FOLLOWERS, data);
    } catch (err) {
      console.log(err);
    }
  },
  [SET_CURRENT_USER_FOLLOWINGS]: async ({
    commit,
    rootState
  }) => {
    // send api
    const userId = rootState.user.currentUser.id;

    try {
      const res = await followshipAPI.getFollowings(userId);
      const {
        statusText,
        data
      } = res;
      if (statusText !== "OK") {
        throw new Error(statusText);
      }
      commit(SET_CURRENT_USER_FOLLOWINGS, data);
    } catch (err) {
      console.log(err);
    }
  },
  [POST_FOLLOWSHIP]: async ({
    dispatch
  }, targetedUserId) => {
    try {
      const res = await followshipAPI.postFollowships(targetedUserId);
      const {
        data,
        statusText
      } = res;
      if (data.status !== "success" || statusText !== "OK") {
        throw new Error(data.message);
      }
      dispatch(ADD_NOTIFICATION, {
        type: "success",
        message: "跟隨成功",
      });

      dispatch(SET_CURRENT_USER_FOLLOWINGS);
      dispatch(SET_CURRENT_USER_FOLLOWERS);
    } catch (err) {
      dispatch(ADD_NOTIFICATION, {
        type: "error",
        message: "更新跟隨資料失敗，請稍後再試",
      });
    }
  },
  [DELETE_FOLLOWSHIP]: async ({
    dispatch
  }, targetedUserId) => {
    const res = await followshipAPI.deleteFollowship(targetedUserId);
    const {
      data,
      statusText
    } = res;
    if (data.status !== "success" || statusText !== "OK") {
      throw new Error(data.message);
    }
    dispatch(ADD_NOTIFICATION, {
      type: "success",
      message: "成功取消跟隨",
    });
    dispatch(SET_CURRENT_USER_FOLLOWINGS);
    dispatch(SET_CURRENT_USER_FOLLOWERS);
  },
};
const mutations = {
  [SET_CURRENT_USER_FOLLOWERS]: async (state, currentUserFollowers) => {
    state.currentUserFollowers = [...currentUserFollowers];
  },
  [SET_CURRENT_USER_FOLLOWINGS]: async (state, currentUserFollowings) => {
    state.currentUserFollowings = [...currentUserFollowings];
    console.log("setcurrentUserFollowings mutation", currentUserFollowings);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};