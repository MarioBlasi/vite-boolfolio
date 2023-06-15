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

    <nav class="navbar navbar-expand navbar-light bg-light">
      <ul class="nav navbar-nav">
        <li>
          <router-link
            class="nav-link"
            :to="{ name: 'home' }"
            aria-current="page"
            >Home</router-link
          >
        </li>
        <a class="nav-item" href="#">nav n 2</a>
      </ul>
    </nav>
  </header>

  <!-- <router-view></router-view> -->
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
