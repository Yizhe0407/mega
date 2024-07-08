<template>
  <div class="p-5">
    <!-- Main Title and Image -->
    <h1 class="my-2 text-center">
      <span class="text-4xl font-semibold text-gray-800">關於兆豐</span>
      <nuxt-img
        class="mx-auto mt-4 rounded-lg"
        src="/images/maxxis.jpg"
        height="300"
        alt="Maxxis"
      />
    </h1>

    <!-- Introduction Section -->
    <div class="mx-auto mt-4 max-w-3xl text-center text-lg text-gray-600">
      <p>
        兆豐輪胎保養廠成立於2007年5月4日，是一家專業的汽車保養與輪胎服務公司。我們致力於為每一位客戶提供高品質的服務，從定期保養、輪胎更換到全車檢查，我們擁有豐富的經驗和專業知識，確保您的愛車在我們這裡得到最好的照顧。
      </p>
    </div>

    <!-- Services Offered Section -->
    <div class="mx-auto mt-4 max-w-3xl text-center text-lg text-gray-600">
      <p>
        我們堅持以客戶為中心，不斷改進和提升服務質量，我們的服務涵蓋了各種車型，無論是轎車、SUV還是貨車，我們都提供專業的輪胎保養服務。我們的目標是成為您信賴的汽車保養專家，為您提供安全、可靠的駕駛體驗。
      </p>
    </div>

    <!-- Welcome Message Section -->
    <div class="mx-auto mt-4 max-w-3xl text-center text-lg text-gray-600">
      <p>歡迎來到兆豐輪胎保養廠，讓我們為您的愛車提供最好的保養服務！</p>
    </div>

    <!-- Contact Form Section -->
    <div class="mx-auto mt-4 max-w-3xl rounded-lg border border-gray-300 p-5">
      <h2 class="text-center text-2xl font-semibold text-gray-800">聯絡我們</h2>
      <form class="mt-4">
        <div class="mb-4">
          <label class="block text-gray-700">姓名</label>
          <input
            type="text"
            class="w-full rounded-md border border-gray-300 px-3 py-2"
            placeholder="您的姓名"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">電子郵件</label>
          <input
            type="email"
            class="w-full rounded-md border border-gray-300 px-3 py-2"
            placeholder="您的電子郵件"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">訊息</label>
          <textarea
            class="w-full rounded-md border border-gray-300 px-3 py-2"
            rows="4"
            placeholder="您的訊息"
          ></textarea>
        </div>
        <div class="text-center">
          <button type="submit" class="rounded-md bg-blue-500 px-4 py-2 text-white">送出</button>
        </div>
      </form>
    </div>
  </div>
</template>
