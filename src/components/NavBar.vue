<template>
  <nav class="navbar-container">
    <div class="navbar-brand">
      <a href="/">
        <img src="./../../public/logo.png">
      </a>
    </div>

    <input id="toggle" type="checkbox">
    <label class="toggle-container" for="toggle">
      <fa-icon class="navbar-bars" icon="bars"></fa-icon>
    </label>

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

input[type="checkbox"] {
  display: none;
}

a {
  color: $Color;
  transition: color $trans-duration;
}

a:hover {
  color: $AccentColor;
}
.block-test {
  display: inline;
}
.flex-test {
  display: flex;
}
.navbar-container {
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: auto 2rem;
  padding: $BaseSectionPadding;
}
.navbar-bars {
  font-size: 2rem;
  color: $AccentColor;
  cursor: pointer;
  display: none;
}
.navbar-menu {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  grid-row: 2;
  grid-column: 1/3;
}
.navbar-brand {
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-row: 1/2;
  grid-column: 1;
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
  .navbar-menu {
    display: none;
  }
  .navbar-bars {
    display: inline-block;
    grid-row: 1;
    grid-column: 1;
    align-self: center;
    justify-self: center;
    width: 100%;
    height: 100%;
  }

  input[type="checkbox"]:checked ~ .toggle-container .navbar-bars {
    color: $SecondColor;
  }

  input[type="checkbox"]:checked ~ .navbar-menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>