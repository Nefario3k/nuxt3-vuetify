<template>
  <div class="search__area">
    <!-- input area  -->
    <form class="search_input_area relative user_area">
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
      <!-- Successful  -->
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
              text="Successful"
              minWidth="19rem"
              height="4.4rem"
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
