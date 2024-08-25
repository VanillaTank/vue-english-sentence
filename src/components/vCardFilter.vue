<script setup>
import VFilter from '@/components/vFilter.vue'
import { computed, ref, watch } from 'vue'
import { mainFilters, generalCardFilters, exampleFilter } from '@/data'
import { useStore } from 'vuex'

const store = useStore()
const cardFilters = ref([])
const exampleFilters = ref([])

function formatFilter(filter) {
  const options = filter.options.map(opt => ({
    checked: false,
    ...opt,
  }))
  return {
    expanded: false,
    selectedOptionAmount: 0,
    options,
    ...filter,
  }
}

const updateSelectedCardFilters = (data) => {
  return store.commit('updateSelectedCardFilters', data)
}

const updateSelectedExampleFilters = (data) => {
  return store.commit('updateSelectedExampleFilters', data)
}

const selectedMainFilter = computed(() => store.state.selectedMainFilter)
watch(
  selectedMainFilter,
  (newVal) => {
    cardFilters.value = []
    exampleFilters.value = []

    if (newVal === 'general') {
      cardFilters.value = generalCardFilters.map(formatFilter)
      exampleFilters.value = exampleFilter.map(formatFilter)
    }
    if (newVal === 'conditional') {
      // todo
    }
  },
  {
    immediate: true,
  },
)

const onChange = (data, filterType) => {
  if (filterType === 'card') {
    updateSelectedCardFilters(data)
  } else if (filterType === 'example') {
    updateSelectedExampleFilters(data)
  }
}
</script>

<template>
  <div class="max-h-full overflow-auto border bg-white rounded p-2 v-shadow scroll-style scroll-pink">
    <!-- MAIN FILTER -->
    <div class="p-2">
      <h6 class="font-light	mb-2">main filter</h6>
      <ul class="flex gap-2">
        <li
          v-for="item of mainFilters"
          :key="item"
        >
          <RouterLink
            :to="item"
            :active-class="'!bg-indigo-200 !border-indigo-300'"
            class="uppercase inline-block select-none cursor-pointer px-2 py-1 rounded bg-red-200 border border-red-300"
          >
            {{ item }}
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
          @change="onChange($event, 'card')"
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
          @change="onChange($event, 'example')"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

