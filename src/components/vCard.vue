<script setup>
import { computed, ref, toRefs } from 'vue'

const props = defineProps({
  card: { type: Object },
})
const { card } = toRefs(props)

const showFullTheory = ref(false)

const notExamples = computed(() => {
  return card.value.examples.every(example => !example.show)
})
</script>

<template>
  <div class="border bg-white rounded p-4 v-shadow card">
    <h3 class="text-center text-2xl">{{ card.title }}</h3>

    <div class="flex items-baseline">
      <h4 class="card__sub-title grow">THEORY</h4>
      <div
        v-if="showFullTheory"
        class="cursor-pointer text-sm ml-4"
        @click="showFullTheory = false"
      >Свернуть
      </div>
    </div>
    <div
      v-html="card.theory"
      class="leading-7 overflow-hidden text-sm theory"
      :class="[showFullTheory ? 'max-h-full' : 'max-h-16 opacity-80']"
    ></div>
    <div
      class="cursor-pointer text-sm"
      @click="showFullTheory = !showFullTheory"
    >
      {{ showFullTheory ? 'Свернуть...' : 'Развернуть...' }}
    </div>

    <h4 class="card__sub-title">SCHEMAS</h4>
    <p
      v-for="(schema, index) of card.schemas"
      :key="index"
      class="rounded py-2 px-3 bg-lime-100 mb-2.5 border border-lime-200"
    >
      {{ schema }}
    </p>

    <h4 class="card__sub-title">EXAMPLES</h4>
    <div
      v-for="example of card.examples"
      :key="Object.values(example.exampleFilter).join('-')"
      class="mb-3.5"
    >
      <template v-if="example.show">
        <div
          v-for="(text, index) of example.texts"
          :key="index"
          class="mb-2"
        >
          <p>{{ text.en }}</p>
          <p class="text-sm text-gray-800">{{ text.ru }}</p>
          <p v-if="text.comment" class="comment">{{ text.comment }}</p>
        </div>
      </template>
    </div>

    <div
      v-if="notExamples"
      class="text-sm text-gray-800"
    >
      Нет примеров для выбранных фильтров. Попробуйте выбрать другие варианты.
    </div>

  </div>
</template>

<style scoped>

</style>
