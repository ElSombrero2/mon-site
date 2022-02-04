import { NuxtConfig } from '@nuxt/types'
import router from './app/router/router'
import '@fortawesome/fontawesome-free/js/all'

const config: NuxtConfig = {
  head: {
    title: 'site-perso',
    htmlAttrs: {lang: 'en'},
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    './node_modules/bootstrap/dist/css/bootstrap-grid.min.css',
    './node_modules/bulma/css/bulma.min.css',
    './node_modules/@fortawesome/fontawesome-free/css/all.min.css'
  ],
  plugins: [],
  components: true,
  buildModules: ['@nuxt/typescript-build'],
  modules: ['@nuxt/http'],
  build: {},
  serverMiddleware: ['~/app/api/index.ts'],
  router: router
}

export default config
