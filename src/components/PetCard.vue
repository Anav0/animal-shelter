<template>
  <div class="petCard-container white-box">
    <div class="petCard-image">
      <img :src="image">
    </div>
    <h5 class="petCard-name">{{this.pet.name}}</h5>
    <button @click="showDetails" class="petCard-button main-button">Więcej</button>

    <Modal @close="showDetails" v-if="showModal">
      <pet-details @click="showDetails" :pet="pet"></pet-details>
    </Modal>
  </div>
</template>

<script>
import PetDetails from "./../components/PetDetails";
import Modal from "./../components/Modal";

export default {
  components: {
    PetDetails,
    Modal
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
  },
  computed: {
    image() {
      if (!this.pet.image_small) return require("./../../public/pet_image.svg");
      else return this.pet.image_small;
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
}

.petCard-image {
  display: flex;
  flex-direction: column;

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

@media (min-width: $tablet) {
  .modal-close {
    display: none;
  }
}
</style>