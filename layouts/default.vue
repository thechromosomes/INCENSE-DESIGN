<template>
  <div>
    <div>
      <Header />
    </div>
    <div class="main-class">
      <transition name="bounce">
        <QueryPopUp v-if="$store.state.queryUpPopUp" />
      </transition>
      <nuxt />
    </div>
  </div>
</template>
<!--Start of Tawk.to Script-->
<!--End of Tawk.to Script-->
<script>
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import QueryPopUp from "@/components/layout/queryPopUp.vue";

export default {
  components: {
    Header,
    Footer,
    QueryPopUp,
  },
  async mounted() {
    console.log("fetch", window.location.origin);
    this.$store.commit("updateBaseUrl", { url: window.location.origin });

    // init twak to
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/639ddd9fb0d6371309d4e762/1gkgajejp';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
  },
};
</script>

<style scoped>
.main-class {
  min-height: 500px;
  margin-top: 60px;
}
</style>

