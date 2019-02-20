<template>
  <main id="page-anchor" class="petsPage-container">
    <h3 class="petsPage-header">Nasi przyjaciele którzy szukają domu</h3>
    <router-view :key="$route.fullPath"></router-view>
  </main>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "./../scss/base.scss";

.petsPage-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-items: center;
  justify-content: center;
  min-height: 80vh;
  width: 100%;
  height: 100%;
  background: $MainBackground;
  padding: $BaseSectionPadding;
}

.petsPage-header {
  margin: 1rem;
  color: $SecondColor;
}
</style>