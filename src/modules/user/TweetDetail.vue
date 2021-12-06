<template>
  <div class="tweet-detail-wrapper">
    <div class="header">
      <img
        src="./../../assets/images/icon_back.png"
        alt=""
        @click="$router.back()"
      />
      <p>推文</p>
    </div>
    <div class="tweet-detail-box">
      <div class="tweet-detail-box_user-info">
        <img
          class="user-pic"
          src="./../../assets/images/Photo_user1.png"
          alt=""
        />
        <div class="nameId">
          <p>Apple</p>
          <p>@apple</p>
        </div>
      </div>
      <div class="tweet-detail-box_text">
        <p>
          Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
          cillum dolor. Voluptate exercitation incididunt aliquip deserunt
          reprehenderit elit laborum.
        </p>
        <p class="tweet-detail-box_created-detail">上午 10:05・2020年6月10日</p>
      </div>
      <div class="tweet-detail-box_numbers">
        <p>12<span>回覆</span></p>
        <p>808<span>喜歡次數</span></p>
      </div>
      <div class="tweet-detail-box_btn-control">
        <img
          src="./../../assets/images/icon_reply.svg"
          alt=""
          @click.stop.prevent="handleShowModalClick"
        />
        <img src="./../../assets/images/icon_like.svg" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    initialShowReplyModal: {
      type: Boolean,
      //test need to set required on true
      // required: true,
    },
  },
  data() {
    return {
      showReplyModal: false,
    };
  },
  methods: {
    fetchData() {
      this.showReplyModal = this.initialShowReplyModal;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./../../assets/scss/main.scss";
.tweet-detail-wrapper {
  border-bottom: 1px solid $gray-75;
}
.header {
  font-weight: var(--fw-bold);
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid $gray-75;
  padding-left: 15px;

  display: flex;
  align-items: center;
  img {
    width: 20px;
    height: 20px;
    margin-right: 40px;
  }
  img:hover {
    cursor: pointer;
  }
}
.tweet-detail-box {
  padding: 10px;
}
.tweet-detail-box_user-info {
  display: flex;
  flex-flow: row nowrap;
  margin: 10px 0;
  font-weight: var(--fw-bold);
  font-size: 15px;
  align-items: center;

  p:nth-child(2) {
    color: $gray-600;
    font-weight: var(--fw-normal);
  }
  img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
}
.tweet-detail-box_text {
  width: 85%;
  font-size: 19px;
  line-height: 28px;
  .tweet-detail-box_created-detail {
    font-size: 15px;
    color: $gray-600;
    margin: 7px 0;
  }
}
.tweet-detail-box_numbers {
  display: flex;
  padding: 15px 0;
  border-top: 1px solid $gray-75;
  border-bottom: 1px solid $gray-75;
  p {
    margin-right: 30px;
    font-size: 16px;
    font-weight: var(--fw-bold);
  }
  p span {
    font-weight: var(--fw-normal);
    color: $gray-600;
    margin-left: 5px;
  }
}

.tweet-detail-box_btn-control {
  display: flex;
  padding: 15px 0 5px 0;
  img {
    width: 25px;
    margin-right: 130px;
  }
}
</style>
