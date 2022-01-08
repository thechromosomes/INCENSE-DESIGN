<template>
  <div>
    <!-- main banner -->
    <div class="mainBanner">
      <span>
        <img src="@/static/IDMainBanner.gif" />
      </span>
    </div>
    <!-- main banner en -->
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

            <Card :payload="SecondSection" />

            <ProgressContent />

            <Card :payload="ThirdSection" />

            <HappyCustomer />

            <OurPartners />

            <section class="bottomStickBotton">
              <a href="https://wa.me/message/9988998898" target="blank"
                ><img src="@/assets/img/whatsApp.png" />
              </a>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/layout/Card.vue";
import ProgressContent from "@/components/layout/progressContent.vue";
import HappyCustomer from "@/components/layout/HappyCustomer.vue";
import OurPartners from "@/components/layout/OurPartners.vue";


import {
  FirstSection,
  SecondSection,
  ThirdSection,
} from "@/HomePageData/index";
export default {
  components: {
    Card,
    ProgressContent,
    HappyCustomer,
    OurPartners
  },

  data() {
    return {
      ThirdSection: ThirdSection,
      FirstSection: FirstSection,
      SecondSection: SecondSection,
    };
  },
  head() {
    return {
      title: "this.title",
      meta: [
        {
          hid: "this.description",
          name: "this.description",
          content: "this.description",
        },
        {
          hid: "og:title",
          content: "this.title",
          property: "og:title",
        },
        {
          hid: "og:description",
          content: "this.description",
          property: "og:description",
        },
        {
          hid: "og:url",
          content: "this.url",
          property: "og:url",
        },
      ],
    };
  },
};
</script>

<style>
@import url("@/assets/css/frontend.min.css");

@import url("@/assets/css/post-498.css");

@import url("@/assets/css/widget-styles.css");
</style>