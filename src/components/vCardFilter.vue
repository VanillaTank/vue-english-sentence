<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { generalCardFilters } from '@/data'
import { exampleFilter } from '@/data'

const route = useRoute()
const cardFilters = ref([])
const exampleFilters = ref([])

watch(
  () => route.name,
  (routeName) => {
    exampleFilters.value = exampleFilter.map(item => {
      const options = item.options.map(opt => ({
        checked: false,
        ...opt,
      }))
      return {
        expanded: false,
        selectedOptionAmount: 0,
        options,
        ...item,
      }
    })
    cardFilters.value = []

    if (routeName === 'general') {
      cardFilters.value = generalCardFilters.map(item => {
        const options = item.options.map(opt => ({
          checked: false,
          ...opt,
        }))
        return {
          expanded: false,
          selectedOptionAmount: 0,
          options,
          ...item,
        }
      })
    }
  },
  {
    immediate: true,
  },
)

const toggleVisibility = (filter) => {
  filter.expanded = !filter.expanded
}

const selectOption = (cardFilterId, value, option, filter) => {
  option.checked = !option.checked

  filter.selectedOptionAmount = filter.options.filter(option => option.checked).length

  // TODO сохранять выбранные фильтры в стор
}

const mainFilter = ref([
  'general',
  'conditional',
])

</script>

<template>
  <div class="max-h-full overflow-auto border bg-white rounded p-2">
    <!-- MAIN FILTER -->
    <div class="p-2">
      <h6 class="title mb-2">MAIN FILTER</h6>
      <ul class="flex gap-2">
        <li
          v-for="item of mainFilter"
        >
          <RouterLink
            :to="item"
            class="inline-block select-none cursor-pointer p-2 rounded bg-red-200 border border-red-300"
          >
            {{item}}
          </RouterLink>
        </li>
      </ul>
    </div>


    <!-- CARD FILTER -->
    <div class="border-b border-t border-red-300 p-2">
      <h6 class="title mb-2">CARD FILTER</h6>
      <div
        v-for="cardFilter in cardFilters"
        :key="cardFilter.id"
        class="mb-3"
      >
        <div
          class="select-none cursor-pointer p-2 rounded bg-yellow-200 border border-yellow-400"
          @click="toggleVisibility(cardFilter)"
        >
          {{ cardFilter.title }}
          <span
            v-if="cardFilter.selectedOptionAmount"
            class="opacity-80"
          >
            ({{ cardFilter.selectedOptionAmount }})
          </span>
        </div>
        <ul
          v-if="cardFilter.expanded"
          class="p-2 border border-yellow-500 rounded-b border-t-0 mt-[-5px] bg-yellow-50"
        >
          <li
            v-for="option in cardFilter.options"
            :key="option.value"
            :class="{'underline': option.checked}"
            class="select-none cursor-pointer my-1 hover:underline decoration-yellow-400 decoration-2"
            @click="selectOption(cardFilter.id, option.value, option, cardFilter)"
          >
            {{ option.label }}
          </li>
        </ul>
      </div>
    </div>


    <!-- EXAMPLE FILTER -->
    <div class="p-2">
      <h6 class="title mb-2">EXAMPLE FILTER</h6>
      <div
        v-for="filter in exampleFilters"
        :key="filter.id"
        class="mb-3"
      >
        <div
          class="select-none cursor-pointer p-2 rounded bg-purple-200 border border-purple-300"
          @click="toggleVisibility(filter)"
        >
          {{ filter.title }}
          <span
            v-if="filter.selectedOptionAmount"
            class="opacity-80"
          >
            ({{ filter.selectedOptionAmount }})
          </span>
        </div>
        <ul
          v-if="filter.expanded"
          class="p-2 border border-purple-400 rounded-b border-t-0 mt-[-5px] bg-purple-50"
        >
          <li
            v-for="option in filter.options"
            :key="option.value"
            :class="{'underline': option.checked}"
            class="select-none cursor-pointer my-1 hover:underline decoration-purple-300 decoration-2"
            @click="selectOption(filter.id, option.value, option, filter)"
          >
            {{ option.label }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  font-size: 18px;
  font-weight: lighter;
}
</style>

