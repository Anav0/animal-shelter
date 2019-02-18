<template>
  <nav class="navbar-container">
    <div class="navbar-brand">
      <img src="./../../public/logo.png">
    </div>
    <div class="navbar-menu">
      <router-link class="navbar-item" to="/" exact>O schronisku</router-link>
      <div class="navbar-item dropdown">
        <router-link class="navbar-item" to="/pets">Nasze zwierzaki</router-link>
        <div class="dropdown-content">
          <router-link class="navbar-item" to="/pets/dogs">Psy</router-link>
          <router-link class="navbar-item" to="/pets/cats">Koty</router-link>
        </div>
      </div>
      <router-link class="navbar-item" to="/adoption">Adopcja</router-link>
      <router-link class="navbar-item" to="/hotel">Hotel</router-link>
      <router-link class="navbar-item" to="/help">Pomoc</router-link>
      <router-link class="navbar-item" to="/contact">Kontakt</router-link>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "./../scss/base.scss";

a {
  color: $Color;
  transition: color $trans-duration;
}

a:hover {
  color: $AccentColor;
}

.navbar-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  padding: $BaseSectionPadding;
}
.navbar-menu {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  max-width: 100%;
  max-height: 100%;
}
.navbar-brand img {
  width: 125px;
  height: auto;
  object-fit: scale-down;
}
.navbar-item {
  padding: 0.5rem;
}
.dropdown-content {
  width: 150px;
}
@media (max-width: $tablet) {
  .navbar-brand,
  .navbar-menu,
  .navbar-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>