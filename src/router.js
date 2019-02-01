import Vue from "vue";
import Router from "vue-router";
import FrontPage from "./pages/FrontPage.vue";
import PetsPage from "./pages/PetsPage.vue";
import ContactPage from "./pages/ContactPage.vue";
import AdoptionPage from "./pages/AdoptionPage.vue";
Vue.use(Router);

const help = { template: "<p>Help page</p>" };

export default new Router({
  mode: "history",
  linkActiveClass: "is-active",
  routes: [
    {
      path: "/",
      name: "FrontPage",
      component: FrontPage
    },
    {
      path: "/pets",
      name: "PetsPage",
      component: PetsPage
    },
    {
      path: "/help",
      name: "HelpPage",
      component: help
    },
    {
      path: "/contact",
      name: "ContactPage",
      component: ContactPage
    },
    {
      path: "/adoption",
      name: "AdoptionPage",
      component: AdoptionPage
    }
  ]
});
