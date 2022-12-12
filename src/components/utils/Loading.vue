<template>
  <div class="spinner-container" v-if="isLoading">
    <div class="spinner" />
  </div>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 240px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.spinner {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 5px solid $color-light-grey;
  border-bottom: 5px solid $color-primary;
  position: relative;
  @include spinner;
}
</style>
