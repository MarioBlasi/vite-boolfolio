<script>
import AppBanner from "../components/AppBanner.vue";
export default {
  name: "ContactsView",
  components: { AppBanner }
};
</script>

<template>
  <AppBanner title="Contacts Page"></AppBanner>
  <section class="contact-me">
    <div class="container">
      <form>
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input
            type="name"
            name="name"
            id="name"
            class="form-control"
            placeholder="sgsd"
            aria-describedby="nameHelper"
          />
          <small id="nameHelper" class="text-muted">full name</small>
        </div>

        <div class="mb-3">
          <label for="email" class="form-label">email</label>
          <input
            type="email"
            email="email"
            id="email"
            class="form-control"
            placeholder="sgsd"
            aria-describedby="emailHelper"
          />
          <small id="emailHelper" class="text-muted">put your email here</small>
        </div>

        <button type="submit" class="btn btn-info">Submit</button>
      </form>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
