<template>
  <ul class="keyword--container">
    <li
      v-for="keyword in keywordList"
      :key="keyword.title"
      @click="onKeywordClick(keyword.title, 1)"
    >
      <span>{{ keyword.title }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    keywordList() {
      return this.$store.state.keyword.searchKeyword;
    },
  },
  methods: {
    onKeywordClick(keyword, resetPage) {
      this.$store.dispatch("keyword/onClickKeyword", keyword);
      this.$store.dispatch("keyword/onCurrentPage", resetPage);
    },
  },
};
</script>

<style lang="scss" scoped>
.keyword--container {
  @include flex(center, center);
  flex-wrap: wrap;
  margin: 2rem 4rem;
  gap: 14px;

  li {
    margin: 6px 4px;
    span {
      color: $color-white;
      background-color: $color-black;
      padding: 8px 1rem;
      border-radius: 1rem;

      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
