<template>
  <div>
    <div class="bg-light">
      <div class="container py-5">
        <div class="row h-100 align-items-center py-5">
          <div class="col-lg-6">
            <h1 class="display-4">About us</h1>
            <p class="lead text-muted mb-0">You choose , we execute.</p>
            <p class="lead text-muted">
              ID Interior Design is a full-service interior design company since
              2012, specialized in both residential and commercial design.
              Moreover we provide a quick refresh of furniture and other decor
              items, or an extensive whole-house renovation, we ensure that the
              project runs smoothly and gives you the best results possible. Our
              commitment is to deliver the best designs that fulfil client
              expectations. Our goal is always to create designs tailored to our
              clients The one stop destination for all kind of conceptualization,
              designing contracting, implementing work with the best knowledge
              of day to da changing trends ID interior is one of the leading
              concept designing company established from 2010 and have completed
              more than 50+ projects.
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