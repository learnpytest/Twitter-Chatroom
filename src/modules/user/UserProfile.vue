<template>
  <div class="profile-wrapper">
    <!-- 沒cover產生空圖 -->
    <img :src="userObj.cover | emptyImage" alt="" class="background-pic" />
    <div class="profile-pic">
      <!-- 沒有上傳照片產生空圖 -->
      <img :src="userObj.avatar | emptyImage" alt="" />
      <button @click="handleShowModalClick">編輯個人資料</button>
    </div>
    <div class="profile-details">
      <p class="profile-name">{{ userObj.name }}</p>
      <p class="profile-id">@{{ userObj.account }}</p>
      <p class="description">
        {{ userObj.introduction }}
      </p>
      <!-- todo api 沒有跟隨者與跟隨中使用者 -->
      <router-link :to="{ name: 'user-followers' }" class="profile-follow"
        >{{ userObj.FollowingsCount }}個<span>跟隨中</span></router-link
      >
      <router-link :to="{ name: 'user-followings' }" class="profile-follow"
        >{{ userObj.TweetCount }}位<span>跟隨者</span></router-link
      >
    </div>
  </div>
</template>
<script>
import { mixinEmptyImage } from "@/utils/mixin";

export default {
  mixins: [mixinEmptyImage],
  props: {
    initialEditModal: {
      type: Boolean,
      required: true,
    },
    initialUserObj: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showEditModal: false,
      text: "",
      userObj: {},
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.showEditModal = this.initialEditModal;
      this.userObj = this.initialUserObj;
    },
    handleShowModalClick() {
      this.showEditModal = false;
      this.$emit("show-edit-modal");
    },
  },
  watch: {
    initialUserObj(newValue) {
      this.userObj = {
        ...this.userObj,
        ...newValue,
      };
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./src/assets/scss/main.scss";
.background-pic {
  max-width: auto;
  height: 170px;
  object-fit: cover;
}

.profile-pic {
  position: relative;
  text-align: right;
  padding: 10px;

  img {
    position: absolute;
    width: 140px;
    height: 140px;
    object-fit: cover;
    top: -70px;
    left: 10px;
    border-radius: 50%;
  }
  button {
    font-weight: var(--fw-bold);
    border-radius: 25px;
    padding: 8px 14px;
    color: $orange-100;
    border: 1.5px solid $orange-100;
  }
}
.profile-details {
  padding: 10px;
  margin-top: 15px;
  .profile-name {
    font-weight: var(--fw-bolder);
    font-size: 18px;
  }
  .profile-id {
    font-size: 15px;
    color: $gray-600;
  }
  .description {
    margin: 10px 0;
  }
  .profile-follow {
    display: inline-block;
    font-size: 14px;
    margin-right: 20px;
    span {
      color: $gray-600;
      margin-left: 2px;
    }
  }
}
</style>
