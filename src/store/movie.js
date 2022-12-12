// import { request } from "../api";

// const API_END_POINT = process.env.API_END_POINT;
// const API_KEY = process.env.API_KEY;

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

const request = async (url) => {
  console.log(url);
  return await fetch("/.netlify/functions/movie", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(url),
  }).then((res) => res.json());

  // try {
  //   const res = await fetch(`${API_END_POINT}?apikey=${API_KEY}&${url}`);

  //   if (!res.ok) {
  //     throw new Error("API ERROR");
  //   }

  //   return await res.json();
  // } catch (error) {
  //   alert(e.message);
  // }
};
