// import { API_END_POINT, API_KEY } from "../../config"
import axios from "axios";

const API_END_POINT = process.env.API_END_POINT;
const API_KEY = process.env.API_KEY;

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
      await axios
        .get(`${API_END_POINT}?apikey=${API_KEY}&i=${movieId}&plot=full`)
        .then((response) => {
          if (response.status === 200) {
            commit("updateMovieDetail", response.data);
            commit("doneLoading", false);
            commit("modalOpen", true);
            return;
          } else {
            console.log(response);
          }
        });
    },
    async getSearchMovieList({ commit }, payload) {
      commit("doneLoading", true);
      const { searchInput, page } = payload;
      await axios
        .get(`${API_END_POINT}?apikey=${API_KEY}&s=${searchInput}&page=${page}`)
        .then((response) => {
          if (response.status === 200) {
            commit("assignState", {
              movieList: response.data.Search,
            });
            commit("saveSearchTitle", searchInput);
            commit("savePage", response.data.totalResults, 1);
            commit("doneLoading", false);
          } else {
            console.log(response);
          }
        });
    },
    loadingSpinner({ commit }, isLoading) {
      commit("doneLoading", isLoading);
    },
    modalCloseHandler({ commit }, modalClose) {
      commit("modalOpen", modalClose);
    },
  },
};
