<template>
  <v-tooltip
    content-class="listTool"
    :nudge-bottom="6"
    :nudge-left="1"
    top
    color="var(--bg-dark)"
  >
    <template v-slot:activator="{ on, attrs }">
      <div v-bind="attrs" v-on="on">
        <Button
          :elevation="0"
          style="padding: 0"
          class="p-0 m-0"
          textColor="var(--label-light3)"
          width="max-content"
          :svg="true"
          :svgLeft="icon"
          minWidth="max-content"
          height="max-content"
          color="transparent"
          :ripple="false"
        />
      </div>
    </template>
    <span class="tooltip__span">{{ text }}</span>
  </v-tooltip>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: "SvgInfo",
    },
    text: {
      type: String,
      default: "tool tip",
    },
  },
};
</script>

<style lang="scss" scoped>
</style>