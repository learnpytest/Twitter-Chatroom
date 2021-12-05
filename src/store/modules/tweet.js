// import axios from "axios";
// import api
import tweets from "../../apis/tweets";

import {
  GET_ALL_TWEETS,
  SET_ALL_TWEETS
} from "../store-types";

const state = {
  allTweets: [],
};
const getters = {
  [GET_ALL_TWEETS]: (state) => state.allTweets,
};
const actions = {
  [SET_ALL_TWEETS]: async ({
    commit
  }) => {
    const res = await tweets.all();
    // send api to get reponse of all tweets and pass tweets to mutation to change state all the tweets
    // start
    const {
      data,
      statusText
    } = res;
    if (statusText !== "OK") throw new Error("statusText");
    commit(SET_ALL_TWEETS, data);
    // end
    console.log(res.data, "tweets");
  },
};
const mutations = {
  [SET_ALL_TWEETS]: (state, allTweets) => {
    state.allTweets = {
      ...state.allTweets,
      ...allTweets,
    };
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};