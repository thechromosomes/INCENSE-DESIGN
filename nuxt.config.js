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

      {
        hid: "description",
        name: "description",
        content:
          "Premium interior and exterior for all. The finest designing solution in the world. Avail great offers & deals. ✓Assured Quality.",
      },
      {
        hid: "og:Incense Design",
        property: "og:Incense Design",
        content: "Incense Design",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "/logo.png",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "icon", type: "image/x-icon", href: "/logo.png" },
      {
        rel: "alternate",
        href: "https://www.incensedesign.com/",
        hreflang: "en-IN",
      },
      {
        rel: "alternate",
        href: "https://www.incensedesign.com/",
        hreflang: "x-default",
      },
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
    { src: "@/plugins/jsonld", defer: true },
    { src: "@/plugins/toast", mode: "client" },
    { src: "@/plugins/lazyLoad", defer: true },
  ],

  modules: ["@nuxtjs/axios", "nuxt-leaflet", "@nuxtjs/gtm"],

  // google tag manger
  gtm: {
    id: "GTM-PVMFTKB",
    enabled: true,
    debug: true,
    loadScript: true,
  },

  // server  middleware for back end api
  // a server middleware that runs only server site
  serverMiddleware: ["~/server-middleware/sendMail"],
  // target: 'static', // default is 'server'

  // dynamic port configuration
  server: {
    port: 3001, // default: 3000
    // host: "0.0.0.0", // default: localhost
  },
};
