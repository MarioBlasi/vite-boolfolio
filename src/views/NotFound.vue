<script>
import AppBanner from "../components/AppBanner.vue";

export default {
  name: "NotFound",
  components: { AppBanner }
};
</script>
<template>
  <div>
    <h1>NOT FOUND</h1>
    <route-link :to="{ name: 'home' }">COME BACK -> </route-link>
  </div>
</template>

<style lang="sass" scoped></style>
