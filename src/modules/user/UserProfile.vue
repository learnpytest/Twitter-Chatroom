<template>
  <div class="profile-wrapper">
    <img src="https://picsum.photos/200/300" alt="" class="background-pic" />
    <div class="profile-pic">
      <img src="./../../assets/images/Photo_user1.png" alt="" />
      <button>編輯個人資料</button>
    </div>
    <div class="profile-details">
      <p class="profile-name">John Doe</p>
      <p class="profile-id">@heyjohn</p>
      <p class="description">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint.
      </p>
      <p class="profile-follow">34個<span>跟隨中</span></p>
      <p class="profile-follow">59位<span>跟隨者</span></p>
    </div>
  </div>
</template>
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
    top: -70px;
    left: 10px;
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
