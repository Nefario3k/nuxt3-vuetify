<template>
  <div class="card_container">
    <h4 class="titleCard">{{ cardContent.title }}</h4>
    <p class="titleSubtext">{{ $formatNumber(cardContent.value) }}</p>
  </div>
</template>

<script>
export default {
  props: {
    cardContent: {
      type: Object,
      default: {},
    },
  },
};
</script>