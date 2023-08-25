<template>
  <div>
    <v-data-table
      v-if="!tableLoader"
      :headers="headers"
      :mobile-breakpoint="766"
      :disable-filtering="true"
      :disable-sort="true"
      :items="tableData"
      hide-default-footer
      :items-per-page="pagination.itemsPerPage"
      :page="pagination.page"
      :loading="tableLoader"
      loading-text="Loading user data"
      no-data-text="No user data available"
      :footer-props="{
        pagination: pagination,
        itemsPerPageText: 'Rows Per Page:',
      }"
      class="generic__table noAction"
    >
      <!-- log  -->
      <template v-slot:item.log="{ item }">
        <div class="user_content">
          <div
            style="grid-gap: 0"
            class="user_content_details flex-column align-start"
          >
            <p class="little_league">
              <a href="#">Adam</a> added <a href="#">John Doe</a> to his
              connections
            </p>
            <p class="little_league label">2 hrs ago</p>
          </div>
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
      tableLoader: false,
      headers: [
        {
          text: "Activity Logs",
          align: "start",
          sortable: true,
          value: "log",
        },
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
      var obj = [
        {
          invoice: "Inv 2093-96049-506",
          duration: "20 Jan, 2023 - 16 Jan 2024",
          status: "paid",
          amount: 15000,
          type: "Subscription",
        },
        {
          invoice: "Inv 2093-96049-506",
          duration: "20 Jan, 2023 - 16 Jan 2024",
          status: "failed",
          amount: 5000,
          type: "Subscription",
        },
        {
          invoice: "Inv 2093-96049-506",
          duration: "20 Jan, 2023 - 16 Jan 2024",
          status: "pending",
          amount: 150000,
          type: "Subscription",
        },
      ];
      for (let index = 0; index < 16; index++) {
        data = [...data, ...obj];
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

