export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'final',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src: "/vendors/simple-line-icons/css/simple-line-icons.css",
      },
      {
        src: "/vendors/flag-icon-css/css/flag-icon.min.css",
      },
      {
        src: "/vendors/css/vendor.bundle.base.css",
      },
      {
        src: "/vendors/daterangepicker/daterangepicker.css",
      },
      {
        src: "/vendors/chartist/chartist.min.css",
      },
      {
        src: "/vendors/js/vendor.bundle.base.js",
      },
      {
        src: "/vendors/chart.js/Chart.min.js",
      },
      {
        src: "/vendors/moment/moment.min.js",
      },
      {
        src: "/vendors/daterangepicker/daterangepicker.js",
      },
      {
        src: "/vendors/chartist/chartist.min.js",
      },
      {
        src: "/js/off-canvas.js",
      },
      {
        src: "/js/misc.js",
      },
      {
        src: "/js/dashboard.js",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/style.css',
    '@/assets/vendors/simple-line-icons/css/simple-line-icons.css',
    '@/assets/vendors/flag-icon-css/css/flag-icon.min.css',
    '@/assets/vendors/css/vendor.bundle.base.css',
    '@/assets/vendors/daterangepicker/daterangepicker.css',
    '@/assets/vendors/chartist/chartist.min.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
