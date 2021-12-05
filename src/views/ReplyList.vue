<template>
  <div class="container">
    <div class="reply-modal"></div>
    <div class="reply-list">
      <div class="sidebar"><Sidebar /></div>
      <div class="main">
        <div class="tweet-detail"><TweetDetail /></div>
        <div class="tweets"></div>
      </div>
      <div class="popular"><Popular /></div>
    </div>
  </div>
</template>
<script>
import Popular from "../modules/user/Popular.vue";
import Sidebar from "../modules/user/Sidebar.vue";
import TweetDetail from "../modules/user/TweetDetail.vue";
export default {
  components: {
    Popular,
    Sidebar,
    TweetDetail,
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
.reply-list {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  height: 100%;
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
}
</style>
