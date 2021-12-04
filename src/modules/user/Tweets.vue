<template>
  <div class="tweets-wrapper">
    <div class="tweet" v-for="tweet in tweets" :key="tweet.id">
      <div class="user-pic">
        <img :src="tweet.userImg" alt="" />
      </div>
      <div class="tweet-info">
        <div class="info">
          <p class="user-name">
            {{ tweet.name }} <span class="user-id">{{ tweet.userId }} • </span
            ><span class="time">{{ tweet.isCreated }}小時</span>
          </p>
        </div>
        <div class="tweet-text">{{ tweet.text }}</div>
        <div class="tweet-buttons-control">
          <div class="tweet-buttons">
            <img src="./../../assets/images/icon_reply.svg" alt="" />
            <p class="reply-num">{{ tweet.reply.length }}</p>
          </div>
          <div class="tweet-buttons">
            <img
              id="liked-btn"
              src="./../../assets/images/icon_like_fill.svg"
              alt=""
              @click="handleLikeButton(tweet.isLiked)"
              v-if="tweet.isLiked"
            />
            <img
              src="./../../assets/images/icon_like.svg"
              alt=""
              @click="handleLikeButton(tweet.isLiked)"
              v-else
            />

            <p class="liked-num" :class="{ liked: tweet.isLiked }">
              {{ tweet.likeNum }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    initialTweets: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      tweets: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.tweets = this.initialTweets;
    },
    handleLikeButton(isLiked) {
      console.log(isLiked);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./../../assets/scss/main.scss";
.tweets-wrapper {
  width: 100%;
}

.tweet {
  display: flex;
  padding: 15px 10px 15px 10px;
  font-size: 14px;
  border-bottom: 1px solid $gray-75;
}

.user-pic {
  width: 70px;
}
.user-pic img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
  border-radius: 50%;
}

.info {
  padding-bottom: 5px;
}
.user-name {
  font-weight: var(--fw-bold);
}

.info span {
  color: $gray-600;
  font-weight: var(--fw-normal);
}

.tweet-buttons-control {
  display: flex;
  font-size: 12px;
}

.tweet-buttons {
  margin-right: 45px;
  display: flex;
  padding-top: 10px;
  color: $gray-600;
  img {
    width: 14px;
    margin-right: 7px;
  }

  .liked {
    color: $red;
  }
}
</style>
