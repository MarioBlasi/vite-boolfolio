<script>
import AppBanner from "../components/AppBanner.vue";

export default {
  name: "ContactsView",
  components: { AppBanner }
};
</script>
<template>
  <AppBanner title="Contacts"></AppBanner>

  <body>
    <main class="site-wrapper">
      <div class="pt-table">
        <div class="pt-tablecell page-contact relative">
          <a href="./" class="page-close"><i class="tf-ion-close"></i></a>

          <div class="container">
            <div class="row">
              <div
                class="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8"
              >
                <div class="page-title text-center">
                  <h2>
                    Contact <span class="primary">touch</span>
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
                    <span class="contact-social-hex bg-transparent"></span>
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
                class="col-xs-12 col-sm-7 col-md-7 col-md-offset-1 col-lg-offset-2 rounded shadow"
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
                        class="form-control bg-light bg-light text-danger"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                  </div>

                  <div class="col-xs-12 col-sm-6">
                    <div class="input-field email">
                      <span class="input-icon" id="email"
                        ><i class="tf-envelope2"></i
                      ></span>
                      <input
                        type="email"
                        class="form-control bg-light bg-light text-danger"
                        name="email"
                        placeholder="Your email address"
                        required
                      />
                    </div>
                  </div>

                  <div class="col-xs-12 col-sm-12">
                    <div class="input-field">
                      <span class="input-icon" id="subject"
                        ><i class="tf-pricetags"></i
                      ></span>
                      <input
                        type="text"
                        class="form-control bg-light bg-light text-danger"
                        name="subject"
                        placeholder="Enter the discussion title"
                        required
                      />
                    </div>
                  </div>

                  <div class="col-xs-12 col-sm-12">
                    <div class="input-field message">
                      <span class="input-icon"><i class="tf-pencil2"></i></span>
                      <textarea
                        name="message"
                        id="message"
                        class="form-control bg-light bg-light text-danger"
                        placeholder="Write your message"
                        required
                      ></textarea>
                    </div>
                  </div>

                  <div class="col-xs-12 col-sm-12">
                    <div class="input-field">
                      <span class="btn-border">
                        <button
                          type="submit"
                          class="btn btn-danger btn text-uppercase shadow"
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </body>
</template>

<style lang="sass" scoped></style>

<!-- <script>
import AppBanner from "../components/AppBanner.vue";


export default {
  name: "ContactView",
  data() {
    return {
      store,
      name: "",
      email: "",
      message: "",
      loading: false,
      success: false,
      errors: {}
    };
  },
  methods: {
    sendForm() {
      this.loading = true;
      const data = {
        name: this.name,
        email: this.email,
        message: this.message
      };

  
      this.errors = {};

     
    
      axios
        .post(`${this.store.apiBaseUrl}/api/contacts`, data)
        .then((response) => {
          this.success = response.data.success;
          if (!this.success) {
            this.errors = response.data.errors;
          } else {
            // ripulisco i campi di input
            this.name = "";
            this.email = "";
            this.message = "";
          }
          this.loading = false;
        });
    }
  }
};
</script>

<template>
  <AppBanner title="Contacts"></AppBanner>
  <section class="contact_me py-5">
    <div class="inner-wrapper">
      <div class="container-fluid text-center">
        <h2 class="text-uppercase">contact me</h2>
        <div v-if="success" class="alert alert-success text-start" role="alert">
          Messaggio inviato con successo!
        </div>
        <div class="row">
          <form @submit.prevent="sendForm()" class="col-12 text-start">
            <div class="mb-3">
              <input
                class="border-0 border-bottom form-control"
                :class="{ 'is-invalid': errors.name }"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                v-model="name"
              />
              <p
                v-for="(error, index) in errors.name"
                :key="`message-error-${index}`"
                class="invalid-feedback"
              >
                {{ error }}
              </p>
            </div>
            <div class="mb-3">
              <input
                class="border-0 border-bottom form-control"
                :class="{ 'is-invalid': errors.email }"
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                v-model="email"
              />
              <p
                v-for="(error, index) in errors.email"
                :key="`message-error-${index}`"
                class="invalid-feedback"
              >
                {{ error }}
              </p>
            </div>
            <div class="mb-3">
              <textarea
                class="border-0 border-bottom form-control"
                :class="{ 'is-invalid': errors.message }"
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Message"
                v-model="message"
              ></textarea>
              <p
                v-for="(error, index) in errors.message"
                :key="`message-error-${index}`"
                class="invalid-feedback"
              >
                {{ error }}
              </p>
            </div>
            <button
              class="btn btn-lg btn-primary text-white"
              type="submit"
              :disabled="loading"
            >
              {{ loading ? "Sending..." : "Send" }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style> -->
