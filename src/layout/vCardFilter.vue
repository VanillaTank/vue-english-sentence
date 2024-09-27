<script setup>
import { computed, ref, watch } from 'vue'
import { filters } from '@/data/index.js'
import { useStore } from 'vuex'
import VFiltersBlock from '@/components/vFiltersBlock.vue'

const store = useStore()
const cardFilters = ref([])
const exampleFilters = ref([])
const { themeFilters, timesCardFilters, conditionalCardFilters, exampleFilter } = filters

const selectedThemeFilter = computed(() => store.state.selectedThemeFilter)
watch(
  selectedThemeFilter,
  (newVal) => {
    cardFilters.value = []
    exampleFilters.value = []

    if (newVal === 'times') {
      cardFilters.value = timesCardFilters
      exampleFilters.value = JSON.parse(JSON.stringify(exampleFilter))
    }

    if (newVal === 'conditional') {
      cardFilters.value = conditionalCardFilters
      exampleFilters.value = JSON.parse(JSON.stringify(exampleFilter))
    }
  },
  { immediate: true },
)

</script>

<template>
  <div class="border bg-white rounded p-2 v-shadow">
    <!-- THEME FILTER -->
    <div class="p-2">
      <h6 class="font-light	mb-2">theme filter</h6>
      <ul class="flex gap-2 flex-wrap">
        <li
          v-for="item of themeFilters"
          :key="item.title"
        >
          <RouterLink
            :to="item.title"
            :active-class="'!bg-indigo-200 !border-indigo-300'"
            class="uppercase inline-block select-none cursor-pointer px-2 py-1 rounded bg-red-200 border border-red-300"
          >
            {{ item.title }}
          </RouterLink>
        </li>
      </ul>
    </div>

    <!-- CARD FILTER -->
    <div class="border-b border-t border-red-300 p-2">
      <v-filters-block
        color="yellow"
        title="card filter"
        type="selectedCardFilters"
        updateStateActionName="updateSelectedCardFilters"
        :rawFilters="cardFilters"
      />
    </div>

    <!-- EXAMPLE FILTER -->
    <div class="p-2">
      <v-filters-block
        color="purple"
        title="example filter"
        type="selectedExampleFilters"
        updateStateActionName="updateSelectedExampleFilters"
        :rawFilters="exampleFilters"
      />
  </div>
  </div>
</template>
