import { createStore } from "vuex";
import movie from "./movie";
import keyword from "./keyword";

export default createStore({
  modules: {
    movie,
    keyword,
  },
});
