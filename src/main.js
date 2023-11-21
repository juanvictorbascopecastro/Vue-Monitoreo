import { createApp } from "vue";
import router from "./router";
import store from "./store/index";
import App from "./App.vue";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/style.css";
import Vue3Geolocation from "vue3-geolocation";

const app = createApp(App);
app.use(router);
app.use(store);
app.use(Vue3Geolocation);
app.mount("#app");
