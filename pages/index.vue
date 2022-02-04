<template>
  <div>
    <!-- main banner -->

    <!-- page loader -->
    <Loader v-show="!$store.state.homePageBannerLoaded" />
    <div class="mainBanner">
      <span>
        <img
          src="@/static/IDMainBanner.gif"
          @load="toggleHomePageBannerLoaded()"
        />
      </span>
      <div class="main-banner-text">
        <strong class="elementskit-section-subtitle"
          >You choose, we execute</strong
        >
        <h2 class="ekit-heading--title elementskit-section-title">
          INCENSE DESIGN
        </h2>
        <small>Architecture, Interior, Furniture</small>
        <a
          class="
            elementskit-btn
            whitespace--normal
            thisButtonWillOpenTheQueryPopUp
          "
          @click.prevent="togglePopUp"
          >Get Free Estimate</a
        >
      </div>
    </div>
    <!-- main banner en -->
    <section class="interiirro">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 img-box">
            <div class="card card-flip h-100">
              <div class="card-front text-white bg-dark">
                <div class="card-body">
                  <div class="opacity-modul2">
                    <span>
                      <img src="@/static/interioID.gif" alt="" />
                    </span>
                    <div class="main-banner-text">
                      <p class="module2-title elementskit-section-title">
                        INTERIOR DESIGN
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-back bg-white">
                <div class="card-body module2-back">
                  <h3 class="card-title">Home Interior</h3>
                  <p class="card-text">
                    Suprise... </br> Explore our interior design services. We have a wide range of interior design solutions for your home.
                  </p>
                  <NuxtLink to="/gallery" class="btn btn-outline-secondary">Explore</NuxtLink>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-6 img-box">
            <div class="card card-flip h-100">
              <div class="card-front text-white bg-dark">
                <div class="card-body">
                  <div class="opacity-modul2">
                    <span>
                      <img src="@/static/homeoffice.gif" alt="" />
                    </span>
                    <div class="main-banner-text">
                      <p class="module2-title elementskit-section-title">
                        OFFICE DESIGN
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-back bg-white">
                <div class="card-body module2-back">
                  <h3 class="card-title">office Interior</h3>
                  <p class="card-text">
                    Suprise... </br> We are into best office interior design solutions. We have a wide range of interior design solutions for your office.
                  </p>
                  <NuxtLink to="/gallery" class="btn btn-outline-secondary ">Explore</NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="clearfix"></div>
    <!-- ========  -->
    <div
      data-rsssl="1"
      class="
        page-template
        page-template-elementor_canvas
        page page-id-498 page-parent
        wp-custom-logo
        elementor-default
        elementor-template-canvas
        elementor-kit-8
        elementor-page
        elementor-page-498
        e--ua-blink e--ua-chrome e--ua-webkit
      "
      data-elementor-device-mode="desktop"
      data-new-gr-c-s-check-loaded="14.1040.0"
      data-gr-ext-installed=""
    >
      <div
        data-elementor-type="wp-page"
        data-elementor-id="498"
        class="elementor elementor-498"
        data-elementor-settings="[]"
      >
        <div class="elementor-inner">
          <div class="elementor-section-wrap">


            <Card :payload="FirstSection" />

            <div class="complte-intro-compo">
            <Card :payload="SecondSection"></card>
            </div>

            <Testimonial />

            <Card :payload="ThirdSection" />

            <HappyCustomer />

            <Instagram />

            <OurPartners />

            <section class="bottomStickBotton">
              <a href="https://wa.link/pycwjd" target="blank"
                ><img src="@/assets/img/whatsApp.png" />
              </a>
            </section>
            <section class="bottomStickBotton call-stick">
              <a href="tel:+918588880111" target="blank">
                <img src="@/assets/img/call.png" />
              </a>
            </section>
          </div>
        </div>
      </div>
    </div>

    <div
      class="
        fix-button
        elementskit-btn
        whitespace--normal
        thisButtonWillOpenTheQueryPopUp
      "
      @click="togglePopUp"
    >
      <p>Get Free Estimate</p>
    </div>
    <WelcomePopUp v-if="welcomePopUp"/> 
  </div>
</template>

<script>
import Card from "@/components/layout/Card.vue";
import Testimonial from "@/components/layout/testimonial.vue";
import HappyCustomer from "@/components/layout/HappyCustomer.vue";
import OurPartners from "@/components/layout/OurPartners.vue";
import Instagram from "@/components/layout/Instagram.vue";
import Loader from "@/components/layout/Loader.vue";
import WelcomePopUp from "@/components/layout/welcomePopUp.vue";

import { keyWord } from "@/utils/keyWord.js";

import {
  FirstSection,
  SecondSection,
  ThirdSection,
} from "@/HomePageData/index";
export default {
  components: {
    Card,
    Loader,
    Testimonial,
    HappyCustomer,
    OurPartners,
    Instagram,
    WelcomePopUp,
  },

  data() {
    return {
      ThirdSection: ThirdSection,
      FirstSection: FirstSection,
      SecondSection: SecondSection,
      welcomePopUp: false,
    };
  },

  methods: {
    togglePopUp() {
      this.$store.commit("setQueryUpPopUp", {
        status: true,
      });
    },

    closePopUp() {
      this.welcomePopUp = !this.welcomePopUp;
    },

    toggleHomePageBannerLoaded() {
      setTimeout(() => {
        this.$store.commit("setHomePageBannerLoaded", {
          status: true,
        });
      }, 0);
    },
  },

  jsonld() {
    return {
      "@context": "http://schema.org",
      "@type": "Organization",
      name: "Incense Design - You choose, we execute",
      image: "./logo.png",
      "@id": "",
      url: "www.incensedesign.in/",
      telephone: "+918588880111",

      address: {
        "@type": "PostalAddress",
        streetAddress: "SD A-19 sector 45 Noida",
        addressLocality: "Noida",
        postalCode: "201303",
        addressCountry: "IN",
      },
      sameAs: [
        "https://www.instagram.com/idinterior195/",
        "https://www.facebook.com/idinterior195",
      ],
    };
  },

  head() {
    return {
      title: "Incense Design",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Incense Design || You choose, we execute",
        },
        {
          hid: "keyword",
          name: "keyword",
          content: this.renderKeywords,
        },
        {
          hid: "og:title",
          content: "Incense Design",
          property: "og:title",
        },
        {
          hid: "og:description",
          content: "Incense Design || You choose, we execute",
          property: "og:description",
        },
        {
          hid: "og:url",
          content: this.$store.state.BASE_URL + this.$route.fullPath,
          property: "og:url",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: `${this.$store.state.BASE_URL}${this.$route.path}`,
        },
      ],
    };
  },

  computed: {
    renderKeywords() {
      let finalArray = [];
      for (let i = 0; i < keyWord.length; i++) {
        finalArray.push(keyWord[i].Column3);
      }
      return finalArray.join(" || ");
    },
  },

  mounted() {},

  watch: {
    "$store.state.homePageBannerLoaded": {
      handler(val) {
        this.$nextTick(() => {
          setTimeout(() => {
            this.closePopUp();
          }, 3000);
        });
      },
    },
  },
};
</script>

<style>
@import url("@/assets/css/frontend.min.css");

@import url("@/assets/css/post-498.css");

@import url("@/assets/css/widget-styles.css");
</style>