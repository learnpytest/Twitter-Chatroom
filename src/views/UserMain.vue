<template>
  <div class="container">
    <div class="new-tweet-modal" v-if="showModal">
      <NewTweetModal :initialShowModal="showModal" @show-modal="modalToggle" />
    </div>
    <div class="new-tweet-modal" v-if="showReplyModal">
      <ReplyTweetModal
        :initialShowReplyModal="showReplyModal"
        @show-reply-modal="replyModalToggle"
      />
    </div>
    <div class="usermain">
      <div class="sidebar">
        <Sidebar :initialShowModal="showModal" @show-modal="modalToggle" />
      </div>
      <div class="main">
        <div class="addtweet">
          <AddTweet :initialShowModal="showModal" @show-modal="modalToggle" />
        </div>

        <div class="tweets">
          <Tweets
            :initialShowReplyModal="showReplyModal"
            @show-reply-modal="replyModalToggle"
            :initialTweets="userTweets"
          />
        </div>
      </div>
      <div class="popular"><Popular /></div>
    </div>
  </div>
</template>

<script>
// import Sidebar from "../modules/Sidebar.vue";
import AddTweet from "../modules/user/AddTweet.vue";
import Tweets from "../modules/user/Tweets.vue";
import Popular from "../modules/user/Popular.vue";
import Sidebar from "../modules/user/Sidebar.vue";
import NewTweetModal from "../modules/user/NewTweetModal.vue";
import ReplyTweetModal from "../modules/user/ReplyTweetModal.vue";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import { GET_FILLTERED_TWEETS } from "./../store/store-types";
import {
  // SET_TWEETS_FILTER_TYPE,
  // GET_ALL_TWEETS,
  SET_ALL_TWEETS,
} from "../store/store-types";

export default {
  components: {
    AddTweet,
    Tweets,
    Popular,
    Sidebar,
    NewTweetModal,
    ReplyTweetModal,
  },
  data() {
    return {
      showModal: false,
      showReplyModal: false,
      users: [],
    };
  },
  created() {
    // this.setTweetsFilterType({
    //   getter: GET_ALL_TWEETS,
    //   setter: SET_ALL_TWEETS,
    // });
    this.setAllTweets();
  },

  methods: {
    // ...mapActions({ setTweetsFilterType: SET_TWEETS_FILTER_TYPE }),
    ...mapActions({ setAllTweets: SET_ALL_TWEETS }),

    // fetchData() {
    //   const { users, tweets } = dummyData;
    //   this.users = users;
    //   this.tweets = tweets;
    // },
    modalToggle() {
      if (!this.showModal) {
        this.showModal = true;
      } else {
        this.showModal = false;
      }
    },
    getTweets() {
      console.log(this.$store.state);
      console.log("dispatch tweets vue");

      this.$store.dispatch(`${this.filterType.setter}`);
    },
    replyModalToggle() {
      if (!this.showReplyModal) {
        this.showReplyModal = true;
      } else {
        this.showReplyModal = false;
      }
    },
  },
  computed: {
    ...mapGetters({
      userTweets: GET_FILLTERED_TWEETS,
    }),
  },
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
.usermain {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  height: 100vh;
}
.container {
  height: 100%;
}
.sidebar {
  width: 18%;
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
</style>
