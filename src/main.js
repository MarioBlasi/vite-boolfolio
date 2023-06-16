import { createApp } from "vue";
import App from "./App.vue";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import * as bootstrap from "bootstrap";
import { router } from "./router.js";
createApp(App).use(router).mount("#app");
