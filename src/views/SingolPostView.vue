<script>
import axios from "axios";
import AppBanner from "../components/AppBanner.vue";
export default {
  name: "SingolPostView",
  components: {
    AppBanner
  },
  data() {
    return {
      post: null,
      loading: true,
      base_API: "http://127.0.0.1:8000/"
    };
  },
  methods: {
    getImageFromPath(path) {
      return this.base_url + "storage/" + path;
    }
  },
  mounted() {
    const url = (this.base_url = "api/posts/" + this.$route.params.slug);
    console.log(url);
    axios
      .get(url)
      .then((response) => {
        console.log(response);
        if (response.succes) {
          this.post = response.data.result;
        } else {
          // redirect to a 404
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
</script>

<template>
  <AppBanner :title="post.title" v-if="post"> </AppBanner>

  <div v-if="post">
    <div>
      <img
        class="img-fluid w-100"
        :src="getImageFromPath(post.cover_image)"
        alt=""
      />
    </div>
    <div class="container">
      <div class="metadata">
        <div class="author"><strong>Author:</strong>{{ post.user.name }}</div>
        <div class="category">
          <strong>Category: </strong>
          <span v-if="post.category">{{ post.category?.name }}</span>
          <span v-else>N/A</span>
        </div>
        <div class="technology">
          <ul v-if="post.technologies.lenght > 0">
            <li v-for="technology in post.technologies">
              {{ technology.name }}
            </li>
          </ul>
          <span v-else>N/A</span>
        </div>
      </div>
      <p>
        {{ post.content }}
      </p>
    </div>
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
