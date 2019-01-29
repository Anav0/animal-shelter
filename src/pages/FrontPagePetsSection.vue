<template>
  <div class="petsSection-container">
    <h3>Nasi przyjaciele poszukują domu</h3>
    <PetCard
      name="Ciapuś"
      image="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
    ></PetCard>
  </div>
</template>

<script>
import PetCard from "./../components/PetCard";
export default {
  components: {
    PetCard
  }
};
</script>

<style scoped>
.petsSection-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>