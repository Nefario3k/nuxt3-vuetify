<template>
  <v-app-bar
    color="#fff"
    elevate-on-scroll
    :elevation="1"
    fixed
    :height="70"
    app
    style="z-index: 10"
    class="p-0 topBarWrapper"
  >
    <div class="topBar">
      <!-- breadcrumbs -->
      <div class="left_side d-flex align-center capital">
        <span class="user-greeting"
          >{{
            $route.fullPath.split("/")[1]
              ? $route.fullPath.split("/")[1].split("-").join(" ")
              : "dashboard"
          }}
        </span>
      </div>
      <!-- notifications and user  -->
      <div class="right_side">
        <!-- user notifications  -->
        <button
          class="relative d-flex align-center justify-center noti_container"
        >
          <SvgBell />
          <div class="absolute"></div>
        </button>

        <!-- user menu  -->
        <v-menu :nudge-bottom="6" offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              :ripple="false"
              color="transparent"
              height="100%"
              :elevation="0"
              class="Btn userDropDown"
              v-bind="attrs"
              v-on="on"
            >
              <div class="img_container">
                <img src="/images/temp/user.jpg" alt="Logged in Admin" />
              </div>
              <span>David Azerbie</span>
              <div class="arrowed">
                <SvgAngleDown />
              </div>
            </v-btn>
          </template>
          <v-list class="dropdown__list userDropDown">
            <v-list-item to="/profile" class="dropdown__list-item">
              <v-list-item-content>
                <v-list-item-title class="dropdown__list-title"
                  >My Profile</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-item class="dropdown__list-item">
              <v-list-item-content>
                <v-list-item-title class="dropdown__list-title"
                  >Log Out</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  methods: {},
};
</script>
 