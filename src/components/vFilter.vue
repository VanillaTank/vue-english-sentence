<script setup>
import { ref, computed, toRefs, watch } from 'vue'

const props = defineProps({
  filter: { type: Object },
  color: { type: String },
  modelValue: { type: Object },
})
const { filter, color, modelValue } = toRefs(props)

const emit = defineEmits(['update:modelValue'])

const colors = {
  yellow: {
    headBg: 'bg-yellow-200',
    headBorder: 'border-yellow-400',
    bodyBg: 'bg-yellow-50',
    bodyBorder: 'border-yellow-500',
    textDecoration: 'decoration-yellow-400',
    selectedDot: 'bg-yellow-800',
  },
  purple: {
    headBg: 'bg-purple-200',
    headBorder: 'border-purple-300',
    bodyBg: 'bg-purple-50',
    bodyBorder: 'border-purple-400',
    textDecoration: 'decoration-purple-300',
    selectedDot: 'bg-purple-800',
  },
}
const colorDict = computed(() => colors[color.value])

const selectedOptions = ref([])

const selectOption = (option) => {
  const index = selectedOptions.value.indexOf(option.value)
  index === -1
    ? selectedOptions.value.push(option.value)
    : selectedOptions.value.splice(index, 1)

  emit('update:modelValue', selectedOptions.value)
}

watch(modelValue, (value) => {
  const clonedOptions = JSON.parse(JSON.stringify(filter.value.options))

  clonedOptions.forEach((option) => {
    option.checked = value.includes(option.value)
  })

  filter.value.options = clonedOptions
  filter.value.selectedOptionAmount = value.length
  selectedOptions.value = JSON.parse(JSON.stringify(value))
}, {
  immediate: true
})

</script>

<template>
  <div
    class="select-none cursor-pointer px-2 py-1 rounded border"
    :class="[colorDict.headBg, colorDict.headBorder]"
    @click.stop="filter.expanded = !filter.expanded"
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
      :class="[colorDict.textDecoration]"
      class="select-none cursor-pointer my-1 hover:underline decoration-2 italic flex items-center"
      @click="selectOption(option)"
    >
      <div
        v-if="option.checked"
        class="mr-1 rounded-full border flex items-center justify-center"
        :class="[colorDict.headBg, colorDict.headBorder]"
        style="width: 15px; height: 15px"
      >
        <div
          v-if="option.checked"
          class="rounded-full border"
          :class="[colorDict.selectedDot]"
          style="width: 9px; height: 9px"
        ></div>
      </div>
      {{ option.label }}
    </li>
  </ul>
</template>
