<script>
export default {
  name: "AboutView",
  components: { AppBanner }
};
</script>

<template>
  <AppBanner title="About Page"></AppBanner>
  <div class="py-5">
    <div class="container">
      <div class="row">
        <div class="col">
          <img
            class="img-fluid"
            src="https://picsum.photos/200/300?grayscale"
            alt=""
          />
        </div>
        <div class="col">
          <h3>user</h3>
          <p class="lead">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
            deserunt quisquam numquam porro esse, minima consequatur incidunt
            doloribus blanditiis provident autem veritatis quae. Sed nobis
            reprehenderit minus eaque, quas dolor.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
