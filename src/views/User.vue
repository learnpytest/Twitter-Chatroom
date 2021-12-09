<template>
  <div class="container">
    <div class="new-tweet-modal" v-if="showModal">
      <NewTweetModal
        :initialShowModal="showModal"
        @show-modal="modalToggle"
        @updateData="updateTweetsData"
      />
    </div>
    <div class="user-edit-modal" v-if="showEditModal">
      <UserEditModal
        :initialUserObj="userObj"
        :initialEditModal="showEditModal"
        @show-edit-modal="editModalToggle"
        @afterUpdateUserProfile="fetchUser(userId)"
      />
    </div>
    <div class="user">
      <div class="sidebar">
        <Sidebar :initialShowModal="showModal" @show-modal="modalToggle" />
      </div>
      <div class="main">
        <div class="header">
          <img
            src="./../assets/images/icon_back.png"
            alt=""
            @click="$router.back()"
          />
          <div class="header-info">
            <p>{{ userObj.name }}</p>
            <p>{{ userObj.TweetCount }} <span>推文</span></p>
          </div>
        </div>
        <div class="user-profile">
          <UserProfile
            :initialEditModal="showEditModal"
            @show-edit-modal="editModalToggle"
            :initialUserObj="userObj"
          />
        </div>
        <tabs class="tabs">
          <tab title="推文" class="user-tweets"
            ><Tweets :initialTweets="userTweets"
          /></tab>
          <tab class="comments" title="推文與回覆"
            ><Comments :initialTweets="userRepliesTweets"
          /></tab>
          <tab title="喜歡的內容" class="liked-tweets"
            ><Tweets :initialTweets="userLikes"
          /></tab>
        </tabs>
      </div>
      <div class="popular"><Popular /></div>
    </div>
  </div>
</template>
<script>
import Popular from "../modules/user/Popular.vue";
import Sidebar from "../modules/user/Sidebar.vue";
import UserProfile from "../modules/user/UserProfile.vue";
import Tweets from "../modules/user/Tweets.vue";
import Tabs from "../modules/user/Tabs.vue";
import Tab from "../modules/user/Tab.vue";
import Comments from "../modules/user/Comments.vue";
import UserEditModal from "../modules/user/UserEditModal.vue";
import NewTweetModal from "../modules/user/NewTweetModal.vue";

import usersAPI from "./../apis/usersAPI";
import tweetsApi from "./../apis/tweets";

// 必須監聽使用者跟隨被跟隨的變動，改變跟隨與被跟隨數字
// import { mapGetters } from "@/utils/mixin";
// import {
//   // GET_CURRENT_USER_FOLLOWERS,
//   GET_CURRENT_USER_FOLLOWINGS,
// } from "../store/store-types";

export default {
  components: {
    Popular,
    Sidebar,
    UserProfile,
    Tweets,
    Tabs,
    Tab,
    Comments,
    UserEditModal,
    NewTweetModal,
  },
  data() {
    return {
      showModal: false,
      showEditModal: false,
      showReplyModal: false,
      currentUserId: -1,
      userTweets: [],
      userId: "",
      userObj: {},
      userRepliesTweets: [],
      userLikes: [],
    };
  },
  created() {
    this.userId = this.$route.params.id;
    this.getUsersTweets(this.userId);
    this.fetchUser(this.userId);
    this.getUserRepliesTweets(this.userId);
    this.getUserLikes(this.userId);
  },
  beforeRouteUpdate(to, from, next) {
    // 路由改變時重新更新使用者資料
    const { id } = to.params;
    this.fetchUser(id);
    next();
  },
  methods: {
    updateTweetsData() {
      this.getUsersTweets(this.userId);
      // this.showModal = false;
    },
    async getUserLikes(userId) {
      try {
        const res = await usersAPI.getUserLikes(userId);
        const { data, statusText } = res;
        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        this.userLikes = [...data];
      } catch (err) {
        console.log(err);
      }
    },
    async getUserRepliesTweets(userId) {
      try {
        const res = await usersAPI.getUserRepliesTweets(userId);
        const { data, statusText } = res;
        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        this.userRepliesTweets = [...data];
      } catch (err) {
        console.log(err);
      }
    },
    async fetchUser(userId) {
      try {
        const res = await usersAPI.getUser(userId);
        const { data, statusText } = res;
        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        this.userObj = { ...data };
        this.showModal = false;
      } catch (err) {
        console.log(err);
      }
    },
    async getUsersTweets(userId) {
      try {
        const response = await tweetsApi.getOneUserTweet(userId);
        const { data, statusText } = response;
        console.log("userId", userId, "userdata", data, "response", response);
        if (statusText !== "OK") {
          throw new Error(data.message);
        }
        this.userTweets = [...data];
        this.showModal = false;
      } catch (error) {
        console.log("error", error);
      }
    },
    // async getTweets(userId) {
    //   try {
    //     const { data } = await tweetsAPI.getOneUserTweet({ userId });
    //     console.log(data);
    //     console.log(this.getCurrentUser);

    //     // // STEP 5: 透過 restaurantsAPI 取得餐廳資訊
    //     // const { restaurant, isFavorited, isLiked } = data;
    //     // const {
    //     //   id,
    //     //   name,
    //     //   Category,
    //     //   image,
    //     //   opening_hours: openingHours,
    //     //   tel,
    //     //   address,
    //     //   description,
    //     //   Comments,
    //     // } = restaurant;

    //     // this.restaurant = {
    //     //   id,
    //     //   name,
    //     //   categoryName: Category ? Category.name : "未分類",
    //     //   image,
    //     //   openingHours,
    //     //   tel,
    //     //   address,
    //     //   description,
    //     //   isFavorited,
    //     //   isLiked,
    //     // };

    //     // this.restaurantComments = Comments;
    //   } catch (error) {
    //     // STEP 6: 透過 restaurantsAPI 取得餐廳資訊
    //     console.log(error);
    //   }
    // },

    editModalToggle() {
      if (!this.showEditModal) {
        this.showEditModal = true;
      } else {
        this.showEditModal = false;
      }
    },
    modalToggle() {
      if (!this.showModal) {
        this.showModal = true;
      } else {
        this.showModal = false;
      }
    },
  },

  // 必須監聽使用者跟隨被跟隨的變動，改變跟隨與被跟隨數字
  // computed {
  //   ...mapGetter({
  //     currentUserFollowers: GET_CURRENT_USER_FOLLOWINS,
  //   ),
  //},
  // watch: {
  //   currentUserFollowers() {
  //     this.fetchUser(this.userId);
  //   },
  // },
};
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/main.scss";
.new-tweet-modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  height: 100%;
}
.user-edit-modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  height: 100%;
}
.header {
  display: flex;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid $gray-75;
  padding-left: 15px;
  font-weight: var(--fw-bolder);
  background-color: $white;
  .header-info {
    :nth-child(2) {
      font-size: 13px;
      color: $gray-600;
      font-weight: var(--fw-normal);
    }
  }

  img {
    width: 20px;
    height: 20px;
    margin-right: 40px;
  }
  img:hover {
    cursor: pointer;
  }
}
.user {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  height: 100vh;
  overflow-y: scroll;
}

.container {
  overflow: hidden;
}

.main {
  width: 42%;
  height: 100%;
  margin: 0 30px;
}
.header,
.user-profile,
.tabs {
  border-left: 1px solid $gray-75;
  border-right: 1px solid $gray-75;
}

.popular {
  width: 25%;
  height: 100%;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
}
.sidebar {
  width: 18%;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
}

// .liked-tweets,
// .user-tweets,
// .comments {
//   border: 1px solid $gray-75;
// }
</style>
