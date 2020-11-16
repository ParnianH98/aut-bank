import colors from "vuetify/es5/util/colors";

export default {
  ssr: false,
  components: true,

  head: {
    titleTemplate: "%s - aut-bank",
    title: "aut-bank",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  css: ["~/assets/styles/main.scss"],

  plugins: [],

  buildModules: ["@nuxtjs/vuetify"],

  modules: [],

  vuetify: {
    rtl: true,
    customVariables: ["~/assets/variables.scss"],
    theme: {
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
