<template>
  <article class="page">
    <h3>Wolontariat</h3>
    <section>
      <p>
        Wolontariat w Miejskim Schronisku dla Bezdomnych Zwierząt w Katowicach zaczął działać w październiku 2009 roku, dzięki staraniom Fundacji S.O.S. dla Zwierząt. Obecnie kontynuowany jest przez Fundację
        <a
          href="http://www.przystanekschronisko.org/"
        >Przystanek Schronisko</a>, która powstała by objąć opieką zwierzęta przebywające w schronisku w Katowicach.
      </p>
    </section>
    <section>
      <h4>Kiedy wolontariusze przyjeżdżają do schroniska?</h4>
      <p>
        Wolontariusze spotykają się w schronisku 2 razy w tygodniu
        (każdy przyjeżdża wtedy kiedy może)
      </p>
      <div class="contactPage-openhours">
        <b class="contactPage-openhours-mon-frd">czwartki:</b>
        <span class="contactPage-openhours-mon-frd-hours">od 16:00 do 18:00</span>
        <b class="contactPage-openhours-sunday">soboty:</b>
        <span class="contactPage-openhours-sunday-hours">od 9:30 do 14:00</span>
      </div>
    </section>
    <section>
      <h4>Kto może zostać wolontariuszem?</h4>
      <p>Wolontariuszem może zostać każda osoba mająca ukończone 18 lat.</p>
    </section>
    <section>
      <h4>Jakie są obowiązki wolontariusza?</h4>
      <ul>
        <li>Socjalizacją zwierząt w schronisku</li>
        <li>Ich pielęgnacją (m.in. czesanie, obcinanie pazurków)</li>
        <li>Szkoleniem (nauka nowych komend, chodzenia na smyczy i poprawnego zachowania)</li>
        <li>Szukaniem domu zwierzętom (zamieszczanie ogłoszeń w Internecie, projektowanie, drukowanie i rozwieszanie plakatów)</li>
        <li>Dokumentowaniem bieżących informacji o zwierzęciu (tworzenie i uaktualnianie jego opisu oraz robienie zdjęć)</li>
      </ul>
      <p>Dodatkowo wolontariusze uczestniczą w akcjach organizowanych przez Fundację oraz zobowiązani są brać udział w szkoleniach, które mają na celu edukację młodzieży w zakresie opieki nad zwierzętami. Niepełnoletni wolontariusze w czasie trwania zajęć ze zwierzętami mogą opuścić teren schroniska tylko i wyłącznie pod opieką pełnoletniego wolontariusza zgłaszając to uprzednio koordynatorowi.</p>
    </section>
    <section>
      <h4>Jak wygląda praca wolontariusza poza schroniskiem?</h4>
      <p>Wolontariusze, którym czas nie pozwala na pracę ze zwierzętami na terenie schroniska, mogą:</p>
      <ul>
        <li>Pracować na rzecz naszych psów i kotów w domu, robiąc dla nich ogłoszenia w Internecie i zakładając wątki na forum, aby zwiększyć ich szanse na adopcję,</li>
        <li>Pomagać w transporcie lub w jego znalezieniu,</li>
        <li>Uczestniczyć w akcjach adopcyjnych – kwestowaniu na rzecz zwierząt znajdujących się w schronisku.</li>
      </ul>
    </section>
    <section>
      <h4>Jeśli chcesz zostać wolontariuszem</h4>
      <p>Osoby zainteresowane wolontariatem proszone są o kontakt z koordynatorem wolontariatu w godzinach od 18:00 do 19:30.</p>
      <!-- TODO: Create user cards for this two people -->
      <ul>
        <li>Psy – Anna Hyrnik, tel. 514 324 200.</li>
        <li>Koty – Iwona Cięciwa, tel. 889 771 107.</li>
      </ul>
    </section>
    <section>
      <h4>Dokumenty do pobrania</h4>
      <a href="http://przystanekschronisko.org/i/dokumenty/Kwestionariusz.pdf">Kwestionariusz</a>
      <a
        href="http://przystanekschronisko.org/i/dokumenty/Zgoda%20Opiekunw%20Prawnych.pdf"
      >Zgoda opiekunów prawnych dla osób niepełnoletnich</a>
      <a
        href="http://przystanekschronisko.org/i/dokumenty/REGULAMIN%20WOLONTARIUSZA%20-%20popr.pdf"
      >Regulamin wolontariusza</a>
    </section>
  </article>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "./../scss/base.scss";
span,
b {
  padding: 0.25rem;
}
.contactPage-openhours {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto;

  justify-content: flex-start;
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
</style>