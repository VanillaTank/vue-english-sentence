<script setup>
import VCardFilter from '@/layout/vCardFilter.vue'
import VCardList from '@/layout/vCardList.vue'
import VHowToUse from '@/components/vHowToUse.vue'
</script>

<template>
  <main class="h-screen w-full p-3 overflow-hidden main bg-no-repeat bg-center bg-cover">
    <div class="max-w-[1200px] mx-auto flex h-full">
      <div class="w-1/3 max-h-full overflow-auto rounded scroll-style scroll-pink pr-1">
        <v-how-to-use />
        <v-card-filter />
      </div>
      <div class="w-2/3">
        <v-card-list />
      </div>
    </div>
  </main>
</template>

<style scoped>
.main {
  background-image: url('@/assets/bgk.jpg');
  background-color: #D5C1CC;
}
</style>
