<template>
  <div class="pagination_wrapper">
    <button
      class="pagination_btn prev"
      :class="currentPage <= 1 && 'disabled'"
      :disabled="currentPage <= 1"
      @click="$emit('changePage', 'prev')"
    >
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
    </button>
    <span class="current_page">{{currentPage}}</span>
    <button
      class="pagination_btn next"
      :class="currentPage >= maxPage && 'disabled'"
      :disabled="currentPage >= maxPage"
      @click="$emit('changePage', 'next')"
    >
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
    </button>
  </div>
</template>

<script>

export default{
  name: "Pagination",
  props: {
    currentPage: {
      type: [Number, String],
      default: 1
    },
    maxPage: {
      type: [Number, String],
      default: 1
    }
  }
}
</script>

<style scoped lang="scss">
.pagination_wrapper{
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 20px;

  .current_page{
    font-weight: bold;
  }

  .pagination_btn{
    border: none;
    outline: none;
    cursor: pointer;
    background-color: white;
    padding: 0 10px;

    &.disabled{
      opacity: .7;
      cursor: not-allowed;
    }
  }
}

</style>
