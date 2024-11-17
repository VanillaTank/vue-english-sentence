<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
import VCard from '@/components/vCard.vue'

const store = useStore()

const cards = computed(() => store.state.selectedCards)
</script>

<template>
  <div class="max-h-full overflow-auto rounded scroll-style scroll-pink sm:pl-5 sm:pr-2 flex flex-col gap-y-4">
    <div
      v-if="cards.every(card => !card.show)"
      class="text-sm text-gray-800 border bg-white rounded p-4 v-shadow card"
    >
      Нет карточек для выбранного сочетания фильтров. Попробуйте выбрать другие варианты.
    </div>
    <template v-else>
      <v-card
        v-for="card in cards"
        :key="Object.values(card.cardFilter).join('-')"
        :card="card"
      ></v-card>
    </template>
  </div>
</template>

<style scoped>

</style>
