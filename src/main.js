import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import clickOutside from "./directives/click-outside.js"

import "@/assets/tailwind.css";
import "@/assets/fontiran.css";
import "@/assets/base.css";
import "@/assets/smartadmin-production.min.css";
import "@/assets/smartadmin-rtl.min.css";
import "@/assets/smartadmin-production-plugins.min.css";
import "@/assets/demo.min.css";
import "@/assets/smartadmin-skins.min.css";
import "@/assets/style.css";
import "@/assets/style_iransans.css";
import "@/assets/style8.css";
import "@/assets/theme.css";
import 'vue-universal-modal/dist/index.css'

const app = createApp(App);
library.add(fas, far, fab);
app.use(clickOutside);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
