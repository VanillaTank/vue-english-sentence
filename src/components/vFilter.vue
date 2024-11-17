<script setup>
import { ref, computed, toRefs, watch } from 'vue'
import VTriangleIcon from '@/components/icons/vTriangleIcon.vue'

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
    headTriangleFill: 'fill-yellow-500',
    bodyBg: 'bg-yellow-50',
    bodyBorder: 'border-yellow-400',
    textDecoration: 'decoration-yellow-400',
    selectedDot: 'bg-yellow-800',
  },
  purple: {
    headBg: 'bg-purple-200',
    headBorder: 'border-purple-300',
    headTriangleFill: 'fill-purple-500',
    bodyBg: 'bg-purple-50',
    bodyBorder: 'border-purple-300',
    textDecoration: 'decoration-purple-300',
    selectedDot: 'bg-purple-800',
  },
}
const colorDict = computed(() => colors[color.value])

const selectedOptions = ref([])

const selectOption = (option) => {
  const index = selectedOptions.value.value.indexOf(option.value)
  index === -1
    ? selectedOptions.value.value.push(option.value)
    : selectedOptions.value.value.splice(index, 1)

  emit('update:modelValue', { expended: selectedOptions.value.expended,  value: selectedOptions.value.value })
}

watch(modelValue, (value) => {
  const clonedOptions = JSON.parse(JSON.stringify(filter.value.options))

  clonedOptions.forEach((option) => {
    option.checked = value.value.includes(option.value)
  })

  filter.value.options = clonedOptions
  filter.value.selectedOptionAmount = value.length
  filter.value.expended = value.expended
  selectedOptions.value = JSON.parse(JSON.stringify(value))
}, {
  immediate: true,
})

const changeExpended = () => {
  emit('update:modelValue', { expended: !filter.value.expended,  value: modelValue.value.value })
}

</script>

<template>
  <div
    class="select-none cursor-pointer px-2 py-1 rounded border flex items-center justify-between"
    :class="[colorDict.headBg, colorDict.headBorder]"
    @click.stop="changeExpended"
  >
    <div>
      {{ filter.title }}
      <span
        v-if="filter.selectedOptionAmount"
        class="opacity-80"
      >
      ({{ filter.selectedOptionAmount }})
    </span>
    </div>

    <v-triangle-icon
      :class="[
        colorDict.headTriangleFill,
        !filter.expended ? 'rotate-180' : ''
      ]"
    />
  </div>
  <ul
    v-if="filter.expended"
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
        class="mr-1 rounded-sm border flex items-center justify-center"
        :class="[colorDict.headBg, colorDict.headBorder]"
        style="width: 15px; height: 15px"
      >
        <div
          v-if="option.checked"
          class="rounded-sm border"
          :class="[colorDict.selectedDot]"
          style="width: 9px; height: 9px"
        ></div>
      </div>
      {{ option.label }}
    </li>
  </ul>
</template>
