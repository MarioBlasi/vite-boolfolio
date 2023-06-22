<script>
import AppBanner from "../components/AppBanner.vue";
import axios from "axios";
export default {
  name: "SinglePostView",
  components: {
    AppBanner
  },
  data() {
    return {
      post: null,
      loading: true,
      base_url: "http://127.0.0.1:8000/"
    };
  },
  methods: {
    getImageFromPath(path) {
      //console.log(this.base_url + 'storage/' + path);
      return this.base_url + "storage/" + path;
    }
  },
  mounted() {
    const url = this.base_url + "api/posts/" + this.$route.params.slug;
    console.log(url);
    axios
      .get(url)
      .then((response) => {
        console.log(response);
        if (response.data.success) {
          this.post = response.data.result;
        } else {
          this.$router.push({
            name: "NotFound"
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
</script>

<template>
  <AppBanner :title="post.title" v-if="post"></AppBanner>
  <div class="container-flex p-5">
    <div class="row">
      <div class="col-12">
        <div v-if="post">
          <!--  <img class="img-fluid w-100" :src="getImageFromPath(post.cover_image)" alt=""> -->
          <div
            class="jumbotron p-5 mb-4 bg-light rounded-3"
            :style="{
              backgroundImage: `url(${getImageFromPath(post.cover_image)})`
            }"
          >
            <div class="container"></div>
          </div>
          <div class="container">
            <div class="content">
              <p>
                {{ post.content }}
              </p>
            </div>

            <hr />

            <div class="metadata">
              <div class="author">
                <strong>Author: </strong>{{ post.user.name }}
              </div>
              <div class="category">
                <strong>Category: </strong>
                <span v-if="post.category">{{ post.category.name }}</span>
                <span v-else> N/A </span>
              </div>
              <div class="tags">
                <strong>Tags: </strong>
                <ul v-if="post.tags.lenght > 0">
                  <li v-for="tag in post.tags">
                    {{ tag.name }}
                  </li>
                </ul>
                <span v-else>N/A</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.jumbotron {
  height: 600px;

  transition: transform 1.2s ease-in-out;
}

.jumbotron:hover {
  transform: scale(0.7);
}
</style>
