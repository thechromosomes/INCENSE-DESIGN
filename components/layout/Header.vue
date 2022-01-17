<template>
  <div id="header">
    <Loader v-show="$store.state.pageLoader" />
    <div class="container">
      <div id="logo" class="pull-left">
        <NuxtLink to="/" class="scrollto">
          <img src="@/static/logo.png"
        /></NuxtLink>
      </div>

      <nav id="nav-menu-container" :class="{ active: openMenu }">
        <ul class="nav-menu">
          <li><NuxtLink to="/services">Services</NuxtLink></li>
          <li><NuxtLink to="/aboutUs">About Us</NuxtLink></li>
          <li><NuxtLink to="/contactUs">Contact</NuxtLink></li>
          <li><NuxtLink to="/gallery">Gallery</NuxtLink></li>
          <!-- <li>
            <a
              @click.prevent="togglePopUp()"
              style="background-color: #f44336; color: #fff"
              class="thisButtonWillOpenTheQueryPopUp"
              >Yes! We Are Available</a
            >
          </li> -->
          <li>
            <a href="tel:+8588880111" class="Blondie"> Call me </a>
          </li>
        </ul>
      </nav>

      <img
        src="~/assets/img/menu.png"
        alt="menu"
        class="mobile-toogle"
        @click="openMenu = !openMenu"
      />
      <!-- #nav-menu-container -->

      <!-- query pop up for all query buttons -->
      <transition name="bounce">
        <QueryPopUp v-if="$store.state.queryUpPopUp" />
      </transition>
    </div>
  </div>
</template>
<script>
import QueryPopUp from "@/components/layout/queryPopUp.vue";
import Loader from "@/components/layout/Loader.vue";

export default {
  components: { QueryPopUp, Loader },
  data() {
    return {
      openMenu: false,
    };
  },
  methods: {
    togglePopUp() {
      this.$store.commit("setQueryUpPopUp", {
        status: true,
      });
    },
  },

  mounted() {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 0);
  },
};
</script>
<style scoped>
#nav-menu-container {
  margin-top: 27px;
}
.mobile-toogle {
  display: none;
}
@media (max-width: 767px) {
  #nav-menu-container.active {
    display: block !important;
  }
  .nav-menu li:last-child {
    width: 100%;
    text-align: center;
    margin-top: 10px;
  }
  .mobile-toogle {
    display: inline-block;
    width: 41px;
    position: absolute;
    right: 15px;
  }
}
</style>
