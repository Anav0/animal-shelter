<template>
  <section class="petsPageListing-container">
    <SelfBuildingSquareSpinner
      v-show="isLoading"
      :animation-duration="4000"
      :size="80"
      :color="'#f1cdb3'"
    />
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
  </section>
</template>

<script>
import * as endpoints from "./../api.js";
import PetCard from "./PetCard";
import { SelfBuildingSquareSpinner } from "epic-spinners";

export default {
  components: {
    PetCard,
    SelfBuildingSquareSpinner
  },
  mounted() {
    endpoints.getPets(10, this.display).then(data => {
      this.pets = data;
      this.isLoading = false;
    });
  },
  data() {
    return {
      pets: [],
      paginate: ["pets"],
      isLoading: true
    };
  },
  props: {
    display: {
      type: String,
      required: true
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
  justify-items: center;
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