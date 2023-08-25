<template>
  <div>
    <v-navigation-drawer
      style="z-index: 100"
      overlay-color="var(--scrim)"
      :overlay-opacity="1"
      v-model="showDrawer"
      :right="true"
      :width="width"
      temporary
      :permanent="permanent"
      fixed
      class="panel__container"
    >
      <PanelClose
        title="User Profile"
        :elevation="elevation"
        @closeDrawer="closeDrawer"
      />

      <div class="main_content_area">
        <form @submit.prevent="editUser" class="panel__content relative">
          <!-- main content  -->
          <div ref="main__content" @scroll="handleScroll" class="main__content">
            <!--========================== header  ==========================-->
            <header class="main__content__header">
              <h2 class="">Edit User</h2>
            </header>
            <!--========================== user avatar  ==========================-->
            <div class="img_context">
              <div class="img_container">
                <img :src="userToEdit.avatar" alt="" />
              </div>
              <div>
                <p class="capital">Adam Kosher</p>
                <p class="link">
                  <a href="mailto:adamkosher@gmail.com">adamkosher@gmail.com</a>
                </p>
              </div>
            </div>
            <!--========================== content  ==========================-->
            <section class="input__area">
              <div class="row">
                <!-- fname  -->
                <div class="col-12 pb-1">
                  <label for="edit_user_fName" class="input_label"
                    >First Name</label
                  >
                  <input
                    type="text"
                    :disabled="permanent"
                    required
                    class="form-control input_field"
                    id="edit_user_fName"
                    placeholder="First name"
                    v-model="userToEdit.first_name"
                  />
                </div>
                <!-- lname  -->
                <div class="col-12 pb-1">
                  <label for="edit_user_lName" class="input_label"
                    >Last Name</label
                  >
                  <input
                    type="text"
                    :disabled="permanent"
                    required
                    class="form-control input_field"
                    id="edit_user_lName"
                    placeholder="Last name"
                    v-model="userToEdit.last_name"
                  />
                </div>
                <!-- number  -->
                <div class="col-12 pb-1">
                  <label for="edit_user_phone_number" class="input_label"
                    >Phone Number</label
                  >
                  <input
                    type="text"
                    class="form-control input_field"
                    id="edit_user_phone_number"
                    placeholder="234"
                    v-model="userToEdit.phone_number"
                  />
                </div>
                <!-- Profession -->
                <div class="col-12">
                  <label class="input_label" for="edit_user_profession"
                    >profession</label
                  >
                  <select
                    class="form-control select_field"
                    id="edit_user_profession"
                    v-model="userToEdit.job"
                  >
                    <option value="lawyer">lawyer</option>
                    <option value="lawyer">lawyer</option>
                    <option value="lawyer">lawyer</option>
                  </select>
                </div>
                <!-- country -->
                <div class="col-12">
                  <label class="input_label" for="edit_user_country"
                    >country</label
                  >
                  <select
                    class="form-control select_field"
                    id="edit_user_country"
                    v-model="userToEdit.country"
                  >
                    <option value="Nigeria">Nigeria</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Nigeria">Nigeria</option>
                  </select>
                </div>
                <!-- Province  -->
                <div class="col-12 pb-1">
                  <label for="edit_user_province" class="input_label"
                    >Province</label
                  >
                  <input
                    type="text"
                    class="form-control input_field"
                    id="edit_user_province"
                    placeholder="234"
                    v-model="userToEdit.province"
                  />
                </div>
                <!-- city  -->
                <div class="col-12 pb-1">
                  <label for="edit_user_city" class="input_label">city</label>
                  <input
                    type="text"
                    class="form-control input_field"
                    id="edit_user_city"
                    placeholder="234"
                    v-model="userToEdit.city"
                  />
                </div>
                <!-- Postal Code  -->
                <div class="col-12 pb-1">
                  <label for="edit_user_code" class="input_label"
                    >Postal Code</label
                  >
                  <input
                    type="text"
                    class="form-control input_field"
                    id="edit_user_code"
                    placeholder="234"
                    v-model="userToEdit.code"
                  />
                </div>
                <!-- address  -->
                <div class="col-12 pb-1">
                  <label for="edit_user_address" class="input_label"
                    >address</label
                  >
                  <input
                    type="text"
                    class="form-control input_field"
                    id="edit_user_address"
                    placeholder="address"
                    v-model="userToEdit.address"
                  />
                </div>
              </div>
            </section>
          </div>
          <!-- send button  -->
          <div class="bottom__area">
            <Button
              type="submit"
              :elevation="2"
              :disabled="loading || disableBtn().disable"
              :isSpinner="loading"
              height="5rem"
              width="100%"
              color="var(--primary-color)"
              text="Save"
            />
          </div>
        </form>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
import showStatus from "~/mixins/showStatus";
export default {
  mixins: [showStatus],
  data() {
    return {
      showDrawer: false,
      allow_close_all: false,
      passwordType: "password",
      elevation: 0,
      width: 496,
      userToEdit: {},
      backUpUser: "",
      admin_id: "",
      errors: {},
    };
  },
  mounted() {
    var nx = window.innerWidth;
    if (nx <= 540) {
      this.width = "100vw";
    }
    window.addEventListener("resize", function (event) {
      var w = window.innerWidth;
      nx = w;
    });
    $(window).resize(() => {
      if (nx <= 540) {
        this.width = "100vw";
      } else {
        this.width = 496;
      }
    });
  },
  methods: {
    closeDrawer() {
      if (this.permanent) return;
      this.showDrawer = false;
    },
    showPanel(value) {
      if (this.$refs.main__content) this.$refs.main__content.scrollTop = 0;
      this.showDrawer = true;
      this.allow_close_all = false;
      this.errors = {};
      if (value) {
        this.userToEdit = {
          first_name: "Adam",
          last_name: "Kosher",
          phone_number: "+23449509",
          avatar: "/images/temp/user.jpg",
          province: "All",
          city: "All",
          code: 22112,
          country: "Nigeria",
          job: "lawyer",
          address: "No. 9 Star Lake Close, Maitama, Abuja",
        };
        this.backUpUser = structuredClone(this.userToEdit);
      }
    },
    handleScroll() {
      const main__content = this.$refs.main__content;
      const heightScrolled = main__content.scrollTop;
      // const initialHeight = main__content.scrollHeight;
      if (heightScrolled > 0) {
        this.elevation = 1;
      } else {
        this.elevation = 0;
      }
    },
    disableBtn() {
      var disable = true;
      // seperated for a reason
      Object.entries(this.userToEdit).forEach(([key, value]) => {
        if (this.backUpUser[key] != value) {
          disable = false;
        }
      });
      Object.entries(this.userToEdit).forEach(([key, value]) => {
        if (this.backUpUser[key] != value && value == "") {
          disable = true;
        }
      });
      return {
        disable: disable,
      };
    },
    async editUser() {
      if (this.disableBtn().disable) return;
      this.$emit("success");
      this.permanent = true;
      return;
      this.errors = {};
      try {
        // set headers
        const config = {
          headers: {
            "content-type": "multipart/form-data",
          },
        };
        // set check
        var form = false;
        var reloadRole = false;
        // set form Data
        const data = new FormData();
        Object.entries(this.userToEdit).forEach(([key, value]) => {
          // verify change in data fields
          if (value != "") {
            if (value != this.backUpUser[key]) {
              data.append(key, value);
              if (key === "role_id") reloadRole = true;
              form = true;
            }
          }
        });

        if (
          this.passwordReset.new_password &&
          !this.$setPermission("admin.edit_password")
        ) {
          this.errors = {
            new_password: [
              "You dont have permission to edit an admin passwords",
            ],
          };
          return;
        }

        if (form && this.passwordReset.new_password) {
          data.append("_method", "patch");
          data.append("admin_id", this.userId);
          this.permanent = true;
          await this.$axios.post("admin/edit", data, config);
          await this.$axios.post("admin/edit_password", this.passwordReset);

          this.$emit(
            "adminEdited",
            "Admin details & password updated successfully"
          );
          this.showDrawer = false;
          this.permanent = false;
        } else if (form) {
          this.permanent = true;
          data.append("_method", "PATCH");
          data.append("admin_id", this.admin_id);
          await this.$axios.post("admin/edit", data, config).then((res) => {
            this.permanent = false;
            this.$emit("adminEdited", res.data.response_message);
            this.showDrawer = false;
          });
        } else if (this.passwordReset.new_password) {
          this.permanent = true;
          await this.$axios
            .post("admin/edit_password", this.passwordReset)
            .then((res) => {
              this.$emit("adminEdited", res.data.response_message);
              this.showDrawer = false;
              this.permanent = false;
            });
        }
        if (reloadRole) this.$store.dispatch("roleAll");
      } catch (err) {
        if (err.response?.data?.errors) {
          this.errors = err.response.data.errors;
          this.showError(err.response?.data?.message);
        } else {
          this.showError(err.response?.data?.error?.message);
        }
      }
    },
    closePanel(val) {
      this.permanent = false;
      if (!val) {
        this.allow_close_all = true;
        this.closeDrawer();
      }
    },
  },
  watch: {
    showDrawer() {
      if (
        !this.showDrawer &&
        !this.permanent &&
        !this.allow_close_all &&
        !this.disableBtn().disable
      ) {
        this.$nextTick(() => {
          this.$emit("showWarning");
          this.showDrawer = true;
          this.permanent = true;
        });
      }
    },
  },
};
</script>
