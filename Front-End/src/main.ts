import { createApp } from "vue";
import App from "./App.vue";

/* FONT AWESOME */
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Icons
import {
  faDiscord,
  faFreeCodeCamp,
  faGithub,
  faSpotify,
  faSteam,
} from "@fortawesome/free-brands-svg-icons";
import { faCode, faUser } from "@fortawesome/free-solid-svg-icons";

library.add(
  faCode,
  faGithub,
  faSpotify,
  faSteam,
  faDiscord,
  faFreeCodeCamp,
  faUser
);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
