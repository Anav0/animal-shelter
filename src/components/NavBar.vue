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
        <a class="navbar-item">O schronisku</a>
        <a class="navbar-item is-active">Nasze zwierzaki</a>
        <a class="navbar-item">Pomoc</a>
        <a class="navbar-item">Kontakt</a>
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