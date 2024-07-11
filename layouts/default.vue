<template>
  <div class="flex min-h-screen flex-col">
    <TheHeader />
    <div class="flex-grow">
      <!-- class="flex-grow" 允許其增長並填充可用空間，將頁尾推到底部。 -->
      <slot />
    </div>
    <TheFooter />
  </div>
</template>
