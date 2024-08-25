<script setup>
import { ref, toRefs } from 'vue'

const props = defineProps({
  card: { type: Object },
})
const { card } = toRefs(props)

const showFullTheory = ref(false)
</script>

<template>
  <div
    v-if="card.show"
    class="border bg-white rounded p-4 v-shadow card"
  >
    <h3 class="text-center text-2xl">{{ card.title }}</h3>

    <div class="flex items-baseline">
      <h4 class="card__sub-title grow">THEORY</h4>
      <span
        v-if="showFullTheory"
        class="cursor-pointer text-sm ml-4"
        @click="showFullTheory = false"
      >Свернуть
      </span>
    </div>
    <div
      v-html="card.theory"
      class="leading-7 overflow-hidden text-sm theory text-[#726068]"
      :class="[showFullTheory ? 'max-h-full' : 'max-h-14']"
    ></div>
    <span
      class="cursor-pointer text-sm"
      @click="showFullTheory = !showFullTheory"
    >
      {{ showFullTheory ? 'Свернуть...' : 'Развернуть...' }}
    </span>

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
      v-if="card.examples.every(example => !example.show)"
      class="text-sm text-gray-800"
    >
      Нет примеров для выбранного сочетания фильтров. Попробуйте выбрать другие варианты.
    </div>

  </div>
</template>

<style scoped>
.theory * {
  color: inherit;
}
</style>
