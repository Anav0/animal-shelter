<template>
  <div class="frontPage-container">
    <h3>Nie tylko ludzie potrzebują domu</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt, augue non finibus volutpat, risus ipsum tristique nulla, non interdum orci nunc eu velit. Nam eleifend augue arcu, eget eleifend eros scelerisque sed.</p>
    <button class="button is-primary is-medium is-rounded">Adoptuj przyjaciela</button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.hero.is-fullheight .hero-body {
  flex-direction: column;
  align-items: flex-start;
  justify-content: left;
}
.frontPage-container {
  max-width: 45rem;
  height: auto;
}

h3,
p,
button {
  margin: 0.5rem;
}
</style>