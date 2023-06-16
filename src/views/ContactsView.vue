<script>
import AppBanner from "../components/AppBanner.vue";

export default {
  name: "ContactsView",
  components: { AppBanner }
};
</script>
<template>
  <AppBanner title="Contacts"></AppBanner>
  <!-- <section class="contact-me py-5">
      <div class="container">
        <form>
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              class="form-control"
              placeholder="Mario"
              aria-describedby="nameHelper"
            />
            <small id="nameHelper" class="text-muted"
              >Type your full name here</small
            >
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">email</label>
            <input
              type="email"
              name="email"
              id="email"
              class="form-control"
              placeholder="Mario@Rossi.com"
              aria-describedby="emailHelper"
            />
            <small id="emailHelper" class="text-muted"
              >Type your email here</small
            >
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea
              class="form-control"
              name="message"
              id="message"
              rows="8"
            ></textarea>
          </div>

          <button type="submit" class="btn btn-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-envelope-paper"
              viewBox="0 0 16 16"
            >
              <path
                d="M4 0a2 2 0 0 0-2 2v1.133l-.941.502A2 2 0 0 0 0 5.4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5.4a2 2 0 0 0-1.059-1.765L14 3.133V2a2 2 0 0 0-2-2H4Zm10 4.267.47.25A1 1 0 0 1 15 5.4v.817l-1 .6v-2.55Zm-1 3.15-3.75 2.25L8 8.917l-1.25.75L3 7.417V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v5.417Zm-11-.6-1-.6V5.4a1 1 0 0 1 .53-.882L2 4.267v2.55Zm13 .566v5.734l-4.778-2.867L15 7.383Zm-.035 6.88A1 1 0 0 1 14 15H2a1 1 0 0 1-.965-.738L8 10.083l6.965 4.18ZM1 13.116V7.383l4.778 2.867L1 13.117Z"
              />
            </svg>
            Send
          </button>
        </form>
      </div>
    </section> -->

  <body>
    <main class="site-wrapper">
      <div class="pt-table">
        <div class="pt-tablecell page-contact relative">
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
                    Get in <span class="primary">touch</span>
                    <span class="title-bg">Contact</span>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat.
                  </p>
                </div>
              </div>
            </div>
            <!-- /.row -->

            <div class="row">
              <div class="col-xs-12 col-sm-5 col-md-4 col-lg-3">
                <div class="contact-block">
                  <div class="media">
                    <div class="media-left">
                      <i class="tf-envelope2"></i>
                    </div>
                    <div class="media-body">
                      <h4>Email</h4>
                      <p>
                        <a href="mailto:my_name@gmail.com">my_name@gmail.com</a>
                      </p>
                    </div>
                  </div>
                </div>
                <!-- /.contact-block -->
                <div class="contact-block">
                  <div class="media">
                    <div class="media-left">
                      <i class="tf-phone2"></i>
                    </div>
                    <div class="media-body">
                      <h4>Phone</h4>
                      <p><a href="tel:+000-1111-2222">+000-1111-2222</a></p>
                    </div>
                  </div>
                </div>
                <!-- /.contact-block -->
                <div class="contact-block">
                  <div class="media">
                    <div class="media-left">
                      <i class="tf-mobile"></i>
                    </div>
                    <div class="media-body">
                      <h4>Skype</h4>
                      <p><a href="skype:my_name">my_name</a></p>
                    </div>
                  </div>
                </div>
                <!-- /.contact-block -->

                <ul class="contact-social">
                  <li>
                    <span class="contact-social-hex"></span>
                    <a href="www.fb.com/themefisher"
                      ><i class="tf-ion-social-facebook"></i
                    ></a>
                  </li>
                  <li>
                    <span class="contact-social-hex"></span>
                    <a href="www.twitter.com/themefisher"
                      ><i class="tf-ion-social-twitter"></i
                    ></a>
                  </li>
                  <li>
                    <span class="contact-social-hex"></span>
                    <a href="#"><i class="tf-ion-social-google"></i></a>
                  </li>
                  <li>
                    <span class="contact-social-hex"></span>
                    <a href="www.dribbble.com/themefisher"
                      ><i class="tf-ion-social-dribbble"></i
                    ></a>
                  </li>
                </ul>
              </div>
              <div
                class="col-xs-12 col-sm-7 col-md-7 col-md-offset-1 col-lg-offset-2"
              >
                <div class="section-title clear">
                  <h3>Send me a meesage</h3>
                  <span class="bar-dark"></span>
                  <span class="bar-primary"></span>
                </div>

                <form
                  id="contact-form"
                  class="row contact-form no-gutter"
                  action="#"
                  method="post"
                >
                  <div class="col-xs-12 col-sm-6">
                    <div class="input-field name">
                      <span class="input-icon" id="name"
                        ><i class="tf-profile-male"></i
                      ></span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                  </div>
                  <!-- ./col- -->
                  <div class="col-xs-12 col-sm-6">
                    <div class="input-field email">
                      <span class="input-icon" id="email"
                        ><i class="tf-envelope2"></i
                      ></span>
                      <input
                        type="email"
                        class="form-control"
                        name="email"
                        placeholder="Your email address"
                        required
                      />
                    </div>
                  </div>
                  <!-- ./col- -->
                  <div class="col-xs-12 col-sm-12">
                    <div class="input-field">
                      <span class="input-icon" id="subject"
                        ><i class="tf-pricetags"></i
                      ></span>
                      <input
                        type="text"
                        class="form-control"
                        name="subject"
                        placeholder="Enter the discussion title"
                        required
                      />
                    </div>
                  </div>
                  <!-- ./col- -->
                  <div class="col-xs-12 col-sm-12">
                    <div class="input-field message">
                      <span class="input-icon"><i class="tf-pencil2"></i></span>
                      <textarea
                        name="message"
                        id="message"
                        class="form-control"
                        placeholder="Write your message"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <!-- ./col- -->
                  <div class="col-xs-12 col-sm-12">
                    <div class="input-field">
                      <span class="btn-border">
                        <button
                          type="submit"
                          class="btn btn-primary btn-custom-border text-uppercase"
                        >
                          Send Message now
                        </button>
                      </span>
                    </div>
                    <div class="msg-success">
                      Your Message was sent successfully
                    </div>
                    <div class="msg-failed">
                      Something went wrong, please try again later
                    </div>
                  </div>
                  <!-- ./col- -->
                </form>
                <!-- /.row -->
              </div>
              <!-- /.col- -->
            </div>
            <!-- /.row -->
          </div>
          <!-- /.container -->

          <nav class="page-nav clear">
            <div class="container">
              <div class="flex flex-middle space-between">
                <span class="prev-page"
                  ><a href="testimonials.html" class="link"
                    >&larr; Prev Page</a
                  ></span
                >
                <span class="copyright"
                  >Copyright &copy; 2021, Designed &amp; Developed by
                  <a href="https://themefisher.com/">Themefisher</a>.</span
                >
              </div>
            </div>
            <!-- /.page-nav -->
          </nav>

          <!-- /.container -->
        </div>
        <!-- /.pt-tablecell -->
      </div>
      <!-- /.pt-table -->
    </main>
    <!-- /.site-wrapper -->
  </body>
</template>

<style lang="sass" scoped></style>
