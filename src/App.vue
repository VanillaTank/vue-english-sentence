<script setup>
import VCardFilter from '@/layout/vCardFilter.vue'
import VCardList from '@/layout/vCardList.vue'
import VHowToUse from '@/components/vHowToUse.vue'
</script>

<template>
  <div class="bgi bg-no-repeat bg-[center_-80px] sm:bg-center bg-auto sm:bg-cover h-[115%] sm:h-full w-full fixed top-0 left-0 -z-10 bg-scroll"></div>
  <main class="h-screen w-full p-3 sm:overflow-hidden">
    <div class="max-w-[1200px] mx-auto sm:flex sm:h-full">
      <div class="sm:w-[285px] w-full max-h-full overflow-auto sm:rounded scroll-style scroll-pink sm:pr-1 fixed top-0 left-0 p-2.5 sm:static flex sm:block justify-between bgi bg-no-repeat bg-[center_-80px] bg-auto sm:!bg-none sm:!bg-transparent">
        <v-how-to-use />
        <v-card-filter />
      </div>
      <div class="sm:w-3/4 mt-[55px] sm:mt-0">
        <v-card-list />
      </div>
    </div>
  </main>
</template>

<style scoped>
.bgi {
  background-image: url('@/assets/bgk.jpg');
  background-color: #D5C1CC;
}
</style>
