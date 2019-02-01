<template>
  <nav
    class="navbar navbar-container is-transparent"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <!--TODO: change logo becouse the dog is's not visible-->
      <img src="./../../public/logo.png">
    </div>

    <div class="navbar-menu is-active">
      <div class="navbar-end">
        <router-link class="navbar-item" to="/" exact>O schronisku</router-link>
        <router-link class="navbar-item" to="/pets">Nasze zwierzaki</router-link>
        <router-link class="navbar-item" to="/adoption">Adopcja</router-link>
        <router-link class="navbar-item" to="/hotel">Hotel</router-link>
        <router-link class="navbar-item" to="/help">Pomoc</router-link>
        <router-link class="navbar-item" to="/contact">Kontakt</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "./../scss/base.scss";

.navbar-container {
  margin: $BaseSectionPadding;
  padding: 0;
}
.navbar-menu {
  box-shadow: none;
  text-align: center;
}
.navbar-brand img {
  width: 125px;
  height: auto;
}

@media (max-width: $tablet) {
  .navbar-brand {
    justify-content: center;
  }
}
</style>