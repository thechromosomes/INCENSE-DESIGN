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
        href:
          "https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Raleway:300,400,500,700,800|Montserrat:300,400,700",
        rel: "stylesheet",
      },
    ],
    script: [
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js",
      },
      {
        src:
          "https://maps.googleapis.com/maps/api/js?key=AIzaSyDY0kkJiTPVd2U7aTOAwhc9ySH6oHxOIYM&callback=initMap",
        body: true,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/css/bootstrap/css/bootstrap.min.css",
    "~/assets/css/font-awesome/css/font-awesome.min.css",
    "~/assets/css/style.css",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  plugins: [
    { src: "~/plugins/jsonld", defer: true },
    { src: "@plugins/toast", mode: "client" },
  ],

  modules: ["@nuxtjs/axios"],

  // server  middleware for back end api
  // a server middleware that runs only server site
  serverMiddleware: ["~/server-middleware/sendMail"],
  // target: 'static', // default is 'server'

  // dynamic port configuration
  server: {
    port: process.env.PORT || 3001, // default: 3000
    // host: "0.0.0.0", // default: localhost
  },
};
