<script>
import axios from "axios";
import ProjectCard from "../components/ProjectCard.vue";
export default {
  name: "PostList",
  components: {
    ProjectCard
  },
  data() {
    return {
      base_url: "http://127.0.0.1:8000/",
      posts_API: "api/posts",
      loading: true,
      posts: null,
      error: null,
      max_text_lenght: 100,
      projects: []
    };
  },
  created() {
    fetch("http://127.0.0.1:8000/")
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
    /**
     *
     * @param {string} text
     */
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
  <main class="site-wrapper">
    <div class="pt-table">
      <div class="pt-tablecell page-welcome relative">
        <!-- .close -->
        <a href="./" class="page-close"><i class="tf-ion-close"></i></a>
        <!-- /.close -->

        <div class="author-image-large">
          <img src="images/author.png" alt="" />
        </div>

        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-md-6 col-lg-7">
              <div class="page-title">
                <h2>
                  Mario <span class="primary">Blasi</span>
                  <span class="title-bg">About</span>
                </h2>
                <p>
                  A product designer from England, who focuses on interactive
                  design & A freelance designer focusing on typography & clean
                  interfaces. Also works in dignissimos non quos Google..
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Maiores repellendus corporis, tenetur inventore perferendis
                  reprehenderit autem dignissimos non quos unde eveniet sapiente
                  necessitatibus consequuntur ea ab dolore.
                </p>
              </div>
            </div>
          </div>
          <!-- /.row -->
        </div>
        <!-- /.container -->

        <nav class="page-nav clear">
          <div class="container">
            <div class="flex flex-middle space-between">
              <span class="prev-page"
                ><a href="index.html" class="link">&larr; Prev Page</a></span
              >
              <span class="copyright"
                >Copyright &copy; 2021, Designed &amp; Developed by
                <a href="https://themefisher.com/">Themefisher</a>.</span
              >
              <span class="next-page"
                ><a href="about.html" class="link">Next Page &rarr;</a></span
              >
            </div>
          </div>
          <!-- /.page-nav -->
        </nav>
        <!-- /.container -->
      </div>
      <!-- /.pt-tablecell -->
    </div>
    <!-- /.pt-table -->
  </main>
  <!-- /.site-wrapper -->

  <section class="posts" v-if="posts && !loading">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
        <div
          class="col d-flex justify-content-center p-5"
          v-for="post in posts.data"
        >
          <div class="card h-100 shadow">
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
              <router-link
                class="nav-link"
                :to="{ name: 'single-post', params: { slug: post.slug } }"
                >Read more</router-link
              >
            </div>
            <div class="card-footer">
              <span class="badge bg-info">{{ post.id }}</span>
            </div>
          </div>
        </div>
      </div>

      <nav aria-label="Page navigation" class="py-4 text-center">
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
  </section>
  <div v-else>
    <section class="loading">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="card" aria-hidden="true">
              <img
                src="https://127.0.0.1:8000/edizioni.simone.it/wp-content/uploads/2022/04/diritto-del-lavoro-lanciano.png"
                class="card-img-top"
              />
              <div class="card-body">
                <h5 class="card-title placeholder-glow">
                  <span class="placeholder col-6"></span>
                </h5>
                <p class="card-text placeholder-glow">
                  <span class="placeholder col-7"></span>
                  <span class="placeholder col-4"></span>
                  <span class="placeholder col-4"></span>
                  <span class="placeholder col-6"></span>
                  <span class="placeholder col-8"></span>
                </p>
                <a
                  href="#"
                  class="btn btn-primary disabled placeholder col-6"
                ></a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" aria-hidden="true">
              <img
                src="https://127.0.0.1:8000/edizioni.simone.it/wp-content/uploads/2022/04/diritto-del-lavoro-lanciano.png"
                class="card-img-top"
              />
              <div class="card-body">
                <h5 class="card-title placeholder-glow">
                  <span class="placeholder col-6"></span>
                </h5>
                <p class="card-text placeholder-glow">
                  <span class="placeholder col-7"></span>
                  <span class="placeholder col-4"></span>
                  <span class="placeholder col-4"></span>
                  <span class="placeholder col-6"></span>
                  <span class="placeholder col-8"></span>
                </p>
                <a
                  href="#"
                  class="btn btn-primary disabled placeholder col-6"
                ></a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" aria-hidden="true">
              <img
                src="https://127.0.0.1:8000/edizioni.simone.it/wp-content/uploads/2022/04/diritto-del-lavoro-lanciano.png"
                class="card-img-top"
              />
              <div class="card-body">
                <h5 class="card-title placeholder-glow">
                  <span class="placeholder col-6"></span>
                </h5>
                <p class="card-text placeholder-glow">
                  <span class="placeholder col-7"></span>
                  <span class="placeholder col-4"></span>
                  <span class="placeholder col-4"></span>
                  <span class="placeholder col-6"></span>
                  <span class="placeholder col-8"></span>
                </p>
                <a
                  href="#"
                  class="btn btn-primary disabled placeholder col-6"
                ></a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" aria-hidden="true">
              <img
                src="https://127.0.0.1:8000/edizioni.simone.it/wp-content/uploads/2022/04/diritto-del-lavoro-lanciano.png"
                class="card-img-top"
              />
              <div class="card-body">
                <h5 class="card-title placeholder-glow">
                  <span class="placeholder col-6"></span>
                </h5>
                <p class="card-text placeholder-glow">
                  <span class="placeholder col-7"></span>
                  <span class="placeholder col-4"></span>
                  <span class="placeholder col-4"></span>
                  <span class="placeholder col-6"></span>
                  <span class="placeholder col-8"></span>
                </p>
                <a
                  href="#"
                  class="btn btn-primary disabled placeholder col-6"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <!-- ProjectCard.vue -->
  <div>
    <h2>Progetti</h2>
    <div v-for="project in projects" :key="project.id">
      <project-card :project="project" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
