// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    // typeCheck: true
  },
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/megatire/' : '/',
    buildAssetsDir: '/static/'
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image']
})
