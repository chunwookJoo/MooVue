<template>
  <li @click="getMovieDetail" ref="trigger">
    <img
      class="movie--poster"
      :src="movie.Poster.replace('SX300', 'SX700')"
      alt="영화 포스터"
    />
    <div class="movie--poster-overlay"></div>
    <div class="movie--info">
      <h3 class="movie--info-title">{{ movie.Title }}</h3>
      <p class="movie--info-year">{{ movie.Year }}</p>
      <p class="movie--info-type">{{ movie.Type }}</p>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    getMovieDetail() {
      this.$store.dispatch("movie/getMovieDetail", this.movie.imdbID);
    },
  },
};
</script>

<style lang="scss" scoped>
li {
  position: relative;
  text-align: center;
  cursor: pointer;
  .movie--poster {
    width: 100%;
    height: 100%;
  }

  .movie--poster-overlay {
    display: none;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: $color-black;
    opacity: 0.85;
  }
  .movie--info {
    display: none;
    position: absolute;
    top: 40px;
    width: 100%;
    height: calc(100% - 40px);
    color: $color-white;

    .movie--info-title {
      font-size: $font-size-lg;
      padding: 0 8px;
      margin-bottom: 1rem;
    }

    .movie--info-year {
      margin-bottom: 6px;
    }
  }

  &:hover {
    .movie--poster-overlay,
    .movie--info {
      display: block;
    }
  }
}
</style>
