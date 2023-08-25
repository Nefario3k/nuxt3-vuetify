<template>
  <v-navigation-drawer
    v-model="drawer"
    :width="width"
    :rail="mini"
    rail-width="92"
    mobile-breakpoint="1270"
    :clipped="clipped"
    permanent
    color="#00317F"
    class="navBar"
  >
    <div
      style="height: 100%; grid-gap: 7px"
      class="d-flex flex-column justify-space-between"
    >
      <v-list class="list_container topNav nav__list">
        <!-- nav control  -->
        <v-list-item
          :class="{ mini: mini }"
          class="dropdown__list-item noHover beezlinq"
        >
          <template v-if="!mini" v-slot:prepend>
            <div
              :class="{ 'mr-2': !mini }"
              class="d-flex align-center justify-center nav_svg"
            >
              <Component :is="`SvgLogoMain`" />
            </div>
          </template>
          <template v-else v-slot:prepend>
            <Button
              @action="check"
              :elevation="0"
              width="100%"
              style="padding-inline: 7px"
              class="p-0 m-0 transleft"
              minWidth="max-content"
              height="max-content"
              color="transparent"
              :svg="true"
              svgLeft="SvgHamburger"
            />
          </template>
          <template v-if="!mini">
            <v-list-item-title class="dropdown__list-title transleft">
              Beezlinq</v-list-item-title
            >
          </template>
          <template v-if="!mini" v-slot:append>
            <div @click="check" class="arrowed transleft">
              <SvgAngleLeft />
            </div>
          </template>
        </v-list-item>
        <!-- nav links  -->
        <div v-for="(nav, index) in items" :key="index + 223232">
          <v-tooltip
            :text="nav.title"
            location="right"
            :disabled="!mini"
            offset="20"
            transition="fade-transition"
            content-class="nav__tooltip"
          >
            <template v-slot:activator="{ props }">
              <!-- :to="nav.link" -->

              <v-list-item
                v-bind="props"
                :class="{ mini: mini }"
                class="dropdown__list-item"
              >
                <template v-slot:prepend>
                  <div
                    :class="{ 'mr-2': !mini }"
                    class="d-flex align-center justify-center nav_svg"
                  >
                    <Component :is="nav.svg" />
                  </div>
                </template>

                <v-list-item-title v-show="!mini" class="dropdown__list-title">
                  {{ nav.title }}</v-list-item-title
                >
              </v-list-item>
            </template>
            <!-- <span>
              {{ nav.title }}
            </span> -->
          </v-tooltip>
        </div>
      </v-list>

      <!-- logout area  -->
      <div class="bottomNavContainer">
        <v-list class="list_container nav__list bottomNav">
          <v-tooltip
            location="right"
            :disabled="!mini"
            offset="20"
            transition="fade-transition"
            content-class="nav__tooltip"
          >
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                to="/auth/login"
                :class="{ mini: mini }"
                class="dropdown__list-item"
              >
                <template v-slot:prepend>
                  <div
                    :class="{ 'mr-2': !mini }"
                    class="d-flex align-center justify-center nav_svg"
                  >
                    <Component :is="`SvgSideBarLogout`" />
                  </div>
                </template>
                <v-list-item-title v-show="!mini" class="dropdown__list-title">
                  Logout</v-list-item-title
                >
              </v-list-item>
            </template>
            <span> Logout </span>
          </v-tooltip>
        </v-list>
      </div>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      width: 280,
      drawer: true,
      clipped: false,
      fixed: false,
      // must be the same value
      showme: false,
      mini: false,
      miniVariant: true,
      youCannotCreateMoreCardDialog: false,

      isOpen: false,
      selectedOption: "",
      options: ["Option 1", "Option 2", "Option 3"],
    };
  },
  computed: {
    items() {
      return [
        {
          title: "Dashboard",
          link: "/",
          svg: "SvgSideBarDashboard",
        },
        {
          title: "Users",
          link: "/users",
          svg: "SvgSideBarUsers",
        },
        {
          title: "Templates",
          link: "/templates",
          svg: "SvgSideBarTemplates",
        },
        {
          title: "Cards",
          link: "/cards",
          svg: "SvgSideBarCards",
        },
        {
          title: "Payments",
          link: "/payments",
          svg: "SvgSideBarPayments",
        },
        {
          title: "Plan",
          link: "/plan",
          svg: "SvgSideBarPlan",
        },
        {
          title: "Admin Settings",
          link: "/manage",
          svg: "SvgSideBarManage",
        },
        {
          title: "Analytics",
          link: "/analytics",
          svg: "SvgSideBarAnalytics",
        },
        {
          title: "Activity log",
          link: "/activity",
          svg: "SvgSideBarActivity",
        },
        {
          title: "Messaging",
          link: "/messaging",
          svg: "SvgSideBarMessaging",
        },
        {
          title: "Profile Settings",
          link: "/profile",
          svg: "SvgSideBarSettings",
        },
      ];
    },
  },
  mounted() {
    var adminPanel = window.localStorage.getItem("adminPanel");
    var nx = window.innerWidth;
    if (adminPanel != null && nx >= 1269) {
      this.mini = true;
      this.showme = true;
    }
  },
  methods: {
    check() {
      this.mini = !this.mini;
      this.showme = !this.showme;
      if (this.mini) {
        window.localStorage.setItem("adminPanel", "adminPanel");
      } else {
        window.localStorage.removeItem("adminPanel");
      }
    },
    showNav() {
      this.drawer = true;
      this.showme = false;
      this.mini = false;
    },
  },
};
</script>
