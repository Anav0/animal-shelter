<template>
  <div class="modal-backdrop" @click="close">
    <div class="animated slideInDown">
      <slot></slot>
    </div>
    <button @click="close" class="modal-close round-button">X</button>
  </div>
</template>

<script>
export default {
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style lang="scss">
@import "./../scss/base.scss";

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-close {
  display: none;
  position: fixed;
  right: 0;
  top: 0;
  margin: 1rem;
}
@media (max-width: $tablet) {
  .modal-close {
    display: inline;
  }
}
</style>
