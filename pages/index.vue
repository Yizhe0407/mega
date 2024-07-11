<template>
  <div>
    <!-- Image Section -->
    <div class="h-screen w-screen overflow-hidden">
      <nuxt-img class="h-full w-full object-cover" :src="imageSrc" alt="Maxxis" />
    </div>

    <!-- 公司介紹 -->
    <section class="p-10">
      <h2 class="text-center text-3xl font-semibold">公司介紹</h2>
      <p class="mx-auto mt-4 max-w-3xl text-center text-lg text-gray-700">
        兆豐輪胎保養廠成立於2007年5月4日，是一家專業的汽車保養與輪胎服務公司。我們擁有豐富的經驗和專業知識，致力於為每一位客戶提供高品質的服務。
      </p>
    </section>

    <!-- 主要服務 -->
    <section class="bg-gray-100 p-10">
      <h2 class="text-center text-3xl font-semibold">主要服務</h2>
      <div class="mt-4 flex flex-wrap justify-center">
        <div class="m-4 max-w-xs rounded-lg bg-white p-4 shadow-md hover:shadow-xl">
          <h3 class="text-xl font-semibold">輪胎更換</h3>
          <p class="mt-2 text-gray-600">提供各種品牌和型號的輪胎更換服務。</p>
        </div>
        <div class="m-4 max-w-xs rounded-lg bg-white p-4 shadow-md hover:shadow-xl">
          <h3 class="text-xl font-semibold">定期保養</h3>
          <p class="mt-2 text-gray-600">定期檢查和保養，確保您的愛車始終處於最佳狀態。</p>
        </div>
        <div class="m-4 max-w-xs rounded-lg bg-white p-4 shadow-md hover:shadow-xl">
          <h3 class="text-xl font-semibold">全車檢查</h3>
          <p class="mt-2 text-gray-600">全面檢查車輛的各個部分，確保行車安全。</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageSrc: ''
    }
  },
  mounted() {
    this.updateImageSrc()
    // 确保事件监听器在客户端添加
    window.addEventListener('resize', this.updateImageSrc)
  },
  beforeUnmount() {
    // 在组件销毁前移除事件监听
    window.removeEventListener('resize', this.updateImageSrc)
  },
  methods: {
    updateImageSrc() {
      // 添加对window对象的检查
      if (typeof window !== 'undefined') {
        this.imageSrc = window.innerWidth > 700 ? '/images/w-cover.jpg' : '/images/h-cover.jpg'
      }
    }
  }
}

useHead({
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
})
</script>
