<template>
  <div id="header">
    <div class="container">
      <!-- <div id="logo" class="pull-left">
        <h4>
          <span
            ><i class="fa fa-align-center" @click="openMenu = !openMenu"></i
          ></span>
          <a href="/" class="scrollto"> INCENSE DESIGN</a>
        </h4>
      </div> -->
      <div id="logo" class="pull-left">
        <NuxtLink to="/" class="scrollto">
          <img src="@/static/logo.png"
        /></NuxtLink>
      </div>

      <nav id="nav-menu-container" :class="{ active: openMenu }">
        <ul class="nav-menu">
          <li><a href="/">Home</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/aboutUs">About Us</a></li>
          <li><a href="contactUs">Contact</a></li>
          <li><a href="/gallery">Gallery</a></li>
          <li>
            <a
              @click.prevent="togglePopUp()"
              style="background-color: #f44336; color: #fff"
              class="thisButtonWillOpenTheQueryPopUp"
              >Yes! We Are Available</a
            >
          </li>
        </ul>
      </nav>
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

export default {
  components: { QueryPopUp },
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
};
</script>
<style scoped>
#nav-menu-container {
  margin-top: 27px;
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
}
</style>
