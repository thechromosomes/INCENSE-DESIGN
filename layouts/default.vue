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
};
</script>

<style scoped>
.main-class {
  min-height: 500px;
  margin-top: 60px;
}
</style>

