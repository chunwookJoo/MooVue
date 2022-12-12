import { request } from "../api";

export default {
  namespaced: true,
  state() {
    return {
      movieList: [],
      movieDetail: {},
      searchTitle: "",
      totalPages: 0,
      currentPage: 0,
      isLoading: false,
      isModalOpen: false,
    };
  },
  mutations: {
    assignState(state, payload) {
      Object.keys(payload).forEach((key) => {
        state[key] = payload[key];
      });
    },
    updateMovieDetail(state, newMovieDetail) {
      state.movieDetail = newMovieDetail;
    },
    saveSearchTitle(state, searchTitle) {
      state.searchTitle = searchTitle;
    },
    savePage(state, totalPages, currentPage) {
      state.totalPages = totalPages;
      state.currentPage = currentPage;
    },
    doneLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
    modalOpen(state, isModalOpen) {
      state.isModalOpen = isModalOpen;
    },
  },
  actions: {
    async getMovieDetail({ commit }, movieId) {
      commit("doneLoading", true);
      const url = `i=${movieId}&plot=full`;
      const res = await request(url);
      commit("updateMovieDetail", res);
      commit("doneLoading", false);
      commit("modalOpen", true);
    },

    async getSearchMovieList({ commit }, payload) {
      commit("doneLoading", true);
      const { searchInput, page } = payload;
      const url = `s=${searchInput}&page=${page}`;

      const res = await request(url);
      commit("assignState", {
        movieList: res.Search,
      });
      commit("saveSearchTitle", searchInput);
      commit("savePage", res.totalResults, 1);
      commit("doneLoading", false);
    },

    loadingSpinner({ commit }, isLoading) {
      commit("doneLoading", isLoading);
    },

    modalCloseHandler({ commit }, modalClose) {
      commit("modalOpen", modalClose);
    },
  },
};
