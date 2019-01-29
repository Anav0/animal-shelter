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
      <Footer/>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default {
  name: "app",
  components: { NavBar, Footer }
};
</script>

<style lang="scss">
@import "./scss/base.scss";

.app-container {
  background: url("./assets/dog-hero.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: 70% 0%;
}

.hero-body {
  margin: 0;
  padding: 0;
}

.hero-head {
  margin: 0;
  padding: 0;
}
</style>
