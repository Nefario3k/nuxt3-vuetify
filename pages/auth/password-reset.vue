<template>
  <div>
    <v-row class="auth_row_head">
      <v-col cols="12">
        <div class="auth_content">
          <v-row
            @submit.prevent="login"
            class="transIn auth_content__login text-center"
          >
            <div class="v-col-12">
              <nuxt-link class="authLogo" to="login">
                <SvgLogoRounded />
              </nuxt-link>
            </div>
            <v-window v-model="tabIndicator" class="m-0 p-0">
              <!-- verify email  -->
              <v-window-item class="p-0 px-1 m-0">
                <form class="v-row" @submit.prevent="tabIndicator = 1">
                  <!-- header  -->
                  <header class="v-col-12">
                    <h2 class="capital">Forgot Password</h2>
                    <p>No worries, we will send you reset instructions</p>
                  </header>
                  <!-- email  -->
                  <div class="v-col-12">
                    <label class="input_label" for="user_reset_email"
                      >Email</label
                    >
                    <div class="relative svgLeft">
                      <label class="absolute left" for="user_reset_email"
                        ><Component :is="`SvgSingleUser`"
                      /></label>
                      <input
                        :class="`form-control input_field ${
                          loginDetails.email ? 'hasValue' : ''
                        }`"
                        autocomplete="off"
                        type="email"
                        id="user_reset_email"
                        v-model="loginDetails.email"
                        :disabled="loading"
                        placeholder="name@example.com"
                      />
                    </div>
                  </div>
                  <!-- button  -->
                  <div class="v-col-12 d-flex align-center justify-center">
                    <Button
                      type="submit"
                      :elevation="2"
                      :disabled="disableBtn"
                      :isSpinner="loading"
                      height="5rem"
                      width="100%"
                      class="primary"
                      text="VERIFY EMAIL"
                    />
                  </div>
                </form>
              </v-window-item>
              <!-- enter token  -->
              <v-window-item class="p-0 px-1 m-0">
                <form class="v-row" @submit.prevent="tabIndicator = 2">
                  <!-- header  -->
                  <header class="v-col-12">
                    <h2 class="capital">Password Reset</h2>
                    <p>
                      We have sent a verification code to your email
                      <nuxt-link to="mailto:Ilovetoscam@gmail.com"
                        >Ilovetoscam@gmail.com</nuxt-link
                      >. Click the link or enter the code from the email in the
                      field below.
                    </p>
                  </header>
                  <!-- otp  -->
                  <div class="v-col-12 my-5">
                    <div class="control__form otp__form">
                      <v-otp-input
                        :disabled="false"
                        type="number"
                        @finish="tabIndicator = 2"
                        v-model="loginDetails.tokenNUmber"
                        :length="otpLimit"
                        class="otp_container"
                      ></v-otp-input>
                    </div>
                  </div>
                  <!-- button  -->
                  <div class="v-col-12 d-flex align-center justify-center">
                    <Button
                      type="submit"
                      :elevation="2"
                      :disabled="false"
                      :isSpinner="loading"
                      height="5rem"
                      width="100%"
                      class="primary"
                      text="Continue"
                    />
                  </div>
                  <div class="mt-4 v-col-12">
                    <p class="terms">
                      Didn’t receive the code?
                      <nuxt-link to="#"> Click to resend </nuxt-link>
                    </p>
                  </div>
                </form>
              </v-window-item>
              <!-- new password  -->
              <v-window-item class="p-0 px-1 m-0">
                <form class="v-row" @submit.prevent="tabIndicator = 0">
                  <!-- header  -->
                  <header class="v-col-12">
                    <h2 class="capital">Set new password</h2>
                    <p>
                      Password must at least contain
                      <span class="danger">8 characters</span> with
                      <span class="danger">a number</span>,
                      <span class="danger"> an uppercase </span> and
                      <span class="danger">a special character</span>.
                    </p>
                  </header>
                  <!-- password  -->
                  <div class="v-col-12">
                    <label class="input_label" for="user_reset_password"
                      >Password</label
                    >
                    <div class="relative password_field svgLeft">
                      <label class="absolute left" for="user_reset_password"
                        ><Component :is="`SvgLock`"
                      /></label>
                      <input
                        @input="checkPasswordStrength"
                        :class="`form-control input_field ${
                          loginDetails.password ? 'hasValue' : ''
                        }`"
                        :type="passwordType.main"
                        id="user_reset_password"
                        autocomplete="off"
                        placeholder="Enter Password"
                        :disabled="loading"
                        v-model="loginDetails.password"
                      />
                      <div
                        title="Toggle password view"
                        @click="togglePassword('main')"
                        class="absolute password_toggle"
                      >
                        <SvgPasswordOpen
                          v-if="passwordType.main === 'password'"
                        />
                        <SvgPasswordClose v-else />
                      </div>
                    </div>
                    <div class="passwordStrength">
                      <div class="passwordStrength__progress">
                        <v-progress-linear
                          v-for="(item, index) in passwordStrength"
                          :key="index"
                          :rounded="true"
                          :height="6"
                          :color="passwordColor"
                          background-color="var(--primary-lte-color)"
                          v-model="item.value"
                        ></v-progress-linear>
                      </div>
                    </div>
                  </div>
                  <!-- confirm password  -->
                  <div class="v-col-12">
                    <label class="input_label" for="confirm_password"
                      >Confirm Password</label
                    >
                    <div class="relative password_field svgLeft">
                      <label class="absolute left" for="confirm_password"
                        ><Component :is="`SvgLock`"
                      /></label>
                      <input
                        :class="`form-control input_field ${
                          loginDetails.cPassword ? 'hasValue' : ''
                        }`"
                        :type="passwordType.confirm"
                        id="confirm_password"
                        autocomplete="off"
                        placeholder="Confirm Password"
                        :disabled="loading"
                        v-model="loginDetails.cPassword"
                      />
                      <div
                        title="Toggle password view"
                        @click="togglePassword('confirm')"
                        class="absolute password_toggle"
                      >
                        <SvgPasswordOpen
                          v-if="passwordType.confirm === 'password'"
                        />
                        <SvgPasswordClose v-else />
                      </div>
                    </div>
                  </div>
                  <!-- button  -->
                  <div class="v-col-12 d-flex align-center justify-center">
                    <Button
                      to="login"
                      :elevation="2"
                      :disabled="false"
                      :isSpinner="loading"
                      height="5rem"
                      width="100%"
                      class="primary"
                      text="RESET PASSWORD"
                    />
                  </div>
                </form>
              </v-window-item>
            </v-window>
            <div class="mt-4 v-col-12">
              <p class="label">
                <nuxt-link class="angledLink left" to="login">
                  <Component :is="`SvgArrowLeft`" />
                  <span>Back to Login</span>
                </nuxt-link>
              </p>
            </div>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
definePageMeta({
  layout: "auth",
});
// import showStatus from "~/mixins/showStatus";
export default {
  //   mixins: [showStatus],
  layout: "auth",
  auth: "guest",
  data() {
    return {
      loginDetails: {
        email: "",
        password: "",
        cPassword: "",
        tokenNUmber: "",
      },
      tabIndicator: 1,
      otpLimit: 6,
      loading: false,
      passwordType: {
        main: "password",
        confirm: "password",
      },
      passwordStrength: [
        {
          title: "Very poor",
          value: 0,
          color: "var(--danger-color)",
        },
        {
          title: "Poor",
          value: 0,
          color: "var(--pending-color)",
        },
        {
          title: "Medium",
          value: 0,
          color: "var(--primary-color)",
        },
        {
          title: "Strong",
          value: 0,
          color: "var(--green)",
        },
      ],
      passwordIndicator: "Poor",
      passwordColor: "",
      verifiedPassword: false,
    };
  },
  computed: {
    disableBtn() {
      if (this.loading || !this.loginDetails.email) {
        return true;
      }

      return false;
    },
  },
  methods: {
    togglePassword(type) {
      if (this.passwordType[type] == "password") {
        this.passwordType[type] = "text";
      } else {
        this.passwordType[type] = "password";
      }
    },
    checkPasswordStrength() {
      const regexWeak =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/; // Match only numbers with at most 6 characters
      const regexMedium =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,11}$/; // Match lowercase, uppercase, and numbers with at least 8 characters
      const regexStrong =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{12,}$/; // Match lowercase, uppercase, numbers, and special characters with at least 8 characters
      if (this.loginDetails.password.match(regexStrong)) {
        this.passwordStrength[0].value = 100;
        this.passwordStrength[1].value = 100;
        this.passwordStrength[2].value = 100;
        this.passwordStrength[3].value = 100;
        this.passwordIndicator = this.passwordStrength[3].title;
        this.passwordColor = this.passwordStrength[3].color;
        this.verifiedPassword = true;
      } else if (this.loginDetails.password.match(regexMedium)) {
        this.passwordStrength[0].value = 100;
        this.passwordStrength[1].value = 100;
        this.passwordStrength[2].value = 100;
        this.passwordStrength[3].value = 0;
        this.passwordIndicator = this.passwordStrength[2].title;
        this.passwordColor = this.passwordStrength[2].color;
        this.verifiedPassword = true;
      } else if (
        this.loginDetails.password.match(regexWeak) ||
        (this.loginDetails.password &&
          this.loginDetails.password.length < 8 &&
          this.loginDetails.password.length > 4)
      ) {
        this.passwordStrength[0].value = 100;
        this.passwordStrength[1].value = 100;
        this.passwordStrength[2].value = 0;
        this.passwordStrength[3].value = 0;
        this.passwordIndicator = this.passwordStrength[1].title;
        this.passwordColor = this.passwordStrength[1].color;
        this.verifiedPassword = false;
      } else if (
        this.loginDetails.password &&
        this.loginDetails.password.length <= 4
      ) {
        this.passwordStrength[0].value = 100;
        this.passwordStrength[1].value = 0;
        this.passwordStrength[2].value = 0;
        this.passwordStrength[3].value = 0;
        this.passwordIndicator = this.passwordStrength[0].title;
        this.passwordColor = this.passwordStrength[0].color;
        this.verifiedPassword = false;
      } else {
        this.passwordStrength[0].value = 0;
        this.passwordStrength[1].value = 0;
        this.passwordStrength[2].value = 0;
        this.passwordStrength[3].value = 0;
        this.passwordIndicator = this.passwordStrength[0].title;
        this.passwordColor = "";
        this.verifiedPassword = false;
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