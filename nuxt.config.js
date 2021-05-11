export default async () => {
  return {
    target: 'static',
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
      title: 'Data7',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'robots', content: 'noindex, nofollow' },
        { name: 'msapplication-TileImage', content: 'favicon.png' },
      ],
      link: [
        { type: 'image/png', sizes: '16x16', href: 'favicon.png' },
        { type: 'image/png', sizes: '32x32', href: 'favicon.png' },
        { type: 'image/png', sizes: '96x96', href: 'favicon.png' },
        {
          rel: 'apple-touch-icon-precomposed',
          type: 'image/png',
          sizes: '76x76',
          href: 'favicon.png',
        },
        {
          rel: 'apple-touch-icon-precomposed',
          type: 'image/png',
          sizes: '76x76',
          href: 'favicon.png',
        },
        {
          rel: 'apple-touch-icon-precomposed',
          type: 'image/png',
          sizes: '120x120',
          href: 'favicon.png',
        },
        {
          rel: 'apple-touch-icon-precomposed',
          type: 'image/png',
          sizes: '152x152',
          href: 'favicon.png',
        },
        {
          rel: 'apple-touch-icon',
          href: 'favicon.png',
        },
        {
          rel: 'shortcut icon',
          href: 'favicon.ico',
        },
      ],
      script: [
        { src: 'js/jquery.min.js', body: true, mode: 'client' },
        { src: 'js/bootstrap.bundle.min.js', body: true, mode: 'client' },
        { src: 'js/jquery.easing.min.js', body: true, mode: 'client' },
        { src: 'js/jquery.mb.YTPlayer.js', body: true, mode: 'client' },
        { src: 'js/jquery.magnific-popup.min.js', body: true, mode: 'client' },
        { src: 'js/contact.init.js', body: true, mode: 'client' },
        { src: 'js/counter.init.js', body: true, mode: 'client' },
        { src: 'js/owl.carousel.min.js', body: true, mode: 'client' },
        { src: 'js/app.js', body: true, mode: 'client' },
        { src: 'js/typed.js', body: true, mode: 'client' },
        { src: 'js/particles.js', body: true, mode: 'client' },
        { src: 'js/particles.app.js', body: true, mode: 'client' },
        { src: 'js/jquery.mb.YTPlayer.js', body: true, mode: 'client' },
        {
          src:
            'https://unicons.iconscout.com/release/v2.0.1/script/monochrome/bundle.js',
          body: true,
          mode: 'client',
        },
      ],
    },
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
      '@assets/css/bootstrap.min.css',
      '@assets/css/materialdesignicons.min.css',
      '@assets/css/pe-icon-7-stroke.css',
      '@assets/css/owl.carousel.css',
      '@assets/css/owl.theme.css',
      '@assets/css/owl.transitions.css',
      '@assets/css/magnific-popup.css',
      '@assets/scss/style.scss',
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
      // https://go.nuxtjs.dev/axios
      '@nuxtjs/axios',
      // https://go.nuxtjs.dev/content
      '@nuxt/content',
      '@nuxtjs/gtm',
	  '@nuxtjs/robots',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},
    plugins: [{ src: '~/plugins/vuex-persist', ssr: false },{ src: '~/plugins/vue-stripe.js', ssr: false }],
    // Content module configuration: https://go.nuxtjs.dev/config-content
    content: {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    router: {
      base: '/',
    },
	robots: {
      UserAgent: '*',
      Disallow: process.env.APP_ENVIRONMENT != 'PRODUCTION' ? '/' : '',
    },
  }
}
