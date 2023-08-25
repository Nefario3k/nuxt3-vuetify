<template>
  <v-app-bar
    style="margin-left: 1px"
    color="#fff"
    :elevation="elevation"
    fixed
    :height="50"
    class="panelBar p-0 m-0"
  >
    <div class="panel_top_head">
      <span>{{ title }}</span>
      <Button
        title="Close"
        @action="$emit('closeDrawer')"
        :elevation="0"
        style="padding: 0"
        class="p-0 m-0 close_mark"
        :svg="true"
        :ripple="false"
        svgLeft="SvgXmark"
        width="max-content"
        minWidth="max-content"
        height="max-content"
        color="transparent"
      />
    </div>
  </v-app-bar>
</template>

<script>
export default {
  props: ["elevation", "title"],
};
</script>
