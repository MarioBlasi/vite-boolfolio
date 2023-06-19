<script>
import AppHeader from "./components/AppHeader.vue";
export default {
  components: {
    AppHeader
  }
};
</script>

<template>
  <head>
    <!-- ** Basic Page Needs ** -->
    <meta charset="utf-8" />
    <title>Phantom - Bootstrap Portfolio Template</title>

    <!-- ** Mobile Specific Metas ** -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="description" content="Portfolio HTML Template" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
    />
    <meta name="author" content="Themefisher" />
    <meta
      name="generator"
      content="Themefisher Html5 Portfolio Template v1.0"
    />

    <!-- Essential Stylesheets -->
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Libre+Baskerville:400,400i|Open+Sans:400,600,700,800"
    />
    <link rel="stylesheet" href="plugins/bootstrap/bootstrap.min.css" />
    <link rel="stylesheet" href="plugins/animate.css" />
    <link rel="stylesheet" href="plugins/slick/slick.css" />
    <link rel="stylesheet" href="plugins/slick/slick-theme.css" />
    <link
      rel="stylesheet"
      href="plugins/themefisher-fonts/css/themefisher-fonts.min.css"
    />

    <!-- Main Stylesheet -->
    <link rel="stylesheet" href="css/style.css" />

    <!-- Theme Stylesheet -->
    <link rel="stylesheet" href="#" id="color-changer" />

    <!--Favicon-->
    <link rel="icon" href="images/favicon.png" type="image/x-icon" />
  </head>
  <app-header></app-header>
  <router-view></router-view>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
