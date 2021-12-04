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
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/css/bootstrap/css/bootstrap.min.css",
    "~/assets/css/font-awesome/css/font-awesome.min.css",
    "~/assets/css/style.css",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

 target: 'static' // default is 'server'

};
