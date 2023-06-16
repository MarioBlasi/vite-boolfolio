<script>
export default {
  name: "ProjectCard",
  props: {
    project: {
      type: Object,
      required: true
    }
  }
};
</script>

<template>
  <div class="project-card shadow">
    <h3>{{ project.title }}</h3>
    <p>{{ project.description }}</p>
    <p>{{ project.author }}</p>
  </div>
</template>

<style lang="scss" scoped></style>
