import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import VuePaginate from "vue-paginate";
import AOS from "aos";
import "aos/dist/aos.css";
require("dotenv").load();
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faPills,
  faBone,
  faBaseballBall,
  faSyringe,
  faHandsHelping,
  faMars,
  faVenus
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.config.productionTip = false;
Vue.use(VuePaginate);
library.add(
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faPills,
  faBone,
  faBaseballBall,
  faSyringe,
  faHandsHelping,
  faMars,
  faVenus
);
Vue.component("fa-icon", FontAwesomeIcon);
new Vue({
  router,
  created() {
    AOS.init();
  },
  render: h => h(App)
}).$mount("#app");
