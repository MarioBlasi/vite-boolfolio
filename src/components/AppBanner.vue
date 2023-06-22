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
    <div class="container text-center">
      <h5>
        <strong>{{ title }}</strong>
      </h5>
    </div>
  </div>
</template>

<style lang="scss"></style>
