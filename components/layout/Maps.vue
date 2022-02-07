<template>
  <div>
    <div class="container tab-ection">
      <div class="main">
        <div class="row">
          <div class="col-sm-3 col-12">
            <h2>STORE LOCATOR</h2>
            <ul class="nav nav-tabs" id="myTab">
              <li
                :class="{ active: index === activeMarker }"
                v-for="(item, index) in markers"
                :key="index"
                @click="renderMap(index)"
              >
                <a id="link1"  data-toggle="tab"
                  >address {{ index + 1 }}</a
                >
                <p>{{ item.name }}</p>
              </li>
            </ul>
          </div>
          <div class="col-sm-9 col-12">
            <div
              id="map_canvas"
              style="height: 250px; border: thin solid black"
            >
              <div id="map-wrap" style="height: 248px">
                <client-only>
                  <l-map :zoom="15" :center="markers[activeMarker].location">
                    <l-tile-layer
                      url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                    ></l-tile-layer>
                    <l-marker
                      :lat-lng="markers[activeMarker].location"
                    ></l-marker>
                  </l-map>
                </client-only>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      activeMarker: 0,
      markers: [
        {
          location: [28.5412573, 77.3444975],
          name: "1624 -E sequre Supertech Sector 96 Noida, Noida, Uttar Pradesh 201303",
        },
        {
          location: [28.4152368, 77.0793314],
          name: "2nd Floor, H 11, A/26D, Golf Course Ext Rd, Gurugram, Haryana 122011",
        },
      ],
    };
  },
  methods: {
    renderMap(index) {
      this.activeMarker = index;
    },
  },
};
</script>

<style scoped>
.tab-ection h2 {
  font-size: 20px;
  font-weight: 600;
}
.main {
  margin-top: 25px;
}

.nav-tabs {
  border-bottom: none;
  cursor: pointer;
}
.nav-tabs > li > a {
  border: none;
  border-radius: 0;
}
.nav-tabs > li > p {
  padding-bottom: 0px;
  margin-bottom: 0px;
  font-size: 14px;
  padding-top: 7px;
}
.nav-tabs > li {
  padding: 12px 0px;
  border-top: 1px dashed #ccc;
  width: 100%;
}
.nav-tabs > li > a {
  color: #000;
  text-transform: capitalize;
  letter-spacing: 1px;
  font-weight: 600;
}
.nav-tabs > li > a:hover {
  background-color: #ffffff;
  color: rgb(0, 0, 0);
}
.nav-tabs > li.active > a {
  border: none;
  background-color: #ffffff;
  color: rgb(244 67 54);
}
.nav-tabs > li.active > a:hover,
.nav-tabs > li.active > a:focus {
  border: none;
  background-color: #8845a6;
  color: #fff;
}
</style>