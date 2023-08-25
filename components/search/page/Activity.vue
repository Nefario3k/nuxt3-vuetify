<template>
  <div class="search__area">
    <!-- input area  -->
    <form class="search_input_area relative user_area">
      <input
        required
        class="form-control input_field"
        autocomplete="off"
        type="email"
        v-model="searchInput"
        placeholder="name@example.com"
      />
      <Button
        title="search"
        type="submit"
        :disabled="!searchInput"
        height="100%"
        minWidth="max-content"
        color="var(--primary-color)"
        contentClass="searchBtn"
        :svg="true"
        svgLeft="SvgSearch"
      />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchInput: "",
      menuModel: false,
      closeOnContent: false,
      searchFilter: {
        type: "",
        status: "",
        plan: "",
      },
    };
  },
};
</script>
