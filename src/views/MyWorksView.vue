<script>
import AppBanner from "../components/AppBanner.vue";

export default {
  name: "MyWorksView",
  components: { AppBanner }
};
</script>
<template>
  <AppBanner title="MyWorks"> </AppBanner>

  <PostList></PostList>

  <main class="site-wrapper">
    <div class="pt-table">
      <div class="pt-tablecell page-works relative">
        <!-- .close -->
        <a href="./" class="page-close"><i class="tf-ion-close"></i></a>
        <!-- /.close -->

        <div class="container">
          <div class="row">
            <div
              class="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8"
            >
              <div class="page-title text-center">
                <h2>
                  My <span class="primary"> works</span>
                  <span class="title-bg">works</span>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat.
                </p>
              </div>
            </div>
          </div>
          <!-- /.row -->

          <div class="row isotope-gutter">
            <div class="col-xs-12 col-sm-6 col-md-4 rounded shadow">
              <figure class="works-item">
                <img
                  src="https://img.itch.zone/aW1hZ2UvMTAyNzgzMi81ODgxMDEyLmpwZw==/original/4Y6zU3.jpg"
                  alt=""
                />
                <div class="overlay"></div>
                <figcaption class="works-inner">
                  <img
                    src="https://img.itch.zone/aW1hZ2UvMTAyNzgzMi81ODgxMDE4LmpwZw==/original/PqF%2B3h.jpg"
                    alt=""
                  />
                </figcaption>
              </figure>
              <div class="text-center">
                <p>👇 👇 👇 👇 👇</p>
                <p class="shadow-lg p-3 mb-5 bg-white rounded">
                  <a
                    href="https://mblasi.itch.io/iframe-frameborder0-srchttpsitchioembed1027832linkbacktrueampbor"
                    >https://mblasi.itch.io/</a
                  >
                </p>
              </div>
            </div>
            <!-- first -->
            <div class="col-xs-12 col-sm-6 col-md-4 rounded shadow">
              <figure class="works-item">
                <img
                  src="https://img.itch.zone/aW1hZ2UvOTg3MDE1LzU2ODcwNDYuanBn/original/aL30js.jpg"
                  alt=""
                />
                <div class="overlay"></div>
                <figcaption class="works-inner">
                  <img
                    src="https://img.itch.zone/aW1hZ2UvOTg3MDE1LzU2ODcwNDUucG5n/original/TYnYfs.png"
                    alt=""
                  />
                </figcaption>
              </figure>
              <div class="text-center">
                <p>👇 👇 👇 👇 👇</p>
                <p class="shadow-lg p-3 mb-5 bg-white rounded">
                  <a href="https://mblasi.itch.io/mr-red"
                    >https://mblasi.itch.io/mr-red/</a
                  >
                </p>
              </div>
            </div>
            <!-- second -->
            <div class="col-xs-12 col-sm-6 col-md-4 rounded shadow">
              <figure class="works-item">
                <img
                  src="https://www.gasholder.london/wp-content/uploads/sites/15/2018/06/Pizza-Sophia2.jpg "
                  h-25
                  alt=""
                />
                <div class="overlay"></div>
                <figcaption class="works-inner">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiA5UO-iQYhHWZx1VIYi6KlEc3SIezp6OSL5iNN_Qw64X1NyRSc5l3mNE3gWlvcjZEW8I&usqp=CAU"
                    alt=""
                  />
                </figcaption>
              </figure>
              <div class="text-center">
                <p>👇 👇 👇 👇 👇</p>
                <p class="shadow-lg p-3 mb-5 bg-white rounded">
                  <a href="https://pizzasophia.com/"
                    >https://pizzasophia.com//</a
                  >
                </p>
              </div>
            </div>
          </div>
          <!-- /.row -->
        </div>
        <!-- /.container -->

        <!-- /.container -->
      </div>
      <!-- /.pt-tablecell -->
    </div>
    <!-- /.pt-table -->
  </main>
  <!-- /.site-wrapper -->
</template>

<style lang="sass" scoped></style>
