import colors from "vuetify/es5/util/colors";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - INCENSE DESIGN",
    title: "INCENSE_DESIGN",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        href: "https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Raleway:300,400,500,700,800|Montserrat:300,400,700",
        rel: "stylesheet",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/lib/bootstrap/css/bootstrap.min.css",
    "~/assets/lib/font-awesome/css/font-awesome.min.css",
    "~/assets/lib/animate/animate.min.css",
    "~/assets/lib/ionicons/css/ionicons.min.css",
    "~/assets/lib/magnific-popup/magnific-popup.css",
    "~/assets/css/style.css",
  ],

  script: [
    { src: "@/assets/lib/jquery/jquery.min.js", async: true },
    { src: "@/assets/lib/jquery/jquery-migrate.min.js", async: true },
    { src: "@/assets/lib/bootstrap/js/bootstrap.bundle.min.js", async: true },
    { src: "@/assets/lib/easing/easing.min.js", async: true },
    { src: "@/assets/lib/superfish/hoverIntent.js", async: true },
    { src: "@/assets/lib/wow/wow.min.js", async: true },
    { src: "@/assets/lib/owlcarousel/owl.carousel.min.js", async: true },
    {
      src: "@/assets/lib/sticky/sticky.js",
      async: true,
    },
    {
      src: "@/assets/js/main.js",
      async: true,
    },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  // vuetify: {
  //   customVariables: ['~/assets/variables.scss'],
  //   theme: {
  //     dark: true,
  //     themes: {
  //       dark: {
  //         primary: colors.blue.darken2,
  //         accent: colors.grey.darken3,
  //         secondary: colors.amber.darken3,
  //         info: colors.teal.lighten1,
  //         warning: colors.amber.base,
  //         error: colors.deepOrange.accent4,
  //         success: colors.green.accent3
  //       }
  //     }
  //   }
  // },

  // server: {
  //   port: 3000,
  //   // configure local area network
  //   // host: "0",
  // },
};
