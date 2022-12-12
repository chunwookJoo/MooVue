import * as Vue from "vue";
import ElementPlus from "element-plus";
import store from "./store";
import App from "./App.vue";

const app = Vue.createApp(App);
app.use(ElementPlus);
app.use(store);
app.mount("#app");
