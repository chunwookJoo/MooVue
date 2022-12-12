<template>
  <header class="header__logo">
    <h1>Moo<span>Vue</span></h1>
  </header>
  <div class="input__search--container">
    <span class="icon-search"></span>
    <input
      type="text"
      class="input__search"
      placeholder="찾고싶은 영화를 검색하세요."
      :value="clickKeyword"
      @input="onSearchInput"
    />
  </div>
  <SearchKeyword />
</template>

<script>
import SearchKeyword from "./SearchKeyword";
export default {
  components: {
    SearchKeyword,
  },
  data() {
    return {
      timer: null,
    };
  },
  computed: {
    clickKeyword() {
      if (this.$store.state.keyword.keyword === "") return;
      this.$store.dispatch("movie/getSearchMovieList", {
        searchInput: this.$store.state.keyword.keyword,
        page: 1,
      });
      return this.$store.state.keyword.keyword;
    },
  },
  methods: {
    onSearchInput(event) {
      if (this.timer !== null) {
        clearTimeout(this.timer);
      }
      this.$store.dispatch("movie/loadingSpinner", true);
      this.timer = setTimeout(async () => {
        this.$store.dispatch("movie/getSearchMovieList", {
          searchInput: event.target.value,
          page: 1,
        });
      }, 700);
    },
  },
};
</script>

<style lang="scss" scoped>
.header__logo {
  h1 {
    font-size: $font-size-xlg;
    font-weight: bold;
    color: $color-white;
    text-align: center;
    margin-bottom: 1rem;
    span {
      color: $color-primary;
    }
  }
}
.input__search--container {
  background-color: $color-white;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  @include flex(space-around, center);

  .icon-search {
    font-size: 18px;
  }
  .input__search {
    font-family: "Pretendard-Regular";
    width: 85%;
    border: 0;
    padding: 0.5rem 1rem;
    font-size: 18px;

    &:focus {
      outline: none;
    }
  }
}
</style>
