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
import endpoints from "./../endpoints.js";
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
      axios
        .get(endpoints.pets)
        .then(response => {
          this.pets = response.data;

          unsplash.getImages("dog", 30).then(data => {
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
    },
    fetchCats() {
      axios
        .get(endpoints.pets)
        .then(response => {
          this.pets = response.data;

          unsplash.getImages("cat", 30).then(data => {
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
</style>