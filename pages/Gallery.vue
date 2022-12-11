<template>
  <div>
    <div id="button_div">
      <!-- <button
        class="btn btn-primary image_button"
        @click="updateImage('result')"
      >
        The result
      </button>
      <button
        class="btn btn-primary image_button"
        @click="updateImage('Inprogress')"
      >
        The process
      </button> -->
    </div>
    <div id="gallery">
      <template v-for="(img, index) in images">
        <img
          v-if="img.includes(toDisplay)"
          id="Item"
          :key="index"
          @click="showSource(index)"
          v-lazy="images[index]"
          class="img-responsive"
        />
      </template>
    </div>

    <div id="myModal" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-body"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newItem: { name: "Name of new IMG", path: "Path to new IMG" },
      images: [],
      toDisplay: "result",
    };
  },

  methods: {
    shuffle: function () {
      Gallery.images.sort(function (a, b) {
        return 0.5 - Math.random();
      });
    },
    showSource: function (index) {
      this.$swal.fire({
        imageUrl: this.images[index],
        button: "Nice",
        // timer: 10000,
      });
    },
    updateImage(toDisplay) {
      this.toDisplay = toDisplay;
    },
  },

  async fetch() {
    function importAll(r) {
      return r.keys().map(r);
    }

    const images = await importAll(
      require.context("@/assets/img/ImageGallery", false, /\.(png|jpe?g|svg)$/)
    );
    this.images = images;
  },
};
</script>

<style scoped>
h1 {
  font-family: Satisfy;
  font-size: 50px;
  text-align: center;
  color: black;
  padding: 1%;
}
#gallery {
  -webkit-column-count: 4;
  -moz-column-count: 4;
  column-count: 2;

  -webkit-column-gap: 20px;
  -moz-column-gap: 20px;
  column-gap: 20px;
  margin-top: 10px;
}
@media (max-width: 1200px) {
  #gallery {
    -webkit-column-count: 3;
    -moz-column-count: 3;
    column-count: 3;

    -webkit-column-gap: 20px;
    -moz-column-gap: 20px;
    column-gap: 20px;
  }
}
@media (max-width: 800px) {
  #gallery {
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2;

    -webkit-column-gap: 20px;
    -moz-column-gap: 20px;
    column-gap: 20px;
  }
}
@media (max-width: 600px) {
  #gallery {
    -webkit-column-count: 1;
    -moz-column-count: 1;
    column-count: 2;
  }
}
#gallery img,
#gallery video {
  width: 100%;
  height: auto;
  margin: 4% auto;
  box-shadow: -3px 5px 15px #000;
  cursor: pointer;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
}
.modal-img,
.model-vid {
  width: 100%;
  height: auto;
}
.modal-body {
  padding: 0px;
}

#button_div {
  margin-top: 96px;
  display: flex;
  justify-content: space-around;
}
.btn.btn-primary.image_button {
  width: 48%;
  padding: 10px;
}
</style>
