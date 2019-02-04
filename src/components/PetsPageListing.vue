<template>
  <div class="petsPageListing-container">
    <paginate name="pets" :list="pets" :per="8">
      <div class="petsPageListing-list">
        <PetCard
          class="petsPageListing-petCard"
          v-for="(pet,i) in paginated('pets')"
          :key="i"
          :pet="pet"
        ></PetCard>
      </div>
    </paginate>
    <paginate-links for="pets"></paginate-links>
  </div>
</template>

<script>
import axios from "axios";
import * as endpoints from "./../endpoints.js";
import * as unsplash from "./../unsplash.js";
import PetCard from "./PetCard";

export default {
  components: {
    PetCard
  },
  mounted() {
    if (this.display == "cats") this.fetchCats();
    else if (this.display == "dogs") this.fetchDogs();
  },
  data() {
    return {
      pets: [],
      paginate: ["pets"]
    };
  },
  props: {
    display: {
      type: String,
      required: true
    }
  },
  methods: {
    fetchDogs() {
      endpoints.fetchPets(10, "dog").then(data => {
        this.pets = data;
      });
    },
    fetchCats() {
      endpoints.fetchPets(10, "cat").then(data => {
        this.pets = data;
      });
    }
  }
};
</script>

<style lang="scss">
@import "./../scss/base.scss";

.petsPageListing-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.petsPageListing-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.petsPageListing-petCard {
  margin: 0.5rem;
}
.paginate-links {
  margin: 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  list-style: none;
}

.paginate-links li {
  @extend .round-button;
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0.5rem;
}
.paginate-links li a {
  color: $SecondColor;
}
.paginate-links li.active {
  @extend .pressed;

  color: white;
}
</style>