<template>
  <div class="petDetails-container white-box">
    <button @click="closeModal" class="round-button">X</button>
    <img :src="pet.image">
    <div class="petDetails-info-container">
      <div class="petDetails-info-name-gender">
        <h3>{{this.pet.name}}</h3>
        <fa-icon class="petDetails-gender-icon" :icon="pet.isMale ? 'mars':'venus'" size="2x"></fa-icon>
      </div>
      <h6>{{this.pet.race}}</h6>
      <p>{{this.pet.desc}}</p>
      <ul>
        <li>Wiek: {{this.pet.age}}</li>
        <li>Zaszczepiony: {{this.pet.isVaccinated ? "Tak":"Nie"}}</li>
        <li>Odrobaczony: {{this.pet.isDeWormed ? "Tak":"Nie"}}</li>
        <li>Zaczipowany: {{this.pet.isChiped ? "Tak":"Nie"}}</li>
        <li>Choroby: {{this.pet.diseases}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pet: {
      type: Object,
      required: true
    }
  },
  methods: {
    closeModal() {
      this.$emit("click");
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
  max-width: 90vh;
  max-height: 90vh;
  margin: 0;
  padding: 0;
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
  top: -8%;
  left: 100%;
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
ul li::before {
  content: "\2022";
  color: $AccentColor;
  font-weight: bold;
  display: inline-block;
  width: 1em;
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
    grid-template-rows: 1fr 1fr;

    max-width: 100vh;
    max-height: 80vh;
    margin: 1rem;
  }
  .petDetails-info-container {
    grid-row: 2/3;
    grid-column: 1/2;
  }
  img {
    grid-row: 1/2;
    grid-column: 1/2;
  }
  button {
    display: none;
  }
}
</style>