<script>
import AppHeader from "./components/AppHeader.vue";
export default {
  components: {
    AppHeader
  }
};
</script>

<template>
  <app-header> </app-header>
  <router-view></router-view>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
