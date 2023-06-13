<script>
import axios from "axios";

export default {
  components: {},
  data() {
    return {
      base_url: "http://127.0.0.1:8000/",
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
    const url = this.base_url + this.posts_api;
    this.getPosts(url);
  }
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="p-5 mb-4 bg-light rounded-3 shadow">
          <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold text-success">FrontEND-4</h1>
            <p class="col-md-8 fs-4">
              Using a series of utilities, you can create this jumbotron, just
              like the one in previous versions of Bootstrap. Check out the
              examples below for how you can remix and restyle it to your
              liking.
            </p>
            <button class="btn btn-danger btn-lg" type="button">
              Example button
            </button>
          </div>
        </div>

        <div class="posts">
          <div class="container">
            <div
              class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4"
            >
              <div
                class="col d-flex justify-content-center p-5"
                v-for="post in posts"
                :key="post.id"
              >
                <div class="card shadow">
                  <img
                    class="card-img-top"
                    :src="getImagefromPath(post.cover_image)"
                    alt=""
                  />
                  <div class="card-body">
                    <h2>
                      {{ post.title }}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
