<script setup>
import VFilter from '@/components/vFilter.vue'
import { computed, ref, watch } from 'vue'
import { filters } from '@/data'
import { useStore } from 'vuex'

const store = useStore()
const cardFilters = ref([])
const exampleFilters = ref([])
const { themeFilters, timesCardFilters, exampleFilter } = filters;

function formatFilter(filter) {
  const options = filter.options.map(opt => ({
    checked: false,
    ...opt,
  }))
  return {
    expanded: true,
    selectedOptionAmount: 0,
    options,
    ...filter,
  }
}

const updateSelectedCardFilters = (data) => {
  return store.dispatch('updateSelectedCardFilters', data)
}

const updateSelectedExampleFilters = (data) => {
  return store.dispatch('updateSelectedExampleFilters', data)
}

const cardFiltersModel = ref({})
const exampleFiltersModel = ref({})

const selectedThemeFilter = computed(() => store.state.selectedThemeFilter)
const selectedCardFilters = computed(() => store.state.selectedCardFilters)
const selectedExampleFilters = computed(() => store.state.selectedExampleFilters)
watch(
  selectedThemeFilter,
  (newVal) => {
    cardFilters.value = []
    exampleFilters.value = []

    if (newVal === 'times') {
      cardFilters.value = timesCardFilters.map(formatFilter)
      cardFiltersModel.value = setFiltersModel(cardFilters.value, selectedCardFilters.value)

      exampleFilters.value = exampleFilter.map(formatFilter)
      exampleFiltersModel.value = setFiltersModel(exampleFilters.value, selectedExampleFilters.value)
    }

    if (newVal === 'conditional') {
      // todo
    }
  },
  {
    immediate: true,
  },
)

function setFiltersModel (filters, selectedFilters) {
  const preparedFiltersModel = {}
  filters.forEach(filter => {
    preparedFiltersModel[filter.id] = selectedFilters[filter.id] || [];
  });
  return preparedFiltersModel
}

watch(cardFiltersModel, (newVal) => { updateSelectedCardFilters(newVal)}, { deep: true })
watch(exampleFiltersModel, (newVal) => { updateSelectedExampleFilters(newVal)}, { deep: true })

</script>

<template>
  <div class="border bg-white rounded p-2 v-shadow">
    <!-- THEME FILTER -->
    <div class="p-2">
      <h6 class="font-light	mb-2">theme filter</h6>
      <ul class="flex gap-2">
        <li
          v-for="item of themeFilters"
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
          v-model="cardFiltersModel[filter.id]"
          color="yellow"
          :filter="filter"
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
          v-model="exampleFiltersModel[filter.id]"
          color="purple"
          :filter="filter"
        />
      </div>
    </div>
  </div>
</template>
