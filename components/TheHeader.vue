<template>
  <div class="border border-gray-300 p-3">
    <div class="flex items-center justify-between">
      <NuxtLink to="/" class="text-2xl font-semibold text-gray-500">兆豐輪胎保養廠</NuxtLink>
      <div class="ml-auto hidden md:flex">
        <NuxtLink to="/serve-content" class="mr-5 hover:text-blue-700">服務項目</NuxtLink>
        <NuxtLink to="/location" class="mr-5 hover:text-blue-700" @click.native="closeMenu">聯絡資訊</NuxtLink>
        <NuxtLink to="/info" class="hover:text-blue-700" @click.native="closeMenu">關於兆豐</NuxtLink>
      </div>
      <button class="text-gray-500 md:hidden" @click="toggleMenu">
        <svg
          class="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            v-if="!menuOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    </div>
    <transition name="fade">
      <div v-if="menuOpen" class="mt-3 flex flex-col space-y-2 md:hidden">
        <NuxtLink to="/serve-content" class="hover:text-blue-700" @click.native="closeMenu">服務項目</NuxtLink>
        <NuxtLink to="/location" class="hover:text-blue-700" @click.native="closeMenu">聯絡資訊</NuxtLink>
        <NuxtLink to="/info" class="hover:text-blue-700" @click.native="closeMenu">關於兆豐</NuxtLink>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
    closeMenu() {
      this.menuOpen = false
    }
  }
}
</script>

<style>
/* 添加必要的過渡效果 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
