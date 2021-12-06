<template>
  <div class="user-edit-modal">
    <div class="user-edit-box">
      <div class="header-btn">
        <img src="./../../assets/images/icon_close.svg" alt="" />
        <p class="header-text">編輯個人資料</p>
        <button class="save-btn">儲存</button>
      </div>
      <div class="background-pic">
        <img src="https://picsum.photos/200/300" alt="" />
        <div class="pic-btn-control">
          <img
            src="./../../assets/images/icon_uploadPhoto.png"
            alt=""
            id="upload-btn"
          /><img
            src="./../../assets/images/icon_delete.png"
            alt=""
            id="delete-btn"
          />
        </div>
      </div>
      <div class="edit-profile-pic">
        <div class="profile-pic">
          <img src="./../../assets/images/Photo_user1.png" alt="" class="" />
        </div>
        <img
          src="./../../assets/images/icon_uploadPhoto.png"
          alt=""
          class="asd"
        />
      </div>
      <div class="form__group">
        <label for="name">名稱</label>
        <input type="name" id="name" name="name" />
        <div>
          <!-- todo error message -->
          <p>8/50</p>
        </div>
      </div>
      <div class="form__group">
        <label for="bio">自我介紹</label>
        <input type="bio" id="bio" name="bio" />
        <div>
          <!-- todo error message -->
          <p>8/50</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "./src/assets/scss/main.scss";
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
  width: 43%;
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
  z-index: 1;
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
  background-color: black;
}
.profile-pic img {
  width: 140px;
  height: 140px;
  margin-top: -120px;
  z-index: 3;
}

// .profile-pic {
//   position: relative;
//   text-align: right;
//   padding: 10px;
//   img {
//     position: absolute;
//     width: 140px;
//     height: 140px;
//     top: -70px;
//     left: 10px;
//   }
// }

.asd {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0;
}
</style>
