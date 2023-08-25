<template>
  <div class="search__area">
    <!-- input area  -->
    <form class="search_input_area relative">
      <input
        required
        class="form-control input_field"
        autocomplete="off"
        type="email"
        v-model="searchInput"
        placeholder="name@example.com"
      />
      <Button
        title="search"
        type="submit"
        :disabled="!searchInput"
        height="100%"
        minWidth="max-content"
        color="var(--primary-color)"
        contentClass="searchBtn"
        :svg="true"
        svgLeft="SvgSearch"
      />
    </form>
    <!-- actions area  -->
    <aside class="actions__area">
      <!-- all  -->
      <v-menu :nudge-bottom="5" offset-y>
        <template v-slot:activator="{ on, attrs }">
          <div v-bind="attrs" v-on="on">
            <Button
              :elevation="0"
              :outlined="true"
              textColor="$primary-dark-color"
              width="max-content"
              :svg="true"
              svgRight="SvgAngleDown"
              text="All"
              minWidth="19rem"
              height="4.8rem"
              color="var(--border)"
              contentClass="card__dropdown large"
            />
          </div>
        </template>
        <v-list class="dropdown__list userDropDown">
          <v-list-item class="dropdown__list-item">
            <v-list-item-content>
              <v-list-item-title class="dropdown__list-title"
                >Registration</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="dropdown__list-item">
            <v-list-item-content>
              <v-list-item-title class="dropdown__list-title"
                >Free Users</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="dropdown__list-item">
            <v-list-item-content>
              <v-list-item-title class="dropdown__list-title"
                >Subscribed Users</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="dropdown__list-item">
            <v-list-item-content>
              <v-list-item-title class="dropdown__list-title"
                >Suspend User</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- Filter by  -->
      <v-menu
        v-model="menuModel"
        max-height="85vh"
        nudge-left="90%"
        :close-on-content-click="closeOnContent"
        min-width="360"
        max-width="360"
      >
        <template v-slot:activator="{ on, attrs }">
          <div v-bind="attrs" v-on="on">
            <Button
              :elevation="0"
              :outlined="true"
              textColor="$primary-dark-color"
              width="max-content"
              :svg="true"
              svgLeft="SvgFilterIcon"
              svgRight="SvgAngleDown"
              text="Filter by"
              minWidth="19rem"
              height="4.8rem"
              color="var(--border)"
              contentClass="card__dropdown large"
            />
          </div>
        </template>
        <v-list class="dropdown__list">
          <!-- control -->
          <v-list-item
            style="padding-top: 12px"
            class="dropdown__list-item noHover"
          >
            <div class="filter__header">
              <span>Filter</span>
              <Button
                :elevation="0"
                style="margin-left: auto"
                class="mr-5"
                textColor="var(--primary-color)"
                width="max-content"
                text="Reset"
                color="$primary-lte-color4"
              />
              <svg
                @click="menuModel = false"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.5 7.5L7.5 22.5"
                  stroke="#063A06"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.5 7.5L22.5 22.5"
                  stroke="#063A06"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </v-list-item>
          <!-- Type -->
          <template>
            <v-list-item class="dropdown__list-item tag">
              <v-list-item-title class="tag-title">Type</v-list-item-title>
            </v-list-item>
            <!-- select  -->
            <v-list-item class="dropdown__list-item noHover mb-0">
              <div class="statusFilter">
                <v-radio-group
                  dense
                  active-class="radio_active"
                  v-model="searchFilter.type"
                >
                  <v-radio
                    color="var(--primary-color)"
                    label="Free"
                    value="Free"
                  ></v-radio>
                  <v-radio
                    color="var(--primary-color)"
                    label="Subscribed User"
                    value="Subscribed User"
                  ></v-radio>
                  <v-radio
                    color="var(--primary-color)"
                    label="Payment"
                    value="Payment"
                  ></v-radio>
                </v-radio-group>
              </div>
            </v-list-item>
          </template>
          <!-- Status -->
          <template>
            <v-list-item class="dropdown__list-item tag">
              <v-list-item-title class="tag-title">Status</v-list-item-title>
            </v-list-item>
            <!-- select  -->
            <v-list-item class="dropdown__list-item noHover mb-0">
              <div class="statusFilter">
                <v-radio-group
                  dense
                  active-class="radio_active"
                  v-model="searchFilter.status"
                >
                  <v-radio
                    color="var(--primary-color)"
                    label="All"
                    value="All"
                  ></v-radio>
                  <v-radio
                    color="var(--primary-color)"
                    label="Active Users"
                    value="Subscribed User"
                  ></v-radio>
                  <v-radio
                    color="var(--primary-color)"
                    label="Inactive Users"
                    value="Inactive Users"
                  ></v-radio>
                </v-radio-group>
              </div>
            </v-list-item>
          </template>
          <!-- Plan -->
          <template>
            <v-list-item class="dropdown__list-item tag">
              <v-list-item-title class="tag-title">Plan</v-list-item-title>
            </v-list-item>
            <!-- select  -->
            <v-list-item class="dropdown__list-item noHover mb-0">
              <div class="statusFilter">
                <v-radio-group
                  dense
                  active-class="radio_active"
                  v-model="searchFilter.plan"
                >
                  <v-radio
                    color="var(--primary-color)"
                    label="All"
                    value="All"
                  ></v-radio>
                  <v-radio
                    color="var(--primary-color)"
                    label="Credit"
                    value="Credit"
                  ></v-radio>
                  <v-radio
                    color="var(--primary-color)"
                    label="Debit"
                    value="Debit"
                  ></v-radio>
                </v-radio-group>
              </div>
            </v-list-item>
          </template>
          <!-- button -->
          <template>
            <!-- select  -->
            <v-list-item class="dropdown__list-item noHover mt-2 mb-0">
              <div class="statusFilter">
                <Button
                  :elevation="0"
                  :disabled="false"
                  height="4.4rem"
                  width="100%"
                  color="var(--primary-color)"
                  text="Apply filters"
                />
              </div>
            </v-list-item>
          </template>
        </v-list>
      </v-menu>
      <!-- export  -->
      <SearchExportBtn />
    </aside>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchInput: "",
      menuModel: false,
      closeOnContent: false,
      searchFilter: {
        type: "",
        status: "",
        plan: "",
      },
    };
  },
};
</script>
