<template>
  <div>
    <div class="container">
      <div class="main">
        <div class="row">
          <div class="col-sm-2">
            <ul class="nav nav-tabs" id="myTab">
              <li class="active">
                <a id="link1" href="#office" data-toggle="tab">Tab 1</a>
              </li>
              <li><a id="link2" href="#rnd" data-toggle="tab">Tab 2</a></li>
            </ul>
            <div class="tab-content">
              <div class="tab-pane active" id="office">
                <h1>Contact 1</h1>
                <h4>Address 1</h4>
              </div>
              <div class="tab-pane" id="rnd">
                <h1>Contact 2</h1>
                <h4>Address 2</h4>
              </div>
            </div>
          </div>
          <div class="col-sm-10">
            <div
              id="map_canvas"
              style="height: 250px; border: thin solid black"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
//   head() {
//     return {
//       script: [
//         {
//           src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDY0kkJiTPVd2U7aTOAwhc9ySH6oHxOIYM&callback=initMap",
//           body: true,
//         },
//       ],
//     };
//   },
  methods: {
    renderMap() {
      var marker;
      var map;

      // register an event listener to the map
      $("#link1").click(function () {
        changeMarkerPos(3.165759, 101.611416);
      });
      $("#link2").click(function () {
        changeMarkerPos(3.165559, 101.612416);
      });

      // function to change the marker position
      function initialize() {
        var styles = [
          {
            stylers: [
              {
                saturation: -100,
              },
            ],
          },
        ];
        var styledMap = new google.maps.StyledMapType(styles, {
          name: "Styled Map",
        });
        var mapProp = {
          center: new google.maps.LatLng(3.165659, 101.611416),
          zoom: 17,
          panControl: false,
          zoomControl: false,
          mapTypeControl: false,
          scaleControl: true,
          streetViewControl: false,
          overviewMapControl: false,
          rotateControl: true,
          scrollwheel: false,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
        };
        map = new google.maps.Map(
          document.getElementById("map_canvas"),
          mapProp
        );

        map.mapTypes.set("map_style", styledMap);
        map.setMapTypeId("map_style");

        marker = new google.maps.Marker({
          position: new google.maps.LatLng(3.167244, 101.61295),
          animation: google.maps.Animation.DROP,
          icon: "https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/location-24-32.png",
        });

        marker.setMap(map);
        map.panTo(marker.position);
      }

      // function to change the marker position
      function changeMarkerPos(lat, lon) {
        myLatLng = new google.maps.LatLng(lat, lon);
        marker.setPosition(myLatLng);
        map.panTo(myLatLng);
      }

      google.maps.event.addDomListener(window, "load", initialize);
    },
  },

  mounted() {
    this.renderMap();
  },
};
</script>

<style scoped>
.main {
  margin-top: 25px;
}

.nav-tabs {
  border-bottom: none;
}
.nav-tabs > li > a {
  border: none;
  border-radius: 0;
  background-color: #eee;
}
.nav-tabs > li > a:hover {
  background-color: #8845a6;
  color: #fff;
}
.nav-tabs > li.active > a {
  border: none;
  background-color: #8845a6;
  color: #fff;
}
.nav-tabs > li.active > a:hover,
.nav-tabs > li.active > a:focus {
  border: none;
  background-color: #8845a6;
  color: #fff;
}
</style>