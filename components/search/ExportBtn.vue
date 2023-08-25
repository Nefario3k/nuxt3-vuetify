<template>
  <v-menu :nudge-bottom="5" offset-y>
    <template v-slot:activator="{ on, attrs }">
      <div v-bind="attrs" v-on="on">
        <Button
          :elevation="0"
          :outlined="outlined"
          :textColor="textColor"
          width="max-content"
          :svg="true"
          svgRight="SvgAngleDown"
          text="Export"
          :minWidth="minWidth"
          :height="height"
          color="var(--primary-color)"
          :contentClass="`card__dropdown large export ${contentClass}`"
        />
      </div>
    </template>
    <v-list class="dropdown__list userDropDown">
      <v-list-item class="dropdown__list-item">
        <v-list-item-content>
          <v-list-item-title class="dropdown__list-title"
            >Selection</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
      <v-list-item class="dropdown__list-item">
        <v-list-item-content>
          <v-list-item-title class="dropdown__list-title"
            >Current table</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
      <v-list-item class="dropdown__list-item">
        <v-list-item-content>
          <v-list-item-title class="dropdown__list-title"
            >All Results</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  props: {
    minWidth: {
      type: String | Number,
      default: "12.4rem",
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    contentClass: {
      type: String,
      default: "",
    },
    textColor: {
      type: String,
      default: "var(--text-dark)",
    },
    height: {
      type: String,
      default: "4.8rem",
    },
  },
};
</script>

<style lang="scss" scoped>
</style>