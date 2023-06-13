<script>
import { onMounted } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import axios from "axios";

export default {
  components: {
    HelloWorld
  },
  data() {
    return {
      base_API: "http://127.0.0.1:8000/",
      posts_path: "api/posts",
      loading: true,
      posts: null,
      error: null
    };
  },
  methods: {
    getPosts(url) {
      axios
        .get(url)
        .then((response) => {
          // Gestisci la risposta
          console.log(response.data);
          this.posts = response.data.posts;
          this.loading = false;
        })
        .catch((error) => {
          // Gestisci l'errore
          console.error(error);
          this.error = error.message;
        });
    }
  },

  mounted() {
    const url = this.base_API + this.posts_path;
    this.getPosts(url);
  }
};
</script>

<template>
  <div class="posts">
    <div class="container">
      <div class="row">
        <div class="col d-flex justify-content-center p-5 shadow">
          <div class="card shadow">
            <h1>FrontEND-4</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss";

.vue-home {
  color: #2c3e50;
  background: #181818;
  transition: color 0.5s, background-color 0.5s;
  line-height: 1.6;
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-size: 15px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
