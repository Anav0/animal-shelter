<template>
  <div class="iconAndText-container" :class="orientationClass">
    <fa-icon class="iconAndText-icon" :size="iconSize" :icon="icon"></fa-icon>
    <div>{{text}}</div>
  </div>
</template>

<script>
export default {
  props: {
    orientation: {
      type: String,
      default: "row"
    },
    iconSize: String,
    icon: String,
    text: String
  },
  computed: {
    orientationClass() {
      if (this.orientation === "row") {
        return "IsHorizontal";
      } else {
        return "IsVertical";
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "./../scss/base.scss";

.iconAndText-container {
  display: flex;
  align-items: center;
  justify-content: center;
  color: $SecondColor;
}
.iconAndText-icon {
  margin: 0.5rem;
  color: $AccentColor;
}
.IsVertical {
  flex-direction: column;
}
.IsHorizontal {
  flex-direction: row;
}
</style>