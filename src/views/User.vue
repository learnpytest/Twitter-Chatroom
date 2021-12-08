<template>
  <div class="container">
    <div class="new-tweet-modal" v-if="showModal">
      <NewTweetModal :initialShowModal="showModal" @show-modal="modalToggle" />
    </div>
    <div class="user-edit-modal" v-if="showEditModal">
      <UserEditModal
        :initialEditModal="showEditModal"
        @show-edit-modal="editModalToggle"
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
            <!-- <p>John Doe</p>
            <p>25 <span>推文</span></p> -->
            <p>{{ getCurrentUser.name }}</p>
            <p>25 <span>推文</span></p>
          </div>
        </div>
        <div class="user-profile">
          <UserProfile
            :initialEditModal="showEditModal"
            @show-edit-modal="editModalToggle"
          />
        </div>
        <tabs class="tabs">
          <tab title="推文"><Tweets :initialTweets="userTweets" /></tab>
          <!-- <tab class="comments" title="推文與回覆"><Comments /></tab> -->
          <tab title="喜歡的內容"><Tweets :initialTweets="userTweets" /></tab>
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
// import Comments from "../modules/user/Comments.vue";
import UserEditModal from "../modules/user/UserEditModal.vue";
import NewTweetModal from "../modules/user/NewTweetModal.vue";
// import tweetsAPI from "./../apis/tweets";
import { mapGetters } from "vuex";
import {
  GET_CURRENT_USER,
  // SET_ONE_USER_TWEETS,
} from "../store/store-types";
import currentUserApi from "./../apis/currentUserAPI";
import tweetsApi from "./../apis/tweets";

export default {
  components: {
    Popular,
    Sidebar,
    UserProfile,
    Tweets,
    Tabs,
    Tab,
    // Comments,
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
    };
  },
  created() {
    this.fetchCurrentUser();
  },
  methods: {
    async fetchCurrentUser() {
      try {
        const response = await currentUserApi.getCurrentUser();
        const { id } = response.data;
        console.log(id);
        this.currentUserId = id;
        this.getUsersTweets(this.currentUserId);
      } catch (error) {
        console.log("error", error);
      }
    },
    async getUsersTweets(userId) {
      try {
        const response = await tweetsApi.getOneUserTweet({ userId });
        console.log(userId);
        const { data } = response;
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        console.log(response);
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
  computed: {
    ...mapGetters({
      getCurrentUser: GET_CURRENT_USER,
    }),
  },
  // created() {
  //   this.setTweetsFilterType({
  //     getter: GET_ONE_USER_TWEETS,
  //     setter: SET_ONE_USER_TWEETS,
  //   });
  // },
  // methods: {
  //   ...mapActions({ setTweetsFilterType: SET_TWEETS_FILTER_TYPE }),
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
}
.main {
  width: 42%;
  height: 100%;
  margin: 0 30px;
  border: 1px solid $gray-75;
}

.popular {
  width: 25%;
  height: 100%;
}
.sidebar {
  width: 18%;
}
</style>
