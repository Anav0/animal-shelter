<template>
  <footer class="footer-container">
    <h4 class="footer-header1 footer-common-padding">Pytania i sugestie</h4>

    <div class="footer-common-padding footer-email footer-icontext-container">
      <fa-icon size="lg" class="footer-icon" icon="envelope"></fa-icon>
      <a
        href="mailto:schronisko.katowice@gmail.com?subject=Drogie schronisko"
      >schronisko.katowice@gmail.com</a>
    </div>

    <div class="footer-common-padding footer-number footer-icontext-container">
      <fa-icon size="lg" class="footer-icon" icon="phone"></fa-icon>
      <a href="tel:032-256-34-15">032 256 34 15</a>
    </div>

    <div class="footer-common-padding footer-number-cellphone footer-icontext-container">
      <fa-icon size="lg" class="footer-icon" icon="phone"></fa-icon>
      <a href="tel:601462399">601 46 23 99</a>
    </div>

    <h4 class="footer-header2 footer-common-padding">Czekamy na twoją wizytę</h4>
    <div class="footer-address footer-common-padding footer-icontext-container">
      <fa-icon size="lg" class="footer-icon" icon="map-marker-alt"></fa-icon>
      <a
        target="_blank"
        href="https://www.google.com/maps/place/Milowicka+1B,+40-001+Katowice/data=!4m2!3m1!1s0x4716d024d9bfef3d:0xc5d1381f723a7b96?ved=2ahUKEwj44aTRvp3gAhXr-yoKHWuVAMwQ8gEwAHoECAAQAQ"
      >40-313 Katowice ul. Milowicka 1B</a>
    </div>

    <span>Wykonał Igor Motyka</span>
  </footer>
</template>

<script>
export default {
  components: {}
};
</script>

<style scoped lang="scss">
@import "./../scss/base.scss";

.footer-container {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto auto auto;
  grid-gap: 0.5rem 4rem;
  padding: 5vh;
  color: $Color;
  justify-items: flex-start;
  align-items: center;
  justify-content: center;
}

.footer-header1 {
  grid-column: 1;
  grid-row: 1;
  margin: 0;
}

.footer-header2 {
  grid-column: 2;
  grid-row: 1;
  margin: 0;
}

.footer-email {
  grid-column: 1;
  grid-row: 2;
}

.footer-number {
  grid-column: 1;
  grid-row: 3;
}

.footer-number-cellphone {
  grid-column: 1;
  grid-row: 4;
}

.footer-address {
  grid-column: 2;
  grid-row: 2;
}
.footer-common-padding {
  padding: 0.5rem;
}

.footer-number,
.footer-number-cellphone,
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
  justify-content: flex-start;
}
span {
  grid-row: 5/6;
  grid-column: 1/3;
  justify-self: center;
  margin: 0;
  padding: 0;
}
@media (max-width: $tablet) {
  .footer-container {
    display: flex;
    flex-direction: column;

    & div,
    h4,
    span {
      width: 100%;
    }
  }
}
</style>