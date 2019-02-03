<template>
  <div id="app" class="app-container">
    <NavBar/>
    <!--Hero body-->
    <div class="hero-body">
      <router-view></router-view>
    </div>
    <Footer/>
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

<style scoped lang="scss">
@import "./scss/base.scss";

.app-container {
  background: url("./assets/dog-hero.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: 70% 0%;
  margin: 0;
  padding: 0;
}
.hero-body {
  max-width: 100%;
  max-height: 100%;
}
</style>
