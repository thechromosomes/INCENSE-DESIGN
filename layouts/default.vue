<template>
  <div>
    <div>
      <Header />
    </div>
    <div>
      <nuxt />
    </div>
    <div>
      <Footer />
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

