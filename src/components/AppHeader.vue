<script>
export default {
  name: "AppHeader"
};
</script>

<template>
  <header class="shadow-3">
    <nav class="nav justify-content-center">
      <router-link
        class="nav-link"
        :to="{ name: 'home' }"
        href="/"
        aria-current="page"
        >Home</router-link
      >
      <router-link class="nav-link" :to="{ name: 'about' }">About</router-link>
      <router-link class="nav-link" :to="{ name: 'contacts' }"
        >Contacts</router-link
      >
    </nav>
  </header>
  <ul class="nav justify-content-center">
    <li class="nav-item">
      <a class="nav-link active" href="#" aria-current="page">Active link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#">Disabled link</a>
    </li>
  </ul>
  <!-- <router-view></router-view> -->
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
