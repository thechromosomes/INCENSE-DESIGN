<template>
  <div>
    <div class="container">
      <section class="customer-logos slider testimonial">
        <h2>Happy Customers</h2>
        <Slick :options="slickOptions">
          <div
            class="slide"
            v-for="(item, index) in happyCustomer"
            :key="index"
          >
            <div class="card_item_testi">
              <img
                :src="`https://ui-avatars.com/api/?name=${
                  item.name.split('Mr')[1]
                } `"
                alt="man"
              />

              <h2>{{ item.name }}</h2>
              <p>
                {{ item.description }}
              </p>
              <p></p>
            </div>
          </div>
        </Slick>
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
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: true,
        pauseOnHover: false,
        infinite: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 520,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      },

      happyCustomer: [
        {
          name: "Mr Anoop (Sunworld Arista)",
          description:
            "Very good quality plywoods with many designs. Also, they are very experienced in interior designing, submitting the projects on time. Also, the nature of the owner is very friendly.",
        },
        {
          name: "Mr katueiya Astalis",
          description:
            "People are very friendly and helpful. They are very good in their work. I like the the way the work is done. I am very happy with the work done by them. I will recommend them to all my friends and family. Thank you.",
        },

        {
          name: "Mr Rakesh Alphathum",
          description:
            " I was very confused about the things but they were very helpful. They are very good in their work. I like the the way the work is done. I am very happy with the work done by them. simply love it",
        },
        {
          name: "Mr vinay kumar",
          description:
            "We build our home only once. so I wanted everything perfect and aesthetic and no doubt, the team is good and they are very good in their work. I like the the way the work is done.",
        },
      ],
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
  width: 100px;
  border-radius: 100%;
  margin: 0 auto;
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
  font-size: 46px;
  font-weight: bold;
}
.card_item_testi h2 {
  font-size: 19px !important;
}
.customer-logos.slider {
  padding: 60px 0px 0px 0px;
}
.card_item_testi {
  background-color: #fff;
  margin-right: 20px;
  padding: 20px;
  border: 1px solid rgb(204 204 204 / 19%);
}
.testimonial {
  margin-bottom: 70px;
}

.testimonial p {
  color: #8c8c8c;
  font-weight: 600;
  letter-spacing: 0px;
  text-align: center;
}
</style>
