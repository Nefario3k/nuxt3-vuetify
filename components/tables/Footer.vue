<template>
  <div class="TableFooterDesign">
    <div class="left__section">
      <!-- previous btn  -->
      <Button
        @action="
          $emit('loadMore', {
            page: pagination.itemsPerPage,
            currentPage: pagination.page,
            action: 'prev',
          })
        "
        :ripple="false"
        :disabled="pagination.page == 1"
        title="Previous Page"
        :elevation="0"
        style="padding: 0"
        class="p-0 m-0"
        textColor="$primary-dark-color"
        text="Previous"
        width="max-content"
        minWidth="max-content"
        height="max-content"
        color="transparent"
      />
      <div class="btnWrapper">
        <v-menu :nudge-bottom="3" offset-y>
          <template v-slot:activator="{ on, attrs }">
            <div v-bind="attrs" v-on="on">
              <Button
                :ripple="false"
                :elevation="0"
                style="padding: 0"
                class="p-0 m-0"
                textColor="$primary-dark-color"
                :text="pagination.itemsPerPage"
                :svg="true"
                svgRight="SvgAngleDown"
                width="max-content"
                minWidth="5rem"
                height="max-content"
                color="transparent"
              />
            </div>
          </template>
          <v-list class="dropdown__list tableList">
            <v-list-item
              v-for="(perPage, index) in pagination.itemsPerPageOptions"
              :key="index"
              :class="{ active: pagination.itemsPerPage == perPage }"
              @click="$emit('getPerPage', perPage)"
              class="dropdown__list-item"
            >
              <v-list-item-content>
                <v-list-item-title class="dropdown__list-title">{{
                  perPage
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>
    <div class="right__section">
      <!-- pagination  -->
      <v-pagination
        color="transparent"
        v-model="pagination.pageStart"
        :total-visible="7"
        :length="pagination.last_page"
      ></v-pagination>
      <!-- next btn -->
      <Button
        @action="
          $emit('loadMore', {
            page: pagination.itemsPerPage,
            currentPage: pagination.page,
            action: 'next',
          })
        "
        :ripple="false"
        :disabled="pagination.page == pagination.last_page"
        title="Next Page"
        :elevation="0"
        style="padding: 0"
        class="p-0 m-0"
        textColor="$primary-dark-color"
        text="Next"
        width="max-content"
        minWidth="max-content"
        height="max-content"
        color="transparent"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["pagination", "itemsPerPageText", "tableData"],
  emits: ["getPerPage", "loadMore"],
};
</script>

<style lang="scss" scoped>
</style>