// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    title: '兆豐輪胎保養廠',
    meta: [
      {
        name: 'description',
        content:
          '兆豐輪胎保養廠是一家專業的汽車保養與輪胎服務公司。聯繫資訊：地址：台中市北屯區昌平路三段179號。電話：(04) 24220080。'
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: '兆豐輪胎保養廠 - 專業的汽車保養與輪胎服務' },
      { property: 'og:image', content: 'https://megatire.net/images/serve.png' },
      { property: 'og:url', content: 'https://megatire.net' },
      {
        property: 'og:description',
        content:
          '兆豐輪胎保養廠是一家專業的汽車保養與輪胎服務公司。聯繫資訊：地址：台中市北屯區昌平路三段179號。電話：(04) 24220080。'
      }
    ]
  },

  typescript: {
    // typeCheck: true
  },

  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
  compatibilityDate: '2024-07-10'
})
