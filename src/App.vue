<script setup>
import VCardFilter from '@/components/vCardFilter.vue'
import VCardList from '@/components/vCardList.vue'
</script>

<template>
  <main class="h-screen w-full p-3 overflow-hidden main bg-no-repeat bg-center bg-cover">
    <div class="max-w-[1200px] mx-auto flex h-full">
      <div class="w-1/3">
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
