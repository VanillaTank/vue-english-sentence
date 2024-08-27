<script setup>
import VModal from '@/components/vModal.vue'
import { ref } from 'vue'

const open = ref(false)
</script>

<template>
  <button
    class="mb-4 border bg-white rounded p-2 v-shadow w-full hover:bg-soft-pink"
    @click="open = true"
  >
    How to use?
  </button>
  <v-modal
    title="HOW TO USE"
    :openModal="open"
    position="top"
    disable-header-close
    just-ok
    @ok="open = false"
  >
    <div class="mb-1">
      1. Выберете тему.
      <div class="text-sm">Например, times.</div>
    </div>
    <div class="mb-1">
      2. Выберете карточки, нажав на интересующие вас аспекты темы.
      <div class="text-sm">Например, time - present, time type - simple</div>
    </div>
    <div class="mb-1">
      3. Установите параметры для вывода примеров (если параметры не указаны, примеры не будут выведены).
      <div class="text-sm">Например, pronoun - I, verb - regular.</div>
    </div>

    <div class="mt-5">Изучите карточки и примеры, отфильтрованные по указанным параметрам.</div>
  </v-modal>
</template>

<style scoped>

</style>
