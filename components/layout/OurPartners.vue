<template>
  <div>
    <div class="container">
      <section class="customer-logos slider">
        <h2>Our Partners</h2>
        <!-- <Slick :options="slickOptions">
          <div class="slide" v-for="(item, index) in 9" :key="index">
            <img
              src="https://image.freepik.com/free-vector/luxury-letter-e-logo-design_1017-8903.jpg"
            />
          </div>
        </Slick> -->
        <img
              src="~/assets/img/client.jpg" class="clients-img"
            />

      </section>
    </div>
  </div>
</template>

<script>
import Slick from "vue-slick";
export default {
  components: { Slick },

  data() {
    return {
      slickOptions: {
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 520,
            settings: {
              slidesToShow: 3,
            },
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  padding: 20px;
}
/* Slider */

.slick-slide {
  margin: 0px 20px;
}

.slick-slide img {
  width: 100%;
  padding: 10px;
}

.slick-slider {
  position: relative;
  display: block;
  box-sizing: border-box;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -ms-touch-action: pan-y;
  touch-action: pan-y;
  -webkit-tap-highlight-color: transparent;
}

.slick-list {
  position: relative;
  display: block;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
.slick-list:focus {
  outline: none;
}
.slick-list.dragging {
  cursor: pointer;
  cursor: hand;
}

.slick-slider .slick-track,
.slick-slider .slick-list {
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

.slick-track {
  position: relative;
  top: 0;
  left: 0;
  display: block;
}
.slick-track:before,
.slick-track:after {
  display: table;
  content: "";
}
.slick-track:after {
  clear: both;
}
.slick-loading .slick-track {
  visibility: hidden;
}

.slick-slide {
  display: none;
  float: left;
  height: 100%;
  min-height: 1px;
}
[dir="rtl"] .slick-slide {
  float: right;
}
.slick-slide img {
  display: block;
}
.slick-slide.slick-loading img {
  display: none;
}
.slick-slide.dragging img {
  pointer-events: none;
}
.slick-initialized .slick-slide {
  display: block;
}
.slick-loading .slick-slide {
  visibility: hidden;
}
.slick-vertical .slick-slide {
  display: block;
  height: auto;
  border: 1px solid transparent;
}
.slick-arrow.slick-hidden {
  display: none;
}
.customer-logos.slider h2 {
  text-transform: capitalize;
  color: #323850;
  font-family: "Lato", Sans-serif;
  font-size: 48px;
  font-weight: bold;
}
.customer-logos.slider {
  padding: 60px 0px 0px 0px;
}
</style>