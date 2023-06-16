<script>
import AppBanner from "../components/AppBanner.vue";

export default {
  name: "AboutView",
  components: { AppBanner }
};
</script>
<template>
  <AppBanner title="About Page"></AppBanner>
  <section class="bio py-5">
    <div class="container">
      <div class="row">
        <div class="col">
          <img
            class="img-fluid"
            src="https://fastly.picsum.photos/id/5/5000/3334.jpg?hmac=R_jZuyT1jbcfBlpKFxAb0Q3lof9oJ0kREaxsYV3MgCc"
            alt=""
          />
        </div>
        <div class="col">
          <h4>Fabio</h4>
          <p class="lead">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
            vitae iste neque ducimus fuga porro distinctio alias, unde quos
            doloribus. Vitae dolor, cupiditate minus necessitatibus facere
            delectus deserunt dolore veniam.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped></style>
