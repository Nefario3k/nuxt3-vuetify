<template>
  <div>
    <section class="error__section">
      <div class="transIn">
        <!-- logo  -->
        <div>
          <SvgErrorNotFound />
        </div>
        <h1 v-if="error.statusCode === 404">
          {{ pageNotFound }}
        </h1>
        <h1 v-else>
          {{ otherError }}
        </h1>

        <p>
          Sorry! Looks like you are lost in space, but do not worry <br />
          We will help you find what you need.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "EmptyLayout",
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: "Whoops!",
      otherError: "An error occurred",
    };
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title,
    };
  },
};
</script>
