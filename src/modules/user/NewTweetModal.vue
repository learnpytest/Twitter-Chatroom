<template>
  <div class="reply-tweet-modal">
    <div class="reply-text-box">
      <div class="close-btn">
        <button>
          <img
            src="./../../assets/images/icon_close.svg"
            alt=""
            @click="handleShowModalClick"
          />
        </button>
      </div>
      <div class="text-box">
        <div class="user-info">
          <img
            class="user-pic"
            src="./../../assets/images/Photo_user1.png"
            alt=""
          />
        </div>
        <div class="text-area">
          <textarea
            class="form-control"
            rows="3"
            v-model="text"
            placeholder="有什麽新鮮事？"
            @submit.stop.prevent="handleTweetSubmit"
          />
        </div>
      </div>
      <div class="tweet-btn">
        <button>推文</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    initialShowModal: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      showModal: "",
      text: "",
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.showModal = this.initialShowModal;
    },
    handleShowModalClick() {
      this.showModal = true;
      this.$emit("show-modal");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./src/assets/scss/main.scss";
.reply-tweet-modal {
  background-color: rgba(28, 28, 28, 0.5);
  height: 100%;
  padding-top: 50px;
}

.text-area {
  width: 90%;
  textarea {
    border: 0px;
    min-height: 150px;
    resize: none;
    width: 100%;
    margin-left: 10px;
    margin-top: 10px;
  }
}

.reply-text-box {
  width: 43%;
  margin: 0 auto;
  background-color: $white;
  border-radius: 10px;
}
.close-btn {
  border-bottom: 1px solid $gray-75;
  padding: 10px;
}
.text-box {
  border-top: 0px;
  padding: 10px;
  display: flex;
  flex-flow: row nowrap;
}

.tweet-btn {
  text-align: right;
  padding: 10px;
}

.tweet-btn button {
  background-color: $orange-100;
  // font-weight: var(--fw-normal);
  color: $white;
  font-size: 16px;
  width: 65px;
  height: 36px;
  border-radius: 50px;
}

.user-info {
  color: $gray-700;
  width: 10%;
  img {
    max-width: 50px;
    max-height: 50px;
  }
  .user-pic {
    margin-right: 10px;
  }
}

.tweet-info p {
  color: $gray-700;
  letter-spacing: 1px;
}
</style>
