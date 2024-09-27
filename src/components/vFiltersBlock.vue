<script setup>
import VFilter from '@/components/vFilter.vue'
import { computed, ref, toRefs, watch } from 'vue'
import { useStore } from 'vuex'
import { getLocalforage } from '@/storage/index.js'
import themeFilters from '@/data/filters/themeFilters.js'

const store = useStore()
const selectedThemeFilter = computed(() => store.state.selectedThemeFilter)

const props = defineProps({
  title: { type: String, required: true },
  type: { type: String, required: true },
  color: { type: String, required: true, validator: (prop) => ['yellow', 'purple'].includes(prop) },
  rawFilters: { type: Object, required: true },
  updateStateActionName: {
    type: String,
    required: true,
    validator: (prop) => ['updateSelectedCardFilters', 'updateSelectedExampleFilters'].includes(prop),
  },
})
const { rawFilters } = toRefs(props)
const { title, color, updateStateActionName, type } = props

const filters = ref([])
const filtersModel = ref({})
const isInit = ref(false)

const selectedFiltersByDefault = ref({})

watch(rawFilters, (newVal) => {
  isInit.value = true // должен срабатывать, когда родитель вотчит смену фильтра темы и обновляет сырые фильтры

  getLocalforage(selectedThemeFilter.value)
    .then(res => {
      if (!res) {
        selectedFiltersByDefault.value = themeFilters.find(({title}) => title === selectedThemeFilter.value).selectedFiltersByDefault[type]
      } else {
        selectedFiltersByDefault.value = JSON.parse(res)[type]
      }

      filters.value = newVal.map((filter) => {
        const options = filter.options.map(opt => ({
          checked: false,
          ...opt,
        }))

        const expanded = !!selectedFiltersByDefault.value[filter.id]?.length

        return {
          ...filter,
          selectedOptionAmount: 0,
          expanded,
          options,
        }
      })
      filtersModel.value = setFiltersModel(filters.value, selectedFiltersByDefault.value)
    })
},
  { immediate: true }
)

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
