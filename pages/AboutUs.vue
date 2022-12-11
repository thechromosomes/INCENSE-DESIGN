<template>
  <div>
    <div class="bg-light">
      <div class="container py-5">
        <div class="row h-100 align-items-center py-5">
          <div class="col-lg-6">
            <h1 class="display-4">About us</h1>
            <h3 class="">You choose , we execute.</h3>
            <p class="lead text-muted">
              <b>Incense Design</b>
               is a full-service interior design company since
              2012, specialized in both residential and commercial design.
              Moreover we provide a quick refresh of furniture and other decor
              items, or an extensive whole-space renovation/interior
              architecture, we enusre that the project runs smoothly and gives
              our client the best results possible. Our commitment is to deliver
              the best designs that fulfill client expectations. Our goal is to
              create a grandeur space that is unique personal styles and
              practical needs.

              <h3>Office Interior Design and Lighting Solutions</h3>
               The design and décor
              of any office should create a balance between comfort and style
              while facilitating creativity and increasing employee morale.
              Though we strive to attain just that, our team of supremely
              talented designers also focus on curating office spaces that are
              welcoming, pleasant and display remarkable interior design
              solutions. From designing offices for renowned developers to
              well-known firms, our designs are known to evoke a sense of
              timelessness and tranquillity. We work towards creating designs
              that not only encourages productivity among employees but help
              create a good impression for the firm while dealing with existing
              as well as new clients. From accumulating natural light to
              integrating vibrant colours, greenery, open layouts, touchless
              technology, and intelligent lighting solution, we create designs
              that are truly distinct, elegant and inspiring. We analyze your
              requirement and work towards creating an ambience that provides
              you with an immaculate and comfortable work experience.
            <h3>Luxury Residential Interior Designing Services </h3>
              Luxury Residential
              interior design is all about stylish, thoughtful and comforting
              choices. Our interiors denote a perfect interpretation of
              modernity concocted with traditional values of architecture. We
              incorporate designs that effortlessly balance luxury and comfort
              while accommodating the client’s personal style. Our work presents
              an eclectic vibe to residents through detailed concept planning
              that inculcates the contemporary design principles into the
              interiors of the space. Our team of professional designers ensure
              complete integration of design, project management, and on-site
              execution. Every single element that brings a room together is
              taken into careful consideration. At Incense Design, we guarantee
              your lux lifestyle and design aspirations are attained. Our
              designers strive to deliver a home that incorporates aesthetically
              pleasing designs, stunning lighting fixtures, bespoke furniture,
              and fabulous works of art. Our goal is to create a grandeur space
              that you truly enjoy coming back to.
            </p>
          </div>
          <div class="col-lg-6 d-none d-lg-block">
            <img
              src="https://bootstrapious.com/i/snippets/sn-about/illus.png"
              alt=""
              class="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="bg-light py-5">
      <div class="container py-5">
        <div class="row mb-4 d-flex justify-content-center text-center">
          <div class="col-lg-5">
            <h2 class="display-4 font-weight-light">Our team</h2>
            <p class="font-italic text-muted">
              Our team is made up of a group of people who are passionate about
              their work.
            </p>
          </div>
        </div>

        <div class="row text-center d-flex justify-content-center">
          <!-- Team item-->

          <div
            class="col-xl-3 col-sm-6 mb-5"
            v-for="(item, index) in ourTeam"
            :key="index"
          >
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <img
                :src="`https://ui-avatars.com/api/?name=${
                  item.name.split('.')[1]
                } `"
                :alt="item.name"
                width="100"
                class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
              />
              <h5 class="mb-0">{{ item.name }}</h5>
              <span class="small text-uppercase text-muted">{{
                item.designation
              }}</span>
              <!-- <ul class="social mb-0 list-inline mt-3">
                <li class="list-inline-item">
                  <a href="#" class="social-link"
                    ><i class="fa fa-facebook-f"></i
                  ></a>
                </li>
                <li class="list-inline-item">
                  <a href="#" class="social-link"
                    ><i class="fa fa-twitter"></i
                  ></a>
                </li>
                <li class="list-inline-item">
                  <a href="#" class="social-link"
                    ><i class="fa fa-instagram"></i
                  ></a>
                </li>
                <li class="list-inline-item">
                  <a href="#" class="social-link"
                    ><i class="fa fa-linkedin"></i
                  ></a>
                </li>
              </ul> -->
            </div>
          </div>
          <!-- End-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ourTeam: [
        {
          name: "Mr. Arun Nehru ",

          designation: "Chief executive officer & Founder",
        },
        {
          name: "Mr. Nitin Yadav ",

          designation: "Project Director & Principal Designer",
        },
        {
          name: "Ms. Santwana Malik ",

          designation: "Head Architecture & Principal Designer ",
        },
        {
          name: "Ms. Saima",

          designation: "Creative Director & Principal Designer",
        },
        {
          name: "Mr. Brijesh Bhardwaj ",

          designation: "Head Supervisor",
        },
      ],
    };
  },
};
</script>
