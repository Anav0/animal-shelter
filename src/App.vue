<template>
  <div id="app" class="app-container hero is-fullheight">
    <div class="hero-head">
      <NavBar/>
    </div>
    <!--Hero body-->
    <div class="hero-body">
      <router-view></router-view>
    </div>
    <div class="hero-foot">
      <!--TODO: Footer-->
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";

export default {
  name: "app",
  components: { NavBar }
};
</script>

<style lang="scss">
@import "./scss/base.scss";

.hero {
  padding: 2rem 5rem;
  background: url("./assets/dog-hero.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: 70% 0%;
}
</style>
