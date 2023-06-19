<script>
export default {
  name: "AppHeader"
};
</script>

<template>
  <header class="bg-black pt-5">
    <nav class="">
      <div class="container-fluid nav justify-content-center p-2">
        <ul class="nav navbar-inverse">
          <li id="len1" class="hoverable" href="#">
            <router-link :to="{ name: 'home' }" href="/" aria-current="page"
              ><h5>Home</h5></router-link
            >
          </li>

          <li id="len3" class="hoverable" href="#">
            <router-link :to="{ name: 'about' }"><h5>About</h5></router-link>
          </li>

          <li id="len4" class="hoverable" href="#">
            <router-link :to="{ name: 'contacts' }"
              ><h5>Contacts</h5>
            </router-link>
            >
          </li>

          <li id="len2" class="hoverable" href="#">
            <router-link :to="{ name: 'resume' }"><h5>resume</h5> </router-link>
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style lang="scss">
.nav-link {
}
</style>
