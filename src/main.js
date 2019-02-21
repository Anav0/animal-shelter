import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import VuePaginate from "vue-paginate";
import AOS from "aos";
import "aos/dist/aos.css";
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
  faVenus,
  faBars
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueAnalytics from "vue-analytics";

Vue.config.productionTip = false;
Vue.use(VuePaginate);
const isProd = process.env.NODE_ENV === "production";
Vue.use(VueAnalytics, {
  id: "UA-134709304-1",
  router,
  checkDuplicatedScript: true,
  autoTracking: {
    screenview: true
  },
  debug: {
    enabled: !isProd,
    sendHitTask: isProd
  }
});
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
  faVenus,
  faBars
);

Vue.component("fa-icon", FontAwesomeIcon);
new Vue({
  router,
  created() {
    AOS.init();
  },
  render: h => h(App)
}).$mount("#app");
