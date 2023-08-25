<template>
  <v-skeleton-loader
    :max-height="maxHeight ? maxHeight : 120"
    min-width="150"
    class="m-0"
    type="image"
  ></v-skeleton-loader>
</template>
<script>
export default {
  props: ["maxHeight"],
};
</script>
