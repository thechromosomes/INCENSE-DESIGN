<template>
  <div>
    <div>
      <Header />
    </div>
    <div class="main-class">
      <nuxt />
    </div>
    <div>
      <!-- <Footer /> -->
    </div>
  </div>
</template>

<script>
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>

  
.main-class {
  min-height: 500px;
  margin-top: 60px;
}
</style>

