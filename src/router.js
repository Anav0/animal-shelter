import Vue from "vue";
import Router from "vue-router";
import FrontPage from "./pages/FrontPage.vue";
Vue.use(Router);

const pets = { template: "<p>Pets page</p>" };
const help = { template: "<p>Help page</p>" };
const contact = { template: "<p>About page</p>" };

export default new Router({
  mode: "history",
  linkActiveClass: "is-active",
  routes: [
    {
      path: "/",
      name: "PetsPage",
      component: FrontPage
    },
    {
      path: "/pets",
      name: "Pets",
      component: pets
    },
    {
      path: "/help",
      name: "Help",
      component: help
    },
    {
      path: "/contact",
      name: "Contact",
      component: contact
    }
  ]
});
