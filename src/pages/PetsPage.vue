<template>
  <div class="petsPage-container">
    <h3>Nasi przyjaciele którzy szukają domu</h3>
    <paginate name="pets" :list="pets" :per="8">
      <div class="petsPage-pets-list">
        <PetCard class="petsPage-petCard" v-for="(pet,i) in paginated('pets')" :key="i" :pet="pet"></PetCard>
      </div>
    </paginate>
    <paginate-links for="pets"></paginate-links>
  </div>
</template>

<script>
import PetCard from "./../components/PetCard";
import axios from "axios";
import endpoints from "./../endpoints.js";
import * as unsplash from "./../unsplash.js";
export default {
  components: { PetCard },
  data() {
    return {
      pets: [],
      paginate: ["pets"]
    };
  },
  mounted() {
    axios
      .get(endpoints.pets)
      .then(response => {
        this.pets = response.data;

        unsplash.getImages("dog", 50).then(data => {
          var i = 0;
          this.pets.map(pet => {
            if (i > data.results.length - 1) i = 0;
            pet.image = data.results[i].urls.small;
            i++;
          });
        });
      })
      .catch(e => {
        // eslint-disable-next-line
        console.error(e);
      });
  }
};
</script>

<style lang="scss">
@import "./../scss/base.scss";
.petsPage-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-items: center;
  justify-content: center;
  min-height: 80vh;
  width: 100%;
  height: 100%;
  background: $MainBackground;
  padding: $BaseSectionPadding;
}
.petsPage-pets-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.petsPage-petCard {
  margin: 0.5rem;
}
.paginate-links {
  margin: 2rem;
}

.paginate-links li {
  @extend .round-button;
}
.paginate-links a {
  color: $SecondColor;
}
.paginate-links li.active {
  @extend .pressed;
}
h3 {
  margin: 2rem;
}
</style>