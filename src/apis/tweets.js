// this will be merged into usersAPI
import { apiHelper } from "../apis/apiHelper";

export default {
  all() {
    return apiHelper.get("/tweets");
  },
  tweet(tweetId) {
    return apiHelper.get(`/tweets/${tweetId}/replies`);
  },
  getTweet(tweetId) {
    return apiHelper.get(`/tweets/${tweetId}`);
  },
  getOneUserTweet(userId) {
    return apiHelper.get(`/users/${userId}/tweets`);
  },
  getOneUserReplies(userId) {
    return apiHelper.get(`/users/${userId}/replied_tweets`);
  },
  getOneUserLikes(userId) {
    return apiHelper.get(`/users/${userId}/likes`);
  },
};
