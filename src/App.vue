<template>
  <div class="app-container">
    <section class="hero is-fullheight">
      <div class="hero-header">
        <NavBar/>
      </div>
      <div class="hero-body">
        <h3>Nie tylko ludzie potrzebują domu</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt, augue non finibus volutpat, risus ipsum tristique nulla, non interdum orci nunc eu velit. Nam eleifend augue arcu, eget eleifend eros scelerisque sed.</p>
        <button class="button is-primary is-medium is-rounded">Adoptuj przyjaciela</button>
      </div>
      <div class="hero-foot"></div>
    </section>
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
  background-image: url("./assets/dog-hero.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.hero.is-fullheight .hero-body {
  flex-direction: column;
  align-items: flex-start;
  justify-content: left;
}
.hero-body {
  max-width: 45rem;
  height: auto;
}
.her-body,
h3,
p,
button {
  margin: 1rem;
}
</style>
