<template>
  <div>
    <v-row class="auth_row_head">
      <v-col cols="12">
        <div class="auth_content">
          <form
            @submit.prevent="login"
            class="transIn auth_content__login v-row text-center"
          >
            <div class="v-col-12">
              <nuxt-link class="authLogo" to="login">
                <SvgLogoRounded />
              </nuxt-link>
            </div>
            <!-- header  -->
            <header class="v-col-12">
              <h2 class="capital">Admin Login</h2>
              <p>Login to your account</p>
            </header>
            <!-- email  -->
            <div class="v-col-12">
              <label class="input_label" for="user_login_email">Email</label>
              <div class="relative svgLeft">
                <label class="absolute left" for="user_login_email"
                  ><Component :is="`SvgSingleUser`"
                /></label>
                <input
                  :class="`form-control input_field ${
                    loginDetails.email ? 'hasValue' : ''
                  }`"
                  autocomplete="off"
                  type="email"
                  id="user_login_email"
                  v-model="loginDetails.email"
                  :disabled="loading"
                  placeholder="name@example.com"
                />
              </div>
            </div>
            <!-- password  -->
            <div class="mb-5 v-col-12">
              <label class="input_label" for="user_login_password"
                >Password</label
              >
              <div class="relative password_field svgLeft">
                <label class="absolute left" for="user_login_password"
                  ><Component :is="`SvgLock`"
                /></label>
                <input
                  :class="`form-control input_field ${
                    loginDetails.password ? 'hasValue' : ''
                  }`"
                  :type="passwordType"
                  id="user_login_password"
                  autocomplete="off"
                  placeholder="Enter Password"
                  :disabled="loading"
                  v-model="loginDetails.password"
                />
                <div
                  title="Toggle password view"
                  @click="togglePassword"
                  class="absolute password_toggle"
                >
                  <SvgPasswordOpen v-if="passwordType === 'password'" />
                  <SvgPasswordClose v-else />
                </div>
              </div>
            </div>
            <!-- login button  -->
            <div class="v-col-12 d-flex align-center justify-center">
              <Button
                to="/"
                :elevation="1"
                :disabled="disableBtn"
                :isSpinner="loading"
                height="5rem"
                width="100%"
                text="Login"
                class="primary"
              />
            </div>
            <div class="mt-4 v-col-12">
              <p class="label">
                <nuxt-link to="password-reset">Forgot password?</nuxt-link>
              </p>
            </div>
          </form>
        </div>
      </v-col>
    </v-row>
  </div>
</template>


<script>
definePageMeta({
  layout: "auth",
});
import showStatus from "~/mixins/showStatus";
export default {
  mixins: [showStatus],
  layout: "auth",
  auth: "guest",
  data() {
    return {
      loginDetails: {
        email: "",
        password: "",
      },
      loading: false,
      passwordType: "password",
    };
  },
  computed: {
    disableBtn() {
      if (
        this.loading ||
        !this.loginDetails.email ||
        !this.loginDetails.password
      ) {
        return true;
      }

      return false;
    },
  },
  methods: {
    togglePassword() {
      if (this.passwordType == "password") {
        this.passwordType = "text";
      } else {
        this.passwordType = "password";
      }
    },
    async login() {
      return;
      this.loading = true;
      try {
        const { data: res } = await this.$getLogin(this.loginDetails);
        this.showSuccess(res.message);
        setTimeout(() => {
          // // set user token and persistient token
          this.$auth.setUserToken(res.data.access_token, res.data.access_token);
          // // set user data
          this.$auth.setUser(res.data);
          // // push to home page
          this.$router.push({
            path: "/",
            replace: true,
          });
          this.loading = false;
        }, 3100);
      } catch (err) {
        this.loading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>