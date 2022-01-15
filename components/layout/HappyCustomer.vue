<template>
  <div>
    <div class="cool-effect-div">
    <div class="container-fluid text-center">
      <h1>Some cool facts</h1>
      <div class="row">
        <div class="col-sm-3 col-6">
          <i class="fa fa-user"></i>
          <h2><span data-max="83" class="no-count"></span>+ Happy Customers</h2>
        </div>
        <div class="col-sm-3 col-6">
          <i class="fa fa-code"></i>
          <h2> <span data-max="250" class="no-count"></span>+ Resources</h2>
        </div>
        <div class="col-sm-3 col-6">
          <i class="fa fa-lock"></i>
          <h2> <span data-max="24" class="no-count"></span>+ Projects</h2>
        </div>
        <div class="col-sm-3 col-6">
          <i class="fa fa-briefcase"></i>
          <h2  id="test"> <span data-max="23" class="no-count"></span>+ Developers</h2>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    function inVisible(element) {
      //Checking if the element is
      //visible in the viewport
      var WindowTop = $(window).scrollTop();
      var WindowBottom = WindowTop + $(window).height();
      var ElementTop = element.offset().top;
      var ElementBottom = ElementTop + element.height();
      //animating the element if it is
      //visible in the viewport
      if (ElementBottom <= WindowBottom && ElementTop >= WindowTop)
        animate(element);
    }

    function animate(element) {
      //Animating the element if not animated before
      if (!element.hasClass("ms-animated")) {
        var maxval = element.data("max");
        var html = element.html();
        element.addClass("ms-animated");
        $({
          countNum: element.html(),
        }).animate(
          {
            countNum: maxval,
          },
          {
            //duration 5 seconds
            duration: 5000,
            easing: "linear",
            step: function () {
              element.html(Math.floor(this.countNum) + html);
            },
            complete: function () {
              element.html(this.countNum + html);
            },
          }
        );
      }
    }

    //When the document is ready
    $(function () {
      //This is triggered when the
      //user scrolls the page
      $(window).scroll(function () {
        //Checking if each items to animate are
        //visible in the viewport
        $("h2 span[data-max]").each(function () {
          inVisible($(this));
        });
      });
    });
  },
};
</script>


<style scoped>
i {
  font-size: 4em !important;
  margin-top: 10%;
  color: #f44436;
}

.cool-effect-div h1{text-transform: capitalize;
    color: #323850;
    font-family: "Lato", Sans-serif;
    font-size: 48px;
    font-weight: bold;}
    .cool-effect-div h2{ font-weight: 600;}
    .no-count{
    display: block;
    font-size: 31px;
    color: #444;
}
    .cool-effect-div h2 {
    font-weight: 600;
    font-size: 22px;padding-top: 25px;
}
</style>