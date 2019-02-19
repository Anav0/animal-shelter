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

    <!--Example dogs-->
    <section class="frontPage-pets">
      <div class="petsSection-container">
        <h3 class="petsSection-header">Niektórzy z naszych przyjaciół poszukujących domu</h3>
        <div class="petsSection-example-dogs">
          <PetCard class="petsSection-dog" v-for="(pet, i) in pets" :pet="pet" :key="i"></PetCard>
        </div>
        <router-link tag="button" to="/pets" class="full-button">Poznaj resztę</router-link>
      </div>
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
import "aos/dist/aos.css";
import PetCard from "./../components/PetCard";
import * as endpoints from "./../api.js";

export default {
  data() {
    return {
      pets: []
    };
  },
  mounted() {
    endpoints.getPets(3, "dog").then(response => {
      this.pets = response;
    });
  },
  components: {
    IconAndText,
    PetCard
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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}
.frontPage-about-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: left;
  align-self: center;
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

  .petsSection-dog {
    margin: 2rem 0;
  }
}

.petsSection-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 100%;
}
.petsSection-header {
  align-self: center;
  text-align: center;
}
.petsSection-example-dogs {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
}
.petsSection-dog {
  margin: 2rem;
}
button {
  margin: 2rem;
}
</style>