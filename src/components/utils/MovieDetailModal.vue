<template>
  <el-dialog title="영화 상세정보" width="35%">
    <section class="movie-detail--poster">
      <div>
        <img
          class="poster-img"
          :src="movieDetail.Poster.replace('SX300', 'SX700')"
          alt="영화 포스터"
        />
      </div>
      <div class="movie-detail--info">
        <h3 class="movie-detail--title">
          {{ movieDetail.Title }}
        </h3>
        <ul>
          <li>
            <label> 감독 </label>
            <p>{{ movieDetail.Director }}</p>
          </li>
          <li>
            <label>배우</label>
            <p>{{ movieDetail.Actors }}</p>
          </li>
          <li>
            <label>평점 </label>
            <p class="rating">{{ movieDetail.imdbRating }}</p>
          </li>
          <li>
            <label>상영시간</label>
            <p>{{ movieDetail.Runtime }}</p>
          </li>
          <li>
            <label>개봉일</label>
            <p>{{ movieDetail.Released }}</p>
          </li>
          <li>
            <label>국가</label>
            <p>{{ movieDetail.Country }}</p>
          </li>
        </ul>
      </div>
    </section>
    <section class="movie-detail--plot">
      <p>
        {{ movieDetail.Plot }}
      </p>
    </section>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="$emit('close', false)">Cancel</el-button>
        <el-button
          style="color: #fff"
          color="#3fb27f"
          type="primary"
          @click="$emit('close', false)"
        >
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
export default {
  props: {
    close: Function,
  },
  computed: {
    movieDetail() {
      return this.$store.state.movie.movieDetail;
    },
  },
};
</script>

<style lang="scss" scoped>
.movie-detail--poster {
  display: flex;
  margin-bottom: 3rem;

  .poster-img {
    width: 100%;
  }
  .movie-detail--info {
    padding: 0 1rem 0 2rem;
    text-align: center;

    .movie-detail--title {
      color: $color-black;
      font-weight: bold;
      font-size: 24px;
      margin-bottom: 2rem;
    }

    .rating {
      font-size: 18px;
      font-weight: bold;
      color: $color-black;
    }
  }

  p {
    font-size: 16px;
    margin: 6px 0 1rem 0;
  }
}

.movie-detail--plot {
  p {
    font-size: 16px;
    line-height: 1.5;
  }
}

label {
  color: $color-fonts;
}
</style>
