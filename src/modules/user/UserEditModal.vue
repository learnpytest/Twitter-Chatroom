<template>
  <form class="user-edit-modal">
    <div class="user-edit-box">
      <div class="header-btn">
        <img
          src="./../../assets/images/icon_close.svg"
          alt=""
          @click="handleShowModalClick"
        />
        <p class="header-text">編輯個人資料</p>
        <button class="save-btn">儲存</button>
      </div>
      <div class="background-pic">
        <img :src="userCover" alt="" />
        <!-- <div class="pic-btn-control">
          <img
            src="./../../assets/images/icon_uploadPhoto.png"
            alt=""
            id="upload-btn"
          />
          
          <img
            src="./../../assets/images/icon_delete.png"
            alt=""
            id="delete-btn"
            @click="deleteCover"
          />
        </div> -->

        <div class="pic-btn-control">
          <label for="cover">
            <img
              src="./../../assets/images/icon_uploadPhoto.png"
              alt=""
              id="upload-btn"
            />
          </label>
          <input
            type="file"
            id="cover"
            name="cover"
            accept="image/png, image/jpeg"
            style="width: 0"
          />
          <img
            src="./../../assets/images/icon_delete.png"
            alt=""
            id="delete-btn"
            @click="deleteCover"
          />
        </div>
      </div>
      <div class="edit-profile-pic">
        <div class="profile-pic">
          <div class="profile-pic-wrapper">
            <!-- <img :src="fetchCurrentUser.avatar" alt="" class="" /> -->
            <label for="avatar">
              <img :src="fetchCurrentUser.avatar" alt="" class="" />
              <img
                src="./../../assets/images/icon_uploadPhoto.png"
                alt=""
                class="asd"
              />
            </label>
            <input
              type="file"
              id="avatar"
              name="avatar"
              accept="image/png, image/jpeg"
              style="width: 0"
            />
          </div>
        </div>
      </div>
      <div class="form__groups">
        <div class="form__group">
          <label for="name">名稱</label>
          <input type="name" id="name" name="name" v-model="username" />
          <div class="limit-error">
            <!-- todo error message -->
            <p>8/50</p>
          </div>
        </div>
        <div class="form__group">
          <label for="bio">自我介紹</label>
          <input type="bio" id="bio" name="bio" v-model="userIntroduction" />
          <div class="limit-error">
            <!-- todo error message -->
            <p>8/50</p>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>
<script>
// import { mixinEmptyImage } from "../../utils/mixin";
import { mapActions, mapGetters } from "vuex";
import {
  FETCH_CURRENT_USER,
  SET_CURRENT_USER_PROFILE,
} from "../../store/store-types";
export default {
  props: {
    initialEditModal: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      username: "",
      userCover: "",
      userIntroduction: "",
      showEditModal: false,
      text: "",
    };
  },
  created() {
    this.setCurrentUserProfile();
    this.username = this.fetchCurrentUser.name;
    this.userCover = this.fetchCurrentUser.cover;
    this.userIntroduction = this.fetchCurrentUser.introduction;
    this.fetchData();
  },
  methods: {
    deleteCover() {
      this.userCover = "";
    },
    ...mapActions({
      setCurrentUserProfile: SET_CURRENT_USER_PROFILE,
    }),
    fetchData() {
      this.showEditModal = this.initialEditModal;
    },
    handleShowModalClick() {
      this.showEditModal = false;
      this.$emit("show-edit-modal");
    },
  },
  computed: {
    ...mapGetters({
      fetchCurrentUser: FETCH_CURRENT_USER,
    }),
  },
};
</script>
<style lang="scss" scoped>
@import "./src/assets/scss/main.scss";
@import "@/assets/scss/utils/_variables.scss";
.header-text {
  position: absolute;
  left: 70px;
  font-weight: var(--fw-bold);
}

.header-btn {
  display: flex;
  flex-flow: row nowrap;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  position: relative;
  img {
    cursor: pointer;
  }
  .save-btn {
    border-radius: 25px;
    padding: 3px 12px;
    color: $white;
    background-color: $orange-100;
  }
}

.header-btn img {
  filter: invert(42%) sepia(75%) saturate(2795%) hue-rotate(2deg)
    brightness(105%) contrast(104%);
  width: 23px;
}
.user-edit-box {
  background-color: $white;
  width: 42%;
  margin: 0 auto;
  border-radius: 10px;
}
.user-edit-modal {
  background-color: rgba(28, 28, 28, 0.5);
  height: 100%;
  padding-top: 50px;
  width: 100%;
}
.background-pic img {
  max-width: auto;
  height: 170px;
  object-fit: cover;
}

.background-pic {
  position: relative;
  .pic-btn-control {
    display: flex;
    position: absolute;
    top: 50%; /* position the top  edge of the element at the middle of the parent */
    left: 50%; /* position the left edge of the element at the middle of the parent */
    transform: translate(-50%, -50%);
    img {
      width: 20px;
      height: 20px;
      line-height: 170px;
      margin-right: 30px;
    }
  }
}

.profile-pic {
  padding: 10px;
  margin-top: -90px;

  :nth-child(2) {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 50%; /* position the top  edge of the element at the middle of the parent */
    left: 50%; /* position the left edge of the element at the middle of the parent */
    transform: translate(-50%, -50%);
  }
  .profile-pic-wrapper {
    position: relative;
    width: 120px;
  }
}
.profile-pic img {
  width: 120px;
  height: 120px;
}
.form__group {
  font-size: 1rem;
  background-color: $gray-50;
  margin: 10px;
  input {
    width: 100%;
    border: none;
    padding: 5px 5px 5px 15px;
    border-bottom: 1.5px solid $gray-600;
    @include grays(border-color, g-600);
    background-color: $gray-50;
    font-size: 1rem;
  }
  input:hover,
  input:focus {
    border-bottom: 1.5px solid $blue-800;
  }
  label {
    padding: 5px 5px 5px 15px;
    display: block;
    font-size: 13px;
    color: $gray-600;
  }
}
.limit-error {
  text-align: right;
  background-color: $white;
  color: $gray-600;
  padding: 5px;
  font-size: 13px;
}
.form__groups {
  padding-bottom: 2rem;
}
</style>
