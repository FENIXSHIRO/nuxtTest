import Lara from '@primevue/themes/lara';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@primevue/nuxt-module',
    'vue-yandex-maps/nuxt',
  ],
  runtimeConfig: {
    apiSecret: '',
  },
  nitro: {
    prerender: {
      routes: ["/"],
    },
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  yandexMaps: {
    apikey: '4475d6fc-d4df-4df5-b5b1-5e2faf007c4f',
  },
  primevue: {
    options: {
      ripple: true,
      inputVariant: 'filled',
      theme: {
          preset: Lara,
          options: {
              prefix: 'p',
              darkModeSelector: false,
              cssLayer: false
          }
      }
    }
  }
})