import Lara from '@primevue/themes/lara';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@primevue/nuxt-module',
  ],
  runtimeConfig: {
    apiSecret: '',
  },
  app: {
    pageTransition: {
      name: 'fade',
      mode: 'out-in'
    },
    layoutTransition: {
      name: 'slide',
      mode: 'out-in'
    }
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