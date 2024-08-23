<script setup>
import VFilter from '@/components/vFilter.vue'
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

// TODO сохранять выбранные фильтры в стор


const mainFilter = ref([
  'general',
  'conditional',
])

</script>

<template>
  <div class="max-h-full overflow-auto border bg-white rounded p-2 v-shadow scroll-style scroll-pink">
    <!-- MAIN FILTER -->
    <div class="p-2">
      <h6 class="font-light	mb-2">main filter</h6>
      <ul class="flex gap-2">
        <li
          v-for="item of mainFilter"
          :key="item"
        >
          <RouterLink
            :to="item"
            :active-class="'!bg-indigo-200 !border-indigo-300'"
            class="uppercase inline-block select-none cursor-pointer px-2 py-1 rounded bg-red-200 border border-red-300"
          >
            {{item}}
          </RouterLink>
        </li>
      </ul>
    </div>

    <!-- CARD FILTER -->
    <div class="border-b border-t border-red-300 p-2">
      <h6 class="font-light	mb-2">card filter</h6>
      <div
        v-for="filter in cardFilters"
        :key="filter.id"
        class="mb-3"
      >
        <v-filter
          :filter="filter"
          color="yellow"
        />
      </div>
    </div>

    <!-- EXAMPLE FILTER -->
    <div class="p-2">
      <h6 class="font-light mb-2">example filter</h6>
      <div
        v-for="filter in exampleFilters"
        :key="filter.id"
        class="mb-3"
      >
        <v-filter
          :filter="filter"
          color="purple"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

