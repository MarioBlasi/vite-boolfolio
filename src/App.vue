<script>
import axios from "axios";
import ProjectCard from "./components/ProjectCard.vue";
export default {
  components: { ProjectCard },
  data() {
    return {
      base_url: "http://127.0.0.1:8000/",
      posts_API: "api/posts",
      loading: true,
      posts: null,
      error: null,
      projects: []
    };
  },
  created() {
    // Effettua la chiamata all'API per ottenere i dati dei progetti
    // e assegna i dati ricevuti all'array "projects"
    // Esempio:
    fetch("https://api.example.com/projects")
      .then((response) => response.json())
      .then((data) => {
        this.projects = data;
      })
      .catch((error) => {
        console.error("Errore durante la richiesta API:", error);
      });
  },
  methods: {
    getPosts(url) {
      axios
        .get(url)
        .then((response) => {
          this.posts = response.data.posts;
          this.loading = false;
        })
        .catch((error) => {
          this.error = error.message;
        });
    },
    getImageFromPath(path) {
      return this.base_url + "storage/" + path;
    },
    prevPage(path) {
      this.getPosts(path);
    },
    nextPage(path) {
      this.getPosts(path);
    },
    truncateText(text) {
      if (text.lenght > this.max_text_lenght) {
        return text.slice(0, this.max_text_lenght) + "...";
      }
      return text;
    }
  },
  mounted() {
    const url = this.base_url + this.posts_API;
    this.getPosts(url);
  }
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col pt-5">
        <div class="p-5 mb-4 bg-light rounded-3 shadow">
          <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold text-success">FrontEND-3</h1>
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
      </div>
    </div>
  </div>

  <div class="posts">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
        <div
          class="col d-flex justify-content-center p-5"
          v-for="post in posts.data"
        >
          <div class="card shadow">
            <img
              class="card-img-top"
              :src="getImageFromPath(post.cover_image)"
              alt=""
            />
            <div class="card-body">
              <h2>
                {{ post.title }}
              </h2>
              <p>
                {{ truncateText(post.content) }}
              </p>
              <!-- post.title -->
            </div>
            <div class="card-footer">
              <span class="badge bg-info">{{ post.id }}</span>
            </div>
            <!-- post.di -->
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container" v-if="posts">
    <nav aria-label="Page navigation">
      <ul class="pagination">
        <li class="page-item">
          <button
            class="page-link"
            aria-label="Previous"
            v-if="posts.prev_page_url"
            @click="prevPage(posts.prev_page_url)"
          >
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>
        <li class="page-item">
          <button
            class="page-link"
            aria-label="Next"
            v-if="posts.next_page_url"
            @click="nextPage(posts.next_page_url)"
          >
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  </div>
  <!-- ProjectCard.vue -->
  <div>
    <h2>Progetti</h2>
    <div v-for="project in projects" :key="project.id">
      <project-card :project="project" />
    </div>
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
