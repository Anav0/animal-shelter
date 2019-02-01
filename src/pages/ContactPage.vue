<template>
  <div class="contactPage-container">
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
    <section class="contactPage-openhours">
      <h4 class="contactPage-openhours-header">Godziny otwarcia</h4>
      <b class="contactPage-openhours-mon-frd">poniedziałek-piątek:</b>
      <span class="contactPage-openhours-mon-frd-hours">od 7:00 do 17:00</span>
      <b class="contactPage-openhours-sunday">sobota:</b>
      <span class="contactPage-openhours-sunday-hours">od 7:00 do 14:00</span>
    </section>
    <section class="contactPage-openhours">
      <!--TODO: wstawić tutaj mapkę-->
      <h4 class="contactPage-openhours-header">Gdzie jesteśmy</h4>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "./../scss/base.scss";

.contactPage-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  padding: $BaseSectionPadding;
  background: $MainBackground;
}

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
section {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 1rem 0;
}
h4,
h3 {
  color: $SecondColor;
}
a {
  color: $AccentColor;
}
a:hover {
  color: darken($AccentColor, 10%);
}
</style>