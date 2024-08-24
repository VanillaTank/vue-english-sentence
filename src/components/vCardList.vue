<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
import VCard from '@/components/vCard.vue'

const store = useStore()

const cards = computed(() => store.state.selectedCards)
</script>

<template>
  <div class="max-h-full overflow-auto rounded scroll-style scroll-pink pl-5 pr-2 flex flex-col gap-y-4">
    <v-card
      v-for="card in cards"
      :key="Object.values(card.cardFilter).join('-')"
      :card="card"
    ></v-card>
  </div>
</template>

<style scoped>

</style>
