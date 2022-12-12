export default {
  namespaced: true,
  state() {
    return {
      searchKeyword: [
        {
          title: "marvel",
        },
        {
          title: "black",
        },
        {
          title: "iron",
        },
        {
          title: "fast",
        },
        {
          title: "christmas",
        },
        {
          title: "thor",
        },
        {
          title: "hulk",
        },
        {
          title: "harry potter",
        },
        {
          title: "captain",
        },
      ],
      keyword: "",
      currentPage: null,
    };
  },
  mutations: {
    updateKeyword(state, newKeyword) {
      state.keyword = newKeyword;
    },
    currentPage(state, currentPage) {
      state.currentPage = currentPage;
    },
  },
  actions: {
    onClickKeyword({ commit }, keyword) {
      commit("updateKeyword", keyword);
    },

    onCurrentPage({ commit }, currentPage) {
      commit("currentPage", currentPage);
    },
  },
};
