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
      <!-- invoice  -->
      <template v-slot:item.invoice="{ item }">
        <div class="user_content">
          <div class="user_content_details">
            <div class="">
              <SvgReceipt />
            </div>
            <p>{{ item.invoice }}</p>
          </div>
        </div>
      </template>
      <!-- duration  -->
      <template v-slot:item.duration="{ item }">
        <div class="user_content">
          <div class="user_content_details">
            <p>{{ item.duration }}</p>
          </div>
        </div>
      </template>
      <!-- status  -->
      <template v-slot:item.status="{ item }">
        <div class="user_content">
          <div class="user_content_details justify-center">
            <div class="chip__wrapper">
              <v-chip
                v-if="item.status === 'paid'"
                small
                text-color="var(--chip-text)"
                color="var(--chip-bg)"
                :ripple="false"
                class="plan__chips"
              >
                {{ item.status }}
              </v-chip>
              <v-chip
                v-else-if="item.status === 'failed'"
                small
                text-color="var(--chip-text2)"
                color="var(--chip-bg2)"
                :ripple="false"
                class="plan__chips"
              >
                {{ item.status }}
              </v-chip>
              <v-chip
                v-else
                small
                text-color="$primary-dark-color"
                color="var(--table)"
                :ripple="false"
                class="plan__chips"
              >
                {{ item.status }}
              </v-chip>
            </div>
          </div>
        </div>
      </template>
      <!-- amount  -->
      <template v-slot:item.amount="{ item }">
        <div class="user_content">
          <div class="user_content_details">
            <p>
              {{ $formatNairaCurrency(item.amount) }}
            </p>
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
        <div class="user_content_details">
          <div
            title="Download Invoice"
            style="cursor: pointer"
            class="p-0 m-0 user_content_details download"
          >
            <span>Download</span>
            <div>
              <SvgDownload />
            </div>
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
      selected: [],
      tableLoader: false,
      headers: [
        {
          text: "invoice",
          align: "start",
          sortable: true,
          value: "invoice",
        },
        { text: "Duration", value: "duration" },
        { text: "Status", value: "status" },
        { text: "Amount", value: "amount" },
        { text: "type", value: "type" },
        { text: "Created", value: "created_at" },
        { text: "", value: "action" },
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

