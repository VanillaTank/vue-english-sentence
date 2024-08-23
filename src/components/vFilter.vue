<script setup>
import { computed, toRefs } from 'vue'

const props = defineProps({
  filter: { type: Object },
  color: { type: String },
})
const { filter, color } = toRefs(props)

const emit = defineEmits(['select'])

const colorDict = computed(() => {
  return {
    yellow: {
      headBg: 'bg-yellow-200',
      headBorder: 'border-yellow-400',
      bodyBg: 'bg-yellow-50',
      bodyBorder: 'border-yellow-500',
      textDecoration: 'decoration-yellow-400',
    },
    purple: {
      headBg: 'bg-purple-200',
      headBorder: 'border-purple-300',
      bodyBg: 'bg-purple-50',
      bodyBorder: 'border-purple-400',
      textDecoration: 'decoration-purple-300',
    },
  }[color.value]
})

const selectOption = (option, filter) => {
  option.checked = !option.checked
  filter.selectedOptionAmount = filter.options.filter(option => option.checked).length
  emit('select', { filterId: filter.id, value: option.value })
  // TODO сохранять выбранные фильтры в стор
}

</script>

<template>
  <div
    class="select-none cursor-pointer px-2 py-1 rounded border"
    :class="[colorDict.headBg, colorDict.headBorder]"
    @click="filter.expanded = !filter.expanded"
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
    class="p-2 border rounded-b border-t-0 mt-[-2px]"
    :class="[colorDict.bodyBg, colorDict.bodyBorder]"
  >
    <li
      v-for="option in filter.options"
      :key="option.value"
      :class="[colorDict.textDecoration, {'underline': option.checked}]"
      class="select-none cursor-pointer my-1 hover:underline decoration-2"
      @click="selectOption(option, filter)"
    >
      {{ option.label }}
    </li>
  </ul>
</template>

<style scoped>

</style>
