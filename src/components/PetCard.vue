<template>
  <div class="petCard-container white-box">
    <div class="petCard-image">
      <img :src="image">
    </div>
    <h5 class="petCard-name">{{this.name}}</h5>
    <button class="petCard-button main-button">Więcej</button>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    image: {
      type: String,
      //TODO: change this tmp doggo image
      default:
        "https://img3.androidappsapk.co/300/d/b/2/com.doggomoji.doggojumpo.png"
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
  max-height: 100%;
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
</style>