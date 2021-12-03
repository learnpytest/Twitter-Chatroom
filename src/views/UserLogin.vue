<template>
  <div>
    <LoginForm>
      <template v-slot:header> 登入Alphitter </template>
      <template v-slot:register>
        <router-link class="link--login" :to="{ name: 'register' }"
          >註冊 Alphitter <span class="dot">&bull;</span></router-link
        ></template
      >
      <template v-slot:login>
        <router-link class="link--login" :to="{ name: 'admin-login' }"
          >後台登入</router-link
        >
      </template>
      <template v-slot:button
        ><PrimaryButtonLarge>登入 </PrimaryButtonLarge>
      </template>
    </LoginForm>
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm";
import PrimaryButtonLarge from "@/components/Buttons/PrimaryButtonLarge.vue";

export default {
  name: "UserLogin",
  components: {
    LoginForm,
    PrimaryButtonLarge,
  },
};
</script>
<style lang="scss" scoped>
.dot {
  font-weight: var(--fw-normal);
  width: 0.5rem;
  display: inline-block;
  text-align: center;
  color: var(--b-1000);
}
</style>
