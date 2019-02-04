<template>
  <article class="page">
    <h3>Dane kontaktowe</h3>
    <section>
      <h4>Numery telefonów</h4>
      <a href="tel:0322563415">tel/fax: 032 256 34 15</a>
      <a href="tel:601462399">tel. dyżurny: 601 46 23 99</a>
    </section>
    <section>
      <h4>Adres email</h4>
      <a
        href="mailto:schronisko.katowice@gmail.com?subject=Drogie schronisko"
      >schronisko.katowice@gmail.com</a>
    </section>
    <div class="contactPage-openhours">
      <h4 class="contactPage-openhours-header">Godziny otwarcia</h4>
      <b class="contactPage-openhours-mon-frd">poniedziałek-piątek:</b>
      <span class="contactPage-openhours-mon-frd-hours">od 7:00 do 17:00</span>
      <b class="contactPage-openhours-sunday">sobota:</b>
      <span class="contactPage-openhours-sunday-hours">od 7:00 do 14:00</span>
    </div>
    <section class="contactPage-openhours">
      <!--TODO: wstawić tutaj mapkę-->
      <h4 class="contactPage-openhours-header">Gdzie jesteśmy</h4>
      <a
        target="_blank"
        href="https://www.google.com/maps/place/Milowicka+1B,+40-001+Katowice/data=!4m2!3m1!1s0x4716d024d9bfef3d:0xc5d1381f723a7b96?ved=2ahUKEwj44aTRvp3gAhXr-yoKHWuVAMwQ8gEwAHoECAAQAQ"
      >Zobacz na mapie</a>
    </section>
  </article>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "./../scss/base.scss";

.contactPage-openhours {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto;
}
.contactPage-openhours-header {
  grid-column: 1;
  grid-row: 1;
}
.contactPage-openhours-mon-frd {
  grid-column: 1;
  grid-row: 2;
}
.contactPage-openhours-mon-frd-hours {
  grid-column: 2;
  grid-row: 2;
}
.contactPage-openhours-sunday {
  grid-column: 1;
  grid-row: 3;
}
.contactPage-openhours-sunday-hours {
  grid-column: 2;
  grid-row: 3;
}
a {
  color: $AccentColor;
  transition: color $trans-duration;
}
a:hover {
  color: darken($AccentColor, 10%);
}
</style>