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
  methods: {},
  mounted() {
    const url = (this.base_API = "api/posts/" + this.$route.params.slug);
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
  <AppBanner :title="$route.params.slug"> </AppBanner>

  <div v-if="'post'">
    {{ post.title }}
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
