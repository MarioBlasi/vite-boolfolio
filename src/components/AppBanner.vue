<script>
export default {
  name: "AppBanner",
  props: {
    title: String
  }
};
</script>

<template>
  <div class="bg-dark py-5 text-white">
    <div class="container">
      <h1>{{ title }}</h1>
    </div>
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
