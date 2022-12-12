<template>
  <el-pagination
    id="custom--pagination"
    background
    layout="prev, pager, next"
    :total="totalPages"
    @current-change="paginate"
    :current-page="currentPage"
  />
</template>

<script>
export default {
  computed: {
    totalPages() {
      return Number(this.$store.state.movie.totalPages);
    },
    currentPage() {
      if (this.$store.state.keyword.currentPage) {
        return this.$store.state.keyword.currentPage;
      }
    },
  },
  methods: {
    paginate(currentPage) {
      this.$store.dispatch("movie/getSearchMovieList", {
        searchInput: this.$store.state.movie.searchTitle,
        page: currentPage,
      });
      this.$store.dispatch("keyword/onCurrentPage", currentPage);
    },
  },
};
</script>

<style lang="scss" scoped>
#custom--pagination {
  justify-content: center;
}
</style>
