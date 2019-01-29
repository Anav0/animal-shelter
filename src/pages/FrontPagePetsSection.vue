<template>
  <div class="petsSection-container">
    <h3 class="petsSection-header">Niektórzy nasi przyjaciele poszukują domu</h3>
    <div class="petsSection-example-dogs">
      <PetCard
        class="petsSection-dog"
        v-for="(pet, i) in pets"
        :name="pet.name"
        :image="pet.image"
        :key="i"
      ></PetCard>
    </div>
    <button class="full-button">Poznaj resztę</button>
  </div>
</template>

<script>
import PetCard from "./../components/PetCard";
export default {
  components: { PetCard },
  data() {
    return {
      pets: [
        {
          name: "Ciapuś",
          image:
            "https://images.unsplash.com/photo-1529429617124-95b109e86bb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
        },
        {
          name: "Bucket",
          image:
            "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
        },
        {
          name: "Pupson",
          image:
            "https://images.unsplash.com/photo-1532753876631-2d5cf129df39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
@import "./../scss/base.scss";

.petsSection-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
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