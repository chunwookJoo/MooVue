<template>
  <div
    class="movie__list--container"
    v-bind:class="{ overlay: this.$store.state.movie.isLoading }"
  >
    <ul>
      <MovieListItem
        v-for="movie in movieList"
        :key="movie.imdbID"
        :movie="movie"
      />
    </ul>
    <MovieDetailModal v-model="isModalOpen" @close="handleClose">
    </MovieDetailModal>
    <Loading :isLoading="this.$store.state.movie.isLoading" />
  </div>
  <div v-if="totalPages" class="pagination--container">
    <Pagination />
  </div>
</template>

<script>
import MovieListItem from "./MovieListItem";
import Loading from "~/components/utils/Loading";
import Pagination from "./utils/Pagination";
import MovieDetailModal from "./utils/MovieDetailModal";

export default {
  components: {
    MovieListItem,
    Pagination,
    Loading,
    MovieDetailModal,
  },
  computed: {
    movieList() {
      return this.$store.state.movie.movieList;
    },
    totalPages() {
      return this.$store.state.movie.totalPages;
    },
    isModalOpen() {
      return this.$store.state.movie.isModalOpen;
    },
  },
  methods: {
    handleClose() {
      this.$store.dispatch("movie/modalCloseHandler", false);
    },
  },
};
</script>

<style lang="scss" scoped>
.movie__list--container {
  position: relative;
  padding-bottom: 4rem;

  ul {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(5, 1fr);
  }
}

.overlay {
  opacity: 0.5;
}
.pagination--container {
  text-align: center;
  padding: 2rem 0 5rem 0;
}
</style>
