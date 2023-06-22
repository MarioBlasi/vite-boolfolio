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
    <div class="container pt-5">
      <div class="row mt-5 page-welcome relative">
        <!-- .close -->
        <a href="./" class="page-close"><i class="tf-ion-close"></i></a>
        <!-- /.close -->

        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6 col-lg-5 mx-5">
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
            <div class="col-12 col-md-6 col-lg-5 mx-5">
              <img
                class="img-fluid h-50"
                src="https://media.licdn.com/dms/image/D4E03AQGqEltXtQwLJA/profile-displayphoto-shrink_800_800/0/1687375093219?e=1692835200&v=beta&t=96ZMiTGFp8WkmSUzK1oWrrgZKG6GdzbCe3omEyu8Wio"
                alt=""
              />
            </div>
          </div>
          <!-- /.row -->
        </div>

        <!-- /.container -->
      </div>
      <!-- /.pt-tablecell -->
    </div>
    <!-- /.pt-table -->
  </main>
  <!-- /.site-wrapper -->
  <div class="container box">
    <section class="posts" v-if="posts && !loading">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="card-deck">
              <div class="card" v-for="post in posts.data" :key="post.id">
                <div class="row p-3">
                  <div class="col-md-6">
                    <div class="zoom-effect">
                      <img
                        class="card-img-top shadow zoomable-image"
                        :src="getImageFromPath(post.cover_image)"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="col-md-6 d-flex flex-column">
                    <div class="card-body">
                      <h2 class="card-title">
                        <strong>{{ post.title }}</strong>
                      </h2>
                      <p class="card-text">
                        {{ truncateText(post.content) }}
                      </p>
                      <router-link
                        class="nav-link"
                        :to="{
                          name: 'single-post',
                          params: { slug: post.slug }
                        }"
                        ><strong>Leggi di più</strong></router-link
                      >
                    </div>
                    <div class="mt-auto card-footer">
                      <span class="badge bg-danger">{{ post.id }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div aria-label="Page navigation" class="py-4 text-center">
          <ul class="pagination">
            <li class="page-item">
              <button
                class="page-link mb-5"
                aria-label="Prev"
                v-if="posts.prev_page_url"
                @click="prevPage(posts.prev_page_url)"
              >
                <span aria-hidden="true" class="h-25">&#129194;</span>
              </button>
            </li>
            <li class="page-item mb-5">
              <button
                class="page-link"
                aria-label="Next"
                v-if="posts.next_page_url"
                @click="nextPage(posts.next_page_url)"
              >
                <span aria-hidden="true" class="h-25">&#129195;</span>
              </button>
            </li>
          </ul>
        </div>
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
  </div>
  <!-- ProjectCard.vue -->
  <div>
    <div v-for="project in projects" :key="project.id">
      <project-card :project="project" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
main {
  background-color: rgba(48, 48, 56, 0.116);
  margin-bottom: 5rem;
}

.zoomable-image {
  transition: transform 0.8s ease-in-out;
}

.zoomable-image:hover {
  transform: scale(0.8);
}
</style>
