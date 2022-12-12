<template>
  <div class="app__global">
    <div class="app__inner">
      <section class="app__search--container">
        <SearchInput />
      </section>
      <MovieList />
    </div>
  </div>
</template>

<script>
import SearchInput from "~/components/SearchInput";
import MovieList from "~/components/MovieList";
export default {
  components: {
    SearchInput,
    MovieList,
  },
};
</script>

<style lang="scss" scoped>
.app__global {
  font-family: "Pretendard-Regular";

  .app__inner {
    max-width: $body-global-width;
    margin: 0 auto;

    .app__search--container {
      max-width: $body-search-width;
      padding: 10rem 0 2rem 0;
      margin: 0 auto;
    }
  }
}
</style>
