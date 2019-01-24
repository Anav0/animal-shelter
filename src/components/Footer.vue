<template>
  <div class="footer-container">
    <h4 class="footer-header1 footer-common-padding">Pytania i sugestie</h4>

    <div class="footer-common-padding footer-email footer-icontext-container">
      <fa-icon size="lg" class="footer-icon" icon="envelope"></fa-icon>
      <a href="mailto:email@shelter.com?subject=Drogie schronisko">email@shelter.com</a>
    </div>

    <div class="footer-common-padding footer-number footer-icontext-container">
      <fa-icon size="lg" class="footer-icon" icon="phone"></fa-icon>
      <a href="tel:032-256-34-15">032-256-34-15</a>
    </div>

    <h4 class="footer-header2 footer-common-padding">Czekamy na twoją wizytę</h4>

    <div class="footer-address footer-common-padding footer-icontext-container">
      <fa-icon size="lg" class="footer-icon" icon="map-marker-alt"></fa-icon>
      <address>40-313 Katowice ul. Milowicka 1B</address>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style scoped lang="scss">
@import "./../scss/base.scss";

.footer-container {
  grid-column: 1;
  grid-row: 1;

  justify-items: start; //X axis
  align-items: center; //Y axis

  justify-content: center; //X axis for whole grid
  align-content: center; //Y axis for whole grid

  grid-gap: 0.5rem 10vw;

  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto;
  margin: 5vh;
}

.footer-header1 {
  grid-column: 1;
  grid-row: 1;
}

.footer-header2 {
  grid-column: 2;
  grid-row: 1;
}

.footer-email {
  grid-column: 1;
  grid-row: 2;
}

.footer-number {
  grid-column: 1;
  grid-row: 3;
}

.footer-address {
  grid-column: 2;
  grid-row: 2;
}
.footer-common-padding {
  padding: 0.5rem;
}

.footer-number,
.footer-email,
.footer-icon,
.footer-address {
  & * {
    color: $AccentColor;
  }
  & *:hover {
    color: darken($AccentColor, 10%);
  }
}

.footer-icon {
  margin-right: 1rem;
}
.footer-icontext-container {
  display: flex;
  align-items: center;
  justify-content: start;
}

@media (max-width: $tablet) {
  .footer-container {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
}
</style>