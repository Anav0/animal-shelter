<template>
  <div class="frontPage-container">
    <!--Adopt section-->
    <section class="frontPage-adopt fullscreen">
      <h3>Nie tylko ludzie potrzebują domu</h3>
      <p>
        Miejskie Schronisko dla bezdomnych zwierząt w Katowicach umiejscowione jest z dala od zamieszkałej części Dąbrówki Małej.
        Otoczone zielenią wtapia się w krajobraz na obrzeżach, z dala od zgiełku wielkiego miasta. Zwierzęta mają tu ciszę i spokój.
      </p>
      <router-link
        tag="button"
        class="frontPage-adopt-button full-button"
        to="/pets"
      >Adoptuj przyjaciela</router-link>
    </section>
    <!--About section-->
    <section class="frontPage-about fullscreen" data-aos="fade-up" data-aos-duration="1000">
      <img class="frontPage-about-dogs" src="./../assets/dogs-three.png">
      <div class="frontPage-about-text">
        <h3>O naszym schronisku</h3>
        <p>
          Schronisko jest całkowicie finansowane przez katowicki Urząd Miasta, a administratorem jest firma CIVITAS, która wykonuje zlecenie w ramach przetargu.
          Pierwsi mieszkańcy znaleźli tu schronienie pod koniec lat 80-tych, kiedy schronisko zostało oddane do użytku.
          Wiele zmieniło się od tamtej chwili. Przybyło zwierząt, zmienili się opiekunowie...
          Dziś w schronisku dach nad głową ma około 150 psów i 70 kotów.
          Nieustannie staramy się polepszać ich byt.
          Koty rezydują w kociarni z dostępem do wybiegu. Szczeniaki mają namiastkę domu w szczeniarni, a dorosłe psy przebywają w dwóch pawilonach z dostępem do wybiegów.
        </p>
      </div>
    </section>

    <section class="frontPage-pets">
      <FrontPagePetsSection></FrontPagePetsSection>
    </section>

    <!--How can you help-->
    <section class="frontPage-help">
      <h3>Jak możesz nam pomóc</h3>
      <div class="frontPage-help-icons">
        <IconAndText
          class="frontPage-help-icon"
          orientation="column"
          iconSize="3x"
          icon="syringe"
          text="Leki"
        ></IconAndText>
        <IconAndText
          class="frontPage-help-icon"
          orientation="column"
          iconSize="3x"
          icon="hands-helping"
          text="wolontariat"
        ></IconAndText>
        <IconAndText
          class="frontPage-help-icon"
          orientation="column"
          iconSize="3x"
          icon="baseball-ball"
          text="zabawki"
        ></IconAndText>
        <IconAndText
          class="frontPage-help-icon"
          orientation="column"
          iconSize="3x"
          icon="pills"
          text="witaminy"
        ></IconAndText>
        <IconAndText
          class="frontPage-help-icon"
          orientation="column"
          iconSize="3x"
          icon="bone"
          text="Pokarm"
        ></IconAndText>
      </div>
    </section>
  </div>
</template>

<script>
import IconAndText from "./../components/IconAndText";
import FrontPagePetsSection from "./FrontPagePetsSection";
import "aos/dist/aos.css";

export default {
  components: {
    IconAndText,
    FrontPagePetsSection
  }
};
</script>

<style scoped lang="scss">
@import "./../scss/base.scss";
.frontPage-container {
  width: 100%;
  height: 100%;
}
section {
  color: $SecondColor;
  padding: $BaseSectionPadding;
  margin: 0;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
}
h3,
p,
.frontPage-adopt-button {
  margin: 0.5rem;
}

.frontPage-adopt {
  max-width: 45rem;
  color: $Color;
}

.frontPage-about {
  background: $MainBackground;
  max-height: 100%;
}
.frontPage-about-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: left;
  align-self: center;
}
//TODO: change picture becouse it is not centered
.frontPage-about-dogs {
  align-self: center;
  justify-content: center;
}
.frontPage-help {
  background: $MainBackground;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.frontPage-help-icons {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-evenly;
}
.frontPage-help-icon {
  padding: 2rem;
  width: 8rem;
  height: 8rem;
}

.frontPage-pets {
  background: $SecondBackground;
}
@media (max-width: $tablet) {
  section {
    margin: 0;
    padding: 0.5rem;
  }
  .frontPage-about {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto auto;
  }
  .frontPage-about-text {
    grid-column: 1;
    grid-row: 2;
  }
  .frontPage-about-dogs {
    grid-column: 1;
    grid-row: 1;
  }
}
@media (min-width: $desktop) {
  .frontPage-about {
    display: grid;
    grid-template-columns: 60% auto;
    grid-template-rows: auto;
  }

  .frontPage-about-text {
    grid-column: 2;
    grid-row: 1;
  }
  .frontPage-about-dogs {
    grid-column: 1;
    grid-row: 1;
  }
}
</style>