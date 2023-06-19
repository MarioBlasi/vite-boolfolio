<script>
import AppBanner from "../components/AppBanner.vue";

export default {
  name: "AboutView",
  components: { AppBanner }
};
</script>
<template>
  <AppBanner title="About Page"></AppBanner>

  <main class="site-wrapper">
    <div class="pt-table">
      <div class="pt-tablecell page-about relative">
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
                  About <span class="primary">me</span>
                  <span class="title-bg">Name</span>
                </h2>
                <p>
                  I am working as a professional UI/UX Designer since 2007.
                  Worked in more than 200 live projects and also with more than
                  120 different clients!
                </p>
              </div>
            </div>

            <div class="col-xs-12 col-md-6">
              <div class="about-author">
                <figure class="author-thumb">
                  <img
                    src="https://trucchifacebook.com/wp-content/uploads/2014/11/Profilo-facebook-anonimo-750x420.jpg "
                    h-25
                    alt=""
                  />
                </figure>
                <!-- /.author-bio -->
                <div class="author-desc">
                  <p><b>Date of birth:</b> 05th july, 1984</p>
                  <p><b>Language:</b> English, Spanish</p>
                  <p><b>Expert in:</b> UI/UX, Web development</p>
                  <p><b>Freelance:</b> Available</p>
                </div>
                <!-- /.author-desc -->
              </div>
              <!-- /.about-author -->
              <p>
                I'm a multi-award winning designer that has been specialising in
                web design for the past three years although I have experience
                in branding and print.Projects.
              </p>
            </div>
            <!-- /.col -->

            <div class="col-xs-12 col-md-6">
              <div class="section-title clear">
                <h3>Skills</h3>
              </div>
              <div class="skill-wrapper shadow">
                <div class="progress clear p-3 shadow mt-4">
                  <div class="skill-name bg-danger rounded">JavaScript</div>
                  <div class="skill-bar">
                    <div class="bar red" style="width: 55%"></div>
                  </div>
                  <div class="skill-lavel text-danger" data-skill-value="70%">
                    <h4>70%</h4>
                  </div>
                </div>
                <!-- /.progress -->
                <div class="progress clear p-3 shadow mt-4">
                  <div class="skill-name bg-danger rounded">CSS</div>
                  <div class="skill-bar">
                    <div class="bar red" style="width: 90%"></div>
                  </div>
                  <div class="skill-lavel text-danger" data-skill-value="90%">
                    <h4>90%</h4>
                  </div>
                </div>
                <!-- /.progress -->
                <div class="progress clear p-3 shadow mt-4">
                  <div class="skill-name bg-danger rounded">SASS</div>
                  <div class="skill-bar">
                    <div class="bar red" style="width: 90%"></div>
                  </div>
                  <div class="skill-lavel text-danger">
                    <h4>90%</h4>
                  </div>
                </div>
                <!-- /.progress -->
                <div class="progress clear p-3 shadow mt-4">
                  <div class="skill-name bg-danger rounded">VUE</div>
                  <div class="skill-bar">
                    <div class="bar red" style="width: 70%"></div>
                  </div>
                  <div class="skill-lavel text-danger" data-skill-value="75%">
                    <h4>70%</h4>
                  </div>
                </div>
                <!-- /.progress -->
                <div class="progress clear p-3 shadow mt-4">
                  <div class="skill-name bg-danger rounded">HTML5</div>
                  <div class="skill-bar">
                    <div class="bar red" style="width: 90%"></div>
                  </div>
                  <div class="skill-lavel text-danger" data-skill-value="75%">
                    <h4>90%</h4>
                  </div>
                </div>
                <!-- /.progress -->
                <div class="progress clear p-3 shadow mt-4">
                  <div class="skill-name bg-danger rounded">PHP</div>
                  <div class="skill-bar">
                    <div class="bar red" style="width: 80%"></div>
                  </div>
                  <div class="skill-lavel text-danger" data-skill-value="75%">
                    <h4>80%</h4>
                  </div>
                </div>
                <!-- /.progress -->
                <div class="progress clear p-3 shadow mt-4">
                  <div class="skill-name bg-danger rounded">LARAVEL</div>
                  <div class="skill-bar">
                    <div class="bar red" style="width: 70%"></div>
                  </div>
                  <div class="skill-lavel text-danger" data-skill-value="75%">
                    <h4>70%</h4>
                  </div>
                </div>
                <div class="progress clear p-3 shadow mt-4">
                  <div class="skill-name bg-danger rounded">REACT</div>
                  <div class="skill-bar">
                    <div class="bar red" style="width: 0%"></div>
                  </div>
                  <h6><strong>learning...</strong></h6>
                </div>
                <!-- /.progress -->
              </div>
              <!-- /.skill-wrapper -->
            </div>
            <!-- /.col -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.container -->
      </div>
      <!-- /.pt-tablecell -->
    </div>
    <!-- /.pt-table -->
  </main>
</template>

<style lang="sass" scoped></style>
