<template>
  <div class="petCard-container white-box">
    <div class="petCard-image">
      <img :src="pet.image">
    </div>
    <h5 class="petCard-name">{{this.pet.name}}</h5>
    <button @click="showDetails" class="petCard-button main-button">Więcej</button>

    <div class="modal" :class="{'is-active':showModal}">
      <div class="modal-background"></div>
      <div clas="modal-content">
        <pet-details @click="showDetails" :pet="pet"></pet-details>
      </div>
      <button @click="showDetails" class="modal-close is-large round-button" aria-label="Close"></button>
    </div>
  </div>
</template>

<script>
import PetDetails from "./../components/PetDetails";

export default {
  components: {
    PetDetails
  },
  data() {
    return {
      showModal: false
    };
  },
  props: {
    pet: {
      type: Object,
      required: true
    }
  },
  methods: {
    showDetails() {
      return (this.showModal = !this.showModal);
    }
  }
};
</script>

<style scoped lang="scss">
@import "./../scss/base.scss";

.petCard-container {
  display: grid;
  grid-template-rows: 60% 20% 20%;
  height: 450px;
  width: 300px;
  color: $SecondColor;
  overflow: hidden;
}

.petCard-image {
  grid-row: 1/2;
  grid-column: 1/2;
}
.petCard-image img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.petCard-name {
  grid-row: 2/3;
  grid-column: 1/2;
  align-self: center;
  justify-self: center;
  cursor: default;
}
.petCard-button {
  grid-row: 3/4;
  grid-column: 1/2;
  align-self: center;
  margin: 2rem;
}
.box {
  padding: 0;
}

@media (min-width: $tablet) {
  .modal-close {
    display: none;
  }
}
</style>