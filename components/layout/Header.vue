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
            <a href="tel:+8588880111" class="Blondie"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-phone-vibrate"
                viewBox="0 0 16 16"
              >
                <path
                  d="M10 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4zM6 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6z"
                />
                <path
                  d="M8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM1.599 4.058a.5.5 0 0 1 .208.676A6.967 6.967 0 0 0 1 8c0 1.18.292 2.292.807 3.266a.5.5 0 0 1-.884.468A7.968 7.968 0 0 1 0 8c0-1.347.334-2.619.923-3.734a.5.5 0 0 1 .676-.208zm12.802 0a.5.5 0 0 1 .676.208A7.967 7.967 0 0 1 16 8a7.967 7.967 0 0 1-.923 3.734.5.5 0 0 1-.884-.468A6.967 6.967 0 0 0 15 8c0-1.18-.292-2.292-.807-3.266a.5.5 0 0 1 .208-.676zM3.057 5.534a.5.5 0 0 1 .284.648A4.986 4.986 0 0 0 3 8c0 .642.12 1.255.34 1.818a.5.5 0 1 1-.93.364A5.986 5.986 0 0 1 2 8c0-.769.145-1.505.41-2.182a.5.5 0 0 1 .647-.284zm9.886 0a.5.5 0 0 1 .648.284C13.855 6.495 14 7.231 14 8c0 .769-.145 1.505-.41 2.182a.5.5 0 0 1-.93-.364C12.88 9.255 13 8.642 13 8c0-.642-.12-1.255-.34-1.818a.5.5 0 0 1 .283-.648z"
                /></svg
              > 8588880111</a
            >
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
    text-align: center;
    margin-top: 10px;
    background-color: #f4433c;
    color: #fff;
    border-radius: 10px;
    padding: 3px 0px;
  }
  .nav-menu li:last-child a {
    color: #fff;
    padding: 3px 12px;
  }
  .mobile-toogle {
    display: inline-block;
    width: 41px;
    position: absolute;
    right: 15px;
  }
  .section-header {
    font: 300 33px "Oswald", sans-serif;

    font-weight: 600;
    margin-bottom: 19px;
  }
}
</style>
