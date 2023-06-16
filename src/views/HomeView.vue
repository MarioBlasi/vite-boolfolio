<script>
import AppBanner from "../components/AppBanner.vue";
import PostList from "../components/PostList.vue";

export default {
  name: "HomeView",
  components: { AppBanner, PostList }
};
</script>
<template>
  <AppBanner title="Home Page"></AppBanner>
  <PostList></PostList>
</template>

<style lang="sass" scoped></style>
