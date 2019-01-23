<template>
  <nav
    class="navbar navbar-container is-transparent"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <img src="./../../public/logo.png">
    </div>

    <div class="navbar-menu is-active">
      <div class="navbar-end">
        <router-link class="navbar-item" to="/" exact>O schronisku</router-link>
        <router-link class="navbar-item" to="/pets">Nasze zwierzaki</router-link>
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
.navbar-menu {
  box-shadow: none;
}
.navbar-brand img {
  width: 125px;
  height: auto;
}
</style>