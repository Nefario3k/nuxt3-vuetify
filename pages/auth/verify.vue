<template>
  <div>
    <v-row class="auth_row_head">
      <div class="col col-12">
        <div class="auth_content">
          <form
            @submit.prevent="login"
            class="transIn auth_content__login row text-center"
          >
            <!-- logo  -->
            <div class="col-12">
              <nuxt-link class="authLogo" to="login">
                <SvgLogoRounded />
              </nuxt-link>
            </div>
            <!-- header  -->
            <header class="col-12">
              <h2 class="capital">Verify Email</h2>
              <p>
                We have sent a verification code to your email
                <nuxt-link to="mailto:Ilovetoscam@gmail.com"
                  >Ilovetoscam@gmail.com</nuxt-link
                >. Click the link or enter the code from the email in the field
                below.
              </p>
            </header>
            <!-- otp  -->
            <div class="col-12 my-5">
              <div class="control__form otp__form">
                <v-otp-input
                  :disabled="false"
                  type="number"
                  @finish="login"
                  v-model="loginDetails.tokenNUmber"
                  :length="otpLimit"
                  class="otp_container"
                ></v-otp-input>
              </div>
            </div>
            <!-- button  -->
            <div class="col-12 d-flex align-center justify-center">
              <Button
                type="submit"
                :elevation="2"
                :disabled="false"
                :isSpinner="loading"
                height="5rem"
                width="100%"
                color="var(--primary-color)"
                text="Submit"
              />
            </div>
            <!-- resend code  -->
            <div class="mt-4 col-12">
              <p class="terms">
                Didn’t receive the code?
                <nuxt-link to="#"> Resend code </nuxt-link>
              </p>
            </div>
            <!-- back to login  -->
            <div class="mt-4 col-12">
              <p class="label">
                <nuxt-link class="angledLink left" to="login">
                  <Component :is="`SvgArrowLeft`" />
                  <span>Back to Login</span>
                </nuxt-link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </v-row>
  </div>
</template>

<script>
// import showStatus from "~/mixins/showStatus";
export default {
  //   mixins: [showStatus],
  layout: "auth",
  auth: "guest",
  data() {
    return {
      loginDetails: {
        tokenNUmber: "",
      },
      tabIndicator: 0,
      otpLimit: 6,
      loading: false,
    };
  },
  methods: {
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