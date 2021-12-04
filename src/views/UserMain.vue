<template>
  <div class="container">
    <div class="reply-modal" v-if="showModal">
      <NewTweetModal :initialShowModal="showModal" @show-modal="modalToggle" />
    </div>
    <div class="usermain">
      <div class="sidebar"><Sidebar /></div>
      <div class="main">
        <div class="addtweet">
          <AddTweet :initialShowModal="showModal" @show-modal="modalToggle" />
        </div>
        <div class="tweets"><Tweets :initialTweets="tweets" /></div>
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

const dummyData = {
  users: [
    {
      id: 1,
      name: "Jm Malik",
      userId: "@jmmalik",
      userImg: "",
      followings: [
        {
          id: 10,
          name: "Jeff Bezos",
          userId: "@jeffbezos",
          img: "",
          isFollowed: true,
        },
        {
          id: 11,
          name: "Martin Loo",
          userId: "@martinloo",
          img: "",
          isFollowed: true,
        },
        {
          id: 12,
          name: "Zeus",
          userId: "@zeus",
          img: "",
          isFollowed: false,
        },
        {
          id: 13,
          name: "Key",
          userId: "@key",
          img: "",
          isFollowed: true,
        },
      ],
      followers: [
        {
          id: 20,
          name: "Nando",
          userId: "@nando",
          img: "",
          isFollowed: true,
        },
        {
          id: 21,
          name: "Sushi King",
          userId: "@sushiking",
          img: "",
          isFollowed: true,
        },
        {
          id: 22,
          name: "Bawang",
          userId: "@bawang",
          img: "",
          isFollowed: true,
        },
      ],
    },
  ],
  tweets: [
    {
      id: 1,
      name: "apple",
      userId: "@apple",
      userImg: "https://i.pravatar.cc/300",
      isCreated: 3,
      text: "asdfafdhsmnbxcvhbjksiiewrhiu fasdnkjh d asduif eriuh asdfkb akf oweoiab dfjk iwerg jnsdbf oaiyerg mnz sdfioyagwer oiadskf yig weig oifya jasdkb oaiwertyg ao",
      isLiked: true,
      reply: [
        {
          id: 30,
          name: "samsung",
          userId: "@samsung",
          isCreated: "12",
          text: "asdfafdasdf asd g hdfhfg o",
        },
      ],
      likeNum: 3,
    },
    {
      id: 2,
      name: "Bill Withers",
      userId: "@bill",
      userImg: "https://i.pravatar.cc/300",
      isCreated: 3,
      text: "asjh d asduif eriuh asdfkb akf oweoiab dfjk iwerg jnsdbf oaiyerg mnz sdfioyagwer oiadskf yig weig oifya jasdkb oaiwertyg ao",
      isLiked: true,
      reply: [
        {
          id: 30,
          name: "samsung",
          userId: "@samsung",
          isCreated: "12",
          text: "asdfafdasdf asd g hdfhfg o",
        },
      ],
      likeNum: 3,
    },
    {
      id: 3,
      name: "Rai",
      userId: "@sunrai",
      userImg: "https://i.pravatar.cc/300",
      isCreated: 3,
      text: "asjh d asduif eriuh asdfkb akf oweoiab dfjk iwerg jnsdbf oaiyerg mnz sdfioyagwer oiadskf yig weig oifya jasdkb oaiwertyg ao",
      isLiked: true,
      reply: [
        {
          id: 30,
          name: "samsung",
          userId: "@samsung",
          isCreated: "12",
          text: "asdfafdasdf asd g hdfhfg o",
        },
      ],
      likeNum: 3,
    },
    {
      id: 4,
      name: "apple",
      userId: "@apple",
      userImg: "https://i.pravatar.cc/300",
      isCreated: 3,
      text: "asdfafdhsmnbxcvhbjksiiewrhiu fasdnkjh d asduif eriuh asdfkb akf oweoiab dfjk iwerg jnsdbf oaiyerg mnz sdfioyagwer oiadskf yig weig oifya jasdkb oaiwertyg ao",
      isLiked: false,
      reply: [
        {
          id: 30,
          name: "samsung",
          userId: "@samsung",
          isCreated: "12",
          text: "asdfafdasdf asd g hdfhfg o",
        },
      ],
      likeNum: 3,
    },
    {
      id: 5,
      name: "Bill Withers",
      userId: "@bill",
      userImg: "https://i.pravatar.cc/300",
      isCreated: 3,
      text: "asjh d asduif eriuh asdfkb akf oweoiab dfjk iwerg jnsdbf oaiyerg mnz sdfioyagwer oiadskf yig weig oifya jasdkb oaiwertyg ao",
      isLiked: true,
      reply: [
        {
          id: 30,
          name: "samsung",
          userId: "@samsung",
          isCreated: "12",
          text: "asdfafdasdf asd g hdfhfg o",
        },
      ],
      likeNum: 3,
    },
    {
      id: 6,
      name: "Rai",
      userId: "@sunrai",
      userImg: "https://i.pravatar.cc/300",
      isCreated: 3,
      text: "asjh d asduif eriuh asdfkb akf oweoiab dfjk iwerg jnsdbf oaiyerg mnz sdfioyagwer oiadskf yig weig oifya jasdkb oaiwertyg ao",
      isLiked: true,
      reply: [
        {
          id: 30,
          name: "samsung",
          userId: "@samsung",
          isCreated: "12",
          text: "asdfafdasdf asd g hdfhfg o",
        },
      ],
      likeNum: 3,
    },
  ],
};

export default {
  components: {
    AddTweet,
    Tweets,
    Popular,
    Sidebar,
    NewTweetModal,
  },
  data() {
    return {
      showModal: false,
      users: [],
      tweets: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      const { users, tweets } = dummyData;
      this.users = users;
      this.tweets = tweets;
    },
    modalToggle() {
      if (!this.showModal) {
        this.showModal = true;
      } else {
        this.showModal = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/main.scss";
.reply-modal {
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
