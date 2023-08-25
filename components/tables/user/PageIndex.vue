<template>
  <div>
    <v-data-table
      v-if="!tableLoader"
      :headers="headers"
      v-model="selected"
      :mobile-breakpoint="766"
      :disable-filtering="true"
      :disable-sort="true"
      :items="tableData"
      item-key="id"
      hide-default-footer
      :items-per-page="pagination.itemsPerPage"
      :page="pagination.page"
      :loading="tableLoader"
      loading-text="Loading user data"
      no-data-text="No user data available"
      show-select
      :single-select="false"
      checkbox-color="$primary-dark-color"
      :footer-props="{
        pagination: pagination,
        itemsPerPageText: 'Rows Per Page:',
      }"
      class="generic__table selectTable"
    >
      <!-- user  -->
      <template v-slot:item.user="{ item }">
        <div class="user_content capital">
          <div class="user_content_details">
            <div v-if="item.avatar" class="images__container bordered">
              <img :src="item.avatar" alt="avatar" />
            </div>
            <nuxt-link to="/users/121212">
              <span>{{ $getFullName(item.first_name, item.last_name) }}</span>
            </nuxt-link>
          </div>
        </div>
      </template>
      <!-- email  -->
      <template v-slot:item.email="{ item }">
        <div class="user_content">
          <div class="user_content_details">
            <p class="email">
              <a :href="`mailto:${item.email}`">{{ item.email }}</a>
            </p>
          </div>
        </div>
      </template>
      <!-- Country  -->
      <template v-slot:item.country="{ item }">
        <div class="user_content">
          <div class="user_content_details">
            <div v-if="item.country.flag" class="images__container">
              <img :src="item.country.flag" alt="avatar" />
            </div>
            <p>{{ item.country.name }}</p>
          </div>
        </div>
      </template>
      <!-- job  -->
      <template v-slot:item.job="{ item }">
        <div class="user_content">
          <div class="user_content_details">
            <p>{{ item.job }}</p>
          </div>
        </div>
      </template>
      <!-- type  -->
      <template v-slot:item.type="{ item }">
        <div class="user_content">
          <div class="user_content_details">
            <p>{{ item.type }}</p>
          </div>
        </div>
      </template>
      <!-- card_no  -->
      <template v-slot:item.card_no="{ item }">
        <div class="user_content">
          <div class="user_content_details">
            <p>{{ $formatNumber(item.card_no) }}</p>
          </div>
        </div>
      </template>
      <!-- created_at  -->
      <template v-slot:item.created_at="{ item }">
        <div class="user_content">
          <div class="user_content_details">
            <p>
              {{ $formatDateString(new Date()) }}
            </p>
          </div>
        </div>
      </template>
      <!-- action  -->
      <template v-slot:item.action="{ item }">
        <div class="user_content_details" style="justify-content: center">
          <v-menu offset-y min-width="15.6rem">
            <template v-slot:activator="{ on, attrs }">
              <div v-bind="attrs" v-on="on" class="action__activator">
                <SvgDotsVertical />
              </div>
            </template>
            <v-list class="dropdown__list">
              <!-- user  -->
              <v-list-item
                @click="showPanel('view', item)"
                class="dropdown__list-item"
              >
                <v-list-item-content>
                  <v-list-item-title class="dropdown__list-title"
                    >View User</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
              <!-- edit  -->
              <v-list-item
                @click="showPanel('edit', item)"
                class="dropdown__list-item"
              >
                <v-list-item-content>
                  <v-list-item-title class="dropdown__list-title"
                    >Edit User</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
              <!-- Upgrade User -->
              <v-list-item
                @click="showPanel('enableAdmin', item)"
                class="dropdown__list-item"
              >
                <v-list-item-content>
                  <v-list-item-title class="dropdown__list-title"
                    >Upgrade User</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
              <!-- Suspend User -->
              <v-list-item
                @click="showPanel('disableAdmin', item)"
                class="dropdown__list-item"
              >
                <v-list-item-content>
                  <v-list-item-title class="dropdown__list-title"
                    >Suspend User</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
              <!-- Disable User -->
              <v-list-item
                @click="showPanel('disableAdmin', item)"
                class="dropdown__list-item"
              >
                <v-list-item-content>
                  <v-list-item-title class="dropdown__list-title"
                    >Disable User</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </template>
      <!-- footer  -->
      <template v-slot:footer="{ props: { pagination, itemsPerPageText } }">
        <TablesFooter
          v-show="!tableLoader && tableData.length"
          :pagination="pagination"
          :itemsPerPageText="itemsPerPageText"
          :tableData="tableData"
          @getPerPage="
            (perPage) => {
              $emit('getPerPage', perPage);
            }
          "
          @loadMore="
            (val) => {
              $emit('loadMore', val);
            }
          "
          ref="tableFooter"
        />
      </template>
    </v-data-table>
    <LoaderTable v-else />
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: [],
      tableLoader: false,
      headers: [
        {
          text: "User",
          align: "start",
          sortable: true,
          value: "user",
        },
        { text: "Email Address", value: "email" },
        { text: "Country", value: "country" },
        { text: "Profession", value: "job" },
        { text: "Card type", value: "type" },
        { text: "No. of Card", value: "card_no" },
        { text: "date", value: "created_at" },
        { text: "action", value: "action" },
      ],
      pagination: {
        page: 1,
        itemsPerPage: 10,
        pageStart: 1,
        pageStop: 200,
        pageCount: 1,
        itemsLength: 7,
        last_page: 200,
        itemsPerPageOptions: [5, 10, 15, 20, 25],
      },
    };
  },
  computed: {
    tableData() {
      var data = [];
      var obj = {
        id: 1,
        first_name: "Adam",
        last_name: "Kosher",
        avatar: "/images/temp/user.jpg",
        email: "admakosher@gmail.com",
        country: {
          name: "Nigeria",
          flag: "/images/temp/flags/1.png",
        },
        job: "Lawyer",
        type: "Bizcard",
        card_no: 6,
      };
      for (let index = 0; index < 16; index++) {
        let dune = structuredClone(obj);
        dune.id = dune.id + index;
        data.push(dune);
      }

      return data;
    },
  },
  methods: {
    showPanel(type, dataToShow) {
      return;
      switch (type) {
        case "view":
          this.$refs.adminView.showPanel(dataToShow);
          break;
        case "edit":
          this.$refs.adminEdit.showPanel(dataToShow);
          break;
        case "disableAdmin":
          this.$refs.disableAdmin.showPanel(dataToShow);
          break;
        case "enableAdmin":
          this.$refs.enableAdmin.showPanel(dataToShow);
          break;

        default:
          this.$refs.adminEdit.showPanel(type);
          break;
      }
    },
  },
};
</script>

