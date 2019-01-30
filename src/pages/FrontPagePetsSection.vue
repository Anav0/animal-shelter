<template>
  <div class="petsSection-container">
    <h3 class="petsSection-header">Niektórzy z naszych przyjaciół poszukujących domu</h3>
    <div class="petsSection-example-dogs">
      <PetCard class="petsSection-dog" v-for="(pet, i) in pets" :pet="pet" :key="i"></PetCard>
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
          race: "York Shire Terrier",
          name: "Ciapuś",
          desc:
            "ciapuś to radosne zwierze, kiedyś usiadł na oset i go bolało. Płakał.",
          image:
            "https://images.unsplash.com/photo-1529429617124-95b109e86bb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
          isMale: true,
          age: "13 lat",
          isVaccinated: true,
          isDeWormed: false,
          isChiped: false,
          diseases:
            "Ma problem z biodrem przez co czasami biega na trzech łapkach"
        },
        {
          race: "Pug",
          desc: "Gryzie inne pieski",
          isMale: true,
          age: "8 lat",
          isVaccinated: true,
          isDeWormed: true,
          isChiped: false,

          name: "Bucket",
          image:
            "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
          diseases: "Brak"
        },
        {
          race: "nieznana",
          desc: "Uwielbia siedzieć na kanapie i wygrzewać swoją pupcię",
          isMale: false,
          age: "4 lat",
          isVaccinated: true,
          isDeWormed: true,
          isChiped: false,
          name: "Pupson",
          diseases: "Brak",
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