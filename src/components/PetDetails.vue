<template>
  <div class="petDetails-container white-box">
    <button @click="close" class="round-button">X</button>
    <picture v-if="pet.image_small">
      <source :srcset="pet.image_small" media="(max-width: 768px)">
      <source :srcset="pet.image_regular" media="(min-width: 769px)">
      <source :srcset="pet.image_small" media="(min-width: 1024px)">
      <source :srcset="pet.image_small">
      <img alt="dog card image">
    </picture>
    <img alt="dog card image" v-else src="./../../public/pet_image.svg">
    <div class="petDetails-info-container">
      <div class="petDetails-info-name-gender">
        <h3>{{this.pet.name}}</h3>
        <fa-icon class="petDetails-gender-icon" :icon="pet.isMale ? 'mars':'venus'" size="2x"></fa-icon>
      </div>
      <h6>{{this.pet.race}}</h6>
      <p>{{this.pet.desc}}</p>
      <ul class="colored-list">
        <li>Wiek: {{this.age}}</li>
        <li>Zaszczepiony: {{this.pet.isVaccinated ? "Tak":"Nie"}}</li>
        <li>Odrobaczony: {{this.pet.isDeWormed ? "Tak":"Nie"}}</li>
        <li>Zaczipowany: {{this.pet.isChiped ? "Tak":"Nie"}}</li>
        <li v-show="pet.diseases">Choroby: {{this.pet.diseases}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  props: {
    pet: {
      type: Object,
      required: true
    }
  },
  methods: {
    close() {
      this.$emit("close");
    }
  },
  computed: {
    age() {
      const currentDate = moment();
      const formatedBirthDate = moment(this.pet.birth_date);
      const diffYears = currentDate.diff(formatedBirthDate, "years");
      if (diffYears < 1) {
        const diffMonths = currentDate.diff(formatedBirthDate, "months");
        if (diffMonths < 1) {
          return currentDate.diff(formatedBirthDate, "days") + " dni";
        } else return diffMonths + " miesiące";
      } else return diffYears + " lat";
    }
  }
};
</script>

<style scoped lang="scss">
@import "./../scss/base.scss";

.petDetails-container {
  display: grid;
  position: relative;

  grid-template-columns: 40% 60%;
  max-width: 800px;
  max-height: 80vh;

  margin: 2rem;
}
.petDetails-info-container {
  display: flex;
  flex-direction: column;
  grid-column: 2/3;
  padding: 1rem;
  overflow: auto;
}
.petDetails-info-name-gender {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.petDetails-gender-icon {
  margin: 0.5rem;
}

button {
  position: absolute;
  top: -35px;
  right: -35px;
}

img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  grid-column: 1/2;
}

ul {
  list-style-type: none;
  list-style-position: inside;
}
li {
  padding: 0;
  margin: 0.5rem 0;
}

h3,
h6,
ul {
  margin: 0;
  padding: 0 0.5rem;
}

p {
  padding: 0.75rem 0.5rem;
}

@media (max-width: $tablet) {
  .petDetails-container {
    grid-template-columns: 100%;
    grid-template-rows: 20rem auto;
    overflow: auto;
    max-width: 95vw;
    max-height: 80vh;
    margin: 1rem;
  }
  img {
    grid-row: 1;
    grid-column: 1;
  }
  .petDetails-info-container {
    grid-row: 2;
    grid-column: 1;
  }

  button {
    display: none;
  }
}
</style>