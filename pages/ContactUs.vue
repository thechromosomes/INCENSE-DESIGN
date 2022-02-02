<template>
  <div>
    <section id="contact">
      <h2 class="section-header">Contact</h2>

      <div class="contact-wrapper">
        <!-- Left contact page -->

        <div id="contact-form" class="form-horizontal" role="form">
          <div class="form-group">
            <div class="col-sm-12">
              <input
                type="text"
                v-model="user.name"
                class="form-control"
                id="name"
                placeholder="NAME"
                name="name"
                value=""
                required
              />
            </div>
          </div>

          <div class="form-group">
            <div class="col-sm-12">
              <input
                type="number"
                v-model="user.phone"
                class="form-control"
                id="number"
                placeholder="NUMBER"
                name="number"
                value=""
                required
              />
            </div>
          </div>

          <div class="form-group">
            <div class="col-sm-12">
              <input
                type="email"
                v-model="user.email"
                class="form-control"
                id="email"
                placeholder="EMAIL"
                name="email"
                value=""
                required
              />
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-12">
              <textarea
                class="form-control"
                rows="10"
                placeholder="MESSAGE"
                v-model="user.message"
                name="message"
                required
              ></textarea>
            </div>
          </div>
          <button
            class="btn btn-primary send-button"
            id="submit"
            type="submit"
            value="SEND"
          >
            <div class="alt-send-button" @click="sendMail('contact')">
              <i class="fa fa-paper-plane"></i
              ><span class="send-text">SEND</span>
            </div>
          </button>
        </div>

        <!-- Left contact page -->

        <div class="direct-contact-container">
          <ul class="contact-list">
            <li class="list-item">
              <i class="fa fa-map-marker fa-2x"
                ><span class="contact-text place">City, State</span></i
              >
            </li>

            <li class="list-item">
              <i class="fa fa-phone fa-2x"
                ><span class="contact-text phone"
                  ><a href="tel:+918588880111" title="Give me a call"
                    >8588880111</a
                  ></span
                ></i
              >
            </li>

            <li class="list-item">
              <i class="fa fa-envelope fa-2x"
                ><span class="contact-text gmail"
                  ><a
                    href="mailto:Contact@incensedesign.com"
                    title="Send me an email"
                    >Contact@incensedesign.com</a
                  ></span
                ></i
              >
            </li>
          </ul>

          <hr />
          <ul class="social-media-list">
            <li>
              <a
                href="https://www.instagram.com/idinterior195/"
                target="_blank"
                class="contact-icon"
              >
                <i class="fa fa-instagram" aria-hidden="true"></i
              ></a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/idinterior195"
                target="_blank"
                class="contact-icon"
              >
                <i class="fa fa-facebook" aria-hidden="true"></i
              ></a>
            </li>
          </ul>
          <hr />
        </div>
      </div>
    </section>
    <section class="maps">
      <Maps />
    </section>
  </div>
</template>

<script>
import Maps from "@/components/layout/Maps.vue";
export default {
  components: { Maps },
  head() {
    return {
      title: "Contact us",
    };
  },

  data() {
    return {
      user: {},
    };
  },

  methods: {
    togglePopUp() {
      this.$store.commit("setQueryUpPopUp", {
        status: false,
      });
    },

    async sendMail(type) {
      let form = {
        name: this.user.name,
        email: this.user.email,
        phone: this.user.phone,
        location: this.user.location,
        message: this.user.message,
        emailType: type,
        startDate: this.user.startDate,
        endDate: this.user.endDate,
        person: this.user.person,
      };

      if (!form.phone) {
        this.$swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please fill the form first!",
          timer: 10000,
        });
        return;
      }

      let response = await this.$store.dispatch("ApiCall", {
        method: "post",
        url: `/sendmail`,
        params: form,
      });

      if (response.status) {
        this.$swal.fire({
          icon: "success",
          timer: 10000,
          title: "Voila!",
          text: "Message sent successfully, expect a reply soon",
        });
        this.user = {};
      } else {
        this.$swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          timer: 10000,
          text: "Message sent successfully, expect a reply soon",
        });
      }
    },
  },
};
</script>

<style scoped>
.maps {
  margin-bottom: 60px !important;
}
#contact {
  width: 100%;
  height: 100%;
}

.section-header {
  text-align: center;
  margin: 0 auto;
  font: 300 40px "Oswald", sans-serif;
  color: rgb(211 76 76);
  text-transform: uppercase;
  letter-spacing: 6px;
  font-weight: 600;
  margin-bottom: 40px;
}

.contact-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  max-width: 840px;
}

/* Left contact page */
.form-horizontal {
  /*float: left;*/
  max-width: 400px;
  font-family: "Lato";
  font-weight: 400;
}

.form-control,
textarea {
  max-width: 400px;
  background-color: transparent;
  border: 1px solid #000;
  height: 40px;
  letter-spacing: 1px;
}
input.form-control::placeholder {
  color: #000;
  font-family: "Oswald", sans-serif;
  text-transform: capitalize;
}
.send-button {
  margin-top: 15px;
  height: 34px;
  width: 400px;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
}

.alt-send-button {
  width: 400px;
  height: 34px;
  transition: all 0.2s ease-in-out;
}

.send-text {
  display: block;
  margin-top: 10px;
  font: 700 12px "Lato", sans-serif;
  letter-spacing: 2px;
}

.alt-send-button:hover {
  transform: translate3d(0px, -29px, 0px);
}

/* Begin Right Contact Page */
.direct-contact-container {
  max-width: 400px;
}

/* Location, Phone, Email Section */
.contact-list {
  list-style-type: none;
  margin-left: -30px;
  padding-right: 20px;
}

.list-item {
  line-height: 4;
  color: rgb(0, 0, 0);
}

.contact-text {
  font: 300 18px "Lato", sans-serif;
  letter-spacing: 1.9px;
  color: #000000;
}

.place,
.contact-text.phone,
.contact-text.gmail {
  margin-left: 25px;
}

.phone {
  margin-left: 56px;
}

.gmail {
  margin-left: 53px;
}

.contact-text a {
  color: #000000;
  text-decoration: none;
  transition-duration: 0.2s;
}

.contact-text a:hover {
  color: #36c1f4;
  text-decoration: none;
}

/* Social Media Icons */
.social-media-list {
  font-size: 22px;
  text-align: left;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  text-align: left;
}

.social-media-list li a {
  color: #fff;
  text-align: center;
  display: block;
  line-height: 40px;
}

.social-media-list li {
  /* position: relative; */
  display: inline-block;
  height: 40px;
  width: 40px;
  margin: 10px 3px;
  line-height: 60px;
  border-radius: 50%;
  color: #fff;
  background-color: rgb(27, 27, 27);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.social-media-list li:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 60px;
  line-height: 60px;
  border-radius: 50%;
  opacity: 0;
  box-shadow: 0 0 0 1px #fff;
  transition: all 0.2s ease-in-out;
}

.social-media-list li:hover {
  background-color: #fff;
}

.social-media-list li:hover:after {
  opacity: 1;
  transform: scale(1.12);
  transition-timing-function: cubic-bezier(0.37, 0.74, 0.15, 1.65);
}

.social-media-list li:hover a {
  color: #000;
}

.copyright {
  font: 200 14px "Oswald", sans-serif;
  color: #555;
  letter-spacing: 1px;
  text-align: center;
}

hr {
  border-color: rgba(255, 255, 255, 0.6);
}

/* Begin Media Queries*/
@media screen and (max-width: 850px) {
  .contact-wrapper {
    display: flex;
    flex-direction: column;
  }
  .direct-contact-container,
  .form-horizontal {
    margin: 0 auto;
  }

  .direct-contact-container {
    margin-top: 60px;
    max-width: 300px;
  }
  .social-media-list li {
    height: 60px;
    width: 60px;
    line-height: 60px;
  }
  .social-media-list li:after {
    width: 60px;
    height: 60px;
    line-height: 60px;
  }
}

@media screen and (max-width: 569px) {
  .direct-contact-container,
  .form-wrapper {
    float: none;
    margin: 0 auto;
  }
  .form-control,
  textarea {
    margin: 0 auto;
  }

  .name,
  .email,
  textarea {
    width: 100%;
  }
  .contact-wrapper {
    display: block;
  }

  .direct-contact-container {
    margin-top: 60px;
    max-width: 280px;
  }
  .social-media-list {
    left: 0;
  }
  .social-media-list li {
    height: 55px;
    width: 55px;
    line-height: 55px;
    font-size: 2rem;
  }
  .social-media-list li:after {
    width: 55px;
    height: 55px;
    line-height: 55px;
  }
  .direct-contact-container {
    width: 100%;
    padding: 0px;
  }
  .contact-list {
    padding: 0px;
  }
  .social-media-list li a {
    line-height: 54px;
  }
  #contact {
    padding-bottom: 0px;
  }
  .nav-tabs {
    margin-bottom: 30px;
  }
}

@media screen and (max-width: 410px) {
  .send-button {
    width: 99%;
  }
}
</style>