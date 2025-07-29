// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  app: {
    baseURL: '/restaurant_labs/',
    head: {
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/restaurant_labs/favicon.svg' }],
    },
  },

  modules: ['@nuxt/eslint'],
})
