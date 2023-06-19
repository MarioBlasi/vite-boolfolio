<script>
export default {
  name: "AppHeader"
};
</script>

<template>
  <header class="shadow-3 bg-black">
    <nav class="">
      <div class="container-fluid nav justify-content-center p-3">
        <ul class="nav navbar-inverse">
          <li>
            <a id="len1" class="hoverable" href="#"
              ><router-link
                class="nav-link"
                :to="{ name: 'home' }"
                href="/"
                aria-current="page"
                ><h3>Home</h3></router-link
              ></a
            >
          </li>

          <li>
            <a id="len3" class="hoverable" href="#"
              ><router-link class="nav-link" :to="{ name: 'about' }"
                ><h3>About</h3></router-link
              ></a
            >
          </li>
          <li>
            <a id="len4" class="hoverable" href="#">
              <router-link class="nav-link" :to="{ name: 'contacts' }"
                ><h3>Contacts</h3>
              </router-link></a
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style lang="scss"></style>
