<script setup>
import VFilter from '@/components/vFilter.vue'
import { ref, toRefs, watch } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const props = defineProps({
  title: { type: String, required: true, },
  color: { type: String, required: true, validator: (prop) => ['yellow', 'purple'].includes(prop) },
  rawFilters: { type: Object, required: true, },
  selectedFiltersByDefault: {type: Object, required: true },
  updateStateActionName: { type: String, required: true, validator: (prop) => ['updateSelectedCardFilters', 'updateSelectedExampleFilters'].includes(prop) },
})
const { rawFilters, selectedFiltersByDefault } = toRefs(props)
const { title, color, updateStateActionName  } = props

const filters = ref([])
const filtersModel = ref({})
const isInit = ref(false)

watch(rawFilters, (newVal) => {
  isInit.value = true // должен срабатывать, когда родитель вотчит смену фильтра темы и обновляет сырые фильтры
  filters.value = newVal.map((filter) => {
    const options = filter.options.map(opt => ({
      checked: false,
      ...opt,
    }))
    return {
      ...filter,
      expanded: true, // todo Развернуть те, которые выбраны по дефолту
      selectedOptionAmount: 0,
      options,
    }
  })
  filtersModel.value = setFiltersModel(filters.value, selectedFiltersByDefault.value)
})

function setFiltersModel(filters, selectedFilters) {
  const preparedFiltersModel = {}

  filters.forEach(filter => {
    preparedFiltersModel[filter.id] = selectedFilters[filter.id] || []
  })
  return preparedFiltersModel
}

watch(filtersModel, (newVal) => {
  store.dispatch(updateStateActionName, { filters: newVal, full: isInit.value })
  isInit.value = false
}, { deep: true })

</script>

<template>
  <h6 class="font-light	mb-2">{{ title }}</h6>
  <div
    v-for="filter in filters"
    :key="filter.id"
    class="mb-3"
  >
    <v-filter
      v-model="filtersModel[filter.id]"
      :color="color"
      :filter="filter"
    />
  </div>
</template>

<style scoped>

</style>
