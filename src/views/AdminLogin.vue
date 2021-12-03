<template>
  <LoginForm>
    <template v-slot:header> 後台登入 </template>
    <template v-slot:login>
      <router-link class="link--login" :to="{ name: 'admin-login' }"
        >前台登入</router-link
      >
    </template>
    <template v-slot:button
      ><PrimaryButtonLarge>登入 </PrimaryButtonLarge>
    </template>
  </LoginForm>
</template>

<script>
import LoginForm from "@/components/LoginForm";
import PrimaryButtonLarge from "@/components/Buttons/PrimaryButtonLarge.vue";

export default {
  name: "AdminLogin",
  components: {
    LoginForm,
    PrimaryButtonLarge,
  },
};
</script>
