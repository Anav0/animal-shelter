import Vue from "vue";
import Router from "vue-router";
import FrontPage from "./pages/FrontPage.vue";
import PetsPage from "./pages/PetsPage.vue";
import ContactPage from "./pages/ContactPage.vue";
import AdoptionPage from "./pages/AdoptionPage.vue";
import HotelPage from "./pages/HotelPage.vue";
import HelpPage from "./pages/HelpPage.vue";
import LoginPage from "./pages/LoginPage.vue";
import PetsPageListing from "./components/PetsPageListing.vue";
Vue.use(Router);

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
      component: PetsPage,
      children: [
        {
          path: "",
          component: PetsPageListing,
          props: { display: "dogs" }
        },
        {
          path: "dogs",
          component: PetsPageListing,
          props: { display: "dogs" }
        },
        {
          path: "cats",
          component: PetsPageListing,
          props: { display: "cats" }
        }
      ]
    },
    {
      path: "/help",
      name: "HelpPage",
      component: HelpPage
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
    },
    {
      path: "/hotel",
      name: "HotelPage",
      component: HotelPage
    },
    {
      path: "/login",
      name: "LoginPage",
      component: LoginPage
    }
  ]
});
