<template>
  <div class="py-5">
    <!-- Main Title -->
    <div class="my-2 text-center">
      <h1 class="text-4xl font-semibold text-gray-800">聯絡資訊與營業時間</h1>
    </div>

    <!-- Information Sections -->
    <div class="flex flex-wrap justify-center">
      <!-- Phone Section -->
      <div class="m-4 w-full max-w-md p-4">
        <h1 class="my-5 text-3xl font-semibold text-gray-800">電話</h1>
        <p>→ 04-24220080</p>
      </div>

      <!-- Address Section -->
      <div class="m-4 w-full max-w-md p-4">
        <h1 class="my-5 text-3xl font-semibold text-gray-800">地址</h1>
        <p>兆豐輪胎保養廠</p>
        <p>台中市北屯區昌平路三段179號</p>
      </div>

      <!-- Business Hours Section -->
      <div class="m-4 w-full max-w-md p-4">
        <h1 class="my-5 text-3xl font-semibold text-gray-800">營業時間</h1>
        <div class="space-y-1">
          <div class="flex justify-between">
            <p>星期一</p>
            <p>8:00 AM ‑ 6:30 PM</p>
          </div>
          <div class="flex justify-between">
            <p>星期二</p>
            <p>8:00 AM ‑ 6:30 PM</p>
          </div>
          <div class="flex justify-between">
            <p>星期三</p>
            <p>8:00 AM ‑ 6:30 PM</p>
          </div>
          <div class="flex justify-between">
            <p>星期四</p>
            <p>8:00 AM ‑ 6:30 PM</p>
          </div>
          <div class="flex justify-between">
            <p>星期五</p>
            <p>8:00 AM ‑ 6:30 PM</p>
          </div>
          <div class="flex justify-between">
            <p>星期六</p>
            <p>8:00 AM ‑ 2:00 PM</p>
          </div>
          <div class="flex justify-between">
            <p>星期日</p>
            <p>休息</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Google Maps Section -->
    <div class="mt-10 flex justify-center">
      <div class="w-full max-w-screen-lg">
        <!-- 不同尺寸下會有不同的寬度 -->
        <GoogleMaps class="mx-auto 300px:w-400px 720px:w-800px lg:w-1000px" />
      </div>
    </div>
  </div>
</template>

<script>
import GoogleMaps from '@/components/GoogleMaps.vue'

export default {
  components: {
    GoogleMaps
  }
}
</script>
