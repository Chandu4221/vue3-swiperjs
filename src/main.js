import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
// import { faComment } from "@fortawesome/free-regular-svg-icons";
// import { faTwitter } from "@fortawesome/free-brands-svg-icons";

library.add(faChevronLeft, faChevronRight);

createApp(App).mount("#app");
