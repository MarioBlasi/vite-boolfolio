<script>
import AppBanner from "../components/AppBanner.vue";

export default {
  name: "NotFoundView",
  components: { AppBanner }
};
</script>

<template>
  <div>
    <h1>NOT FOUND</h1>
    <router-link :to="{ name: 'home' }">COME BACK -> </router-link>
  </div>
</template>

<style lang="sass" scoped></style>
