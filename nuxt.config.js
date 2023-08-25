// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify';
export default defineNuxtConfig({
  ssr: false,
  server: {
    port: process.env.PORT || 3000
  },
  app: {
    head: {
      titleTemplate: '%s - app',
      title: 'beezlink-admin',
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
          src: "/scripts/jquery-3.3.1.min.js",
          type: "text/javascript",
        }, {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",
          type: "text/javascript",
          integrity: "sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN",
          crossorigin: "anonymous",
          body: true,
          defer: true,
        }, {
          src: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/js/all.min.js",
          type: "text/javascript",
          body: true,
          defer: true,
        }]
    },
  },
  vite: {
    ssr: {
      noExternal: ['vuetify'],
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/variables.scss";',
        },
      }
    }

  },
  build: {
    loaders: {
      scss: {
        additionalData: "@import '~/assets/scss/variables.scss';",
      },
    },
  },
  devtools: { enabled: false },
  modules: [
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config => config.plugins.push(
        vuetify()
      ))
    },
  ],
  css: [
    '~/assets/styles/root.scss',
    '~/assets/styles/main.scss',
  ],
  components: {
    global: true,
    dirs: ['~/components']
  },
})
