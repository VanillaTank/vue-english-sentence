<script setup>
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { ref, toRefs, watch } from 'vue'
import VCloseIcon from '@/components/icons/vCloseIcon.vue'

const props = defineProps({
  openModal: { type: Boolean, default: false },
  title: { type: String, required: true },
  allowCloseByBackClick: { type: Boolean, default: false },
  disableHeaderClose: { type: Boolean, default: false },
  okDisabled: { type: Boolean, default: false },
  justOk: { type: Boolean, default: false },
  position: { type: String, default: 'center', validator(value) { return ['center', 'top'].includes(value) }
  },
})
const { openModal, allowCloseByBackClick, okDisabled, justOk, position } = toRefs(props)

const emit = defineEmits(['close', 'ok'])

const open = ref(false)
watch(openModal, (newVal) => {
  open.value = newVal
})

const closeIfAllow = () => {
  if (!allowCloseByBackClick.value) {
    return
  }

  emit('close')
}
const ok = () => {
  if (okDisabled.value) {
    return
  }

  emit('ok')
}

</script>

<template>
  <TransitionRoot as="template" :show="open">
    <Dialog class="relative z-10" @close="closeIfAllow">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                       leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div
          class="flex min-h-full justify-center p-4 text-center sm:p-0"
          :class="{
          'items-center': position === 'center',
          'items-start': position === 'top'
        }"
        >
          <TransitionChild as="template" enter="ease-out duration-300"
                           enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                           enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                           leave-from="opacity-100 translate-y-0 sm:scale-100"
                           leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <!--  ЗАГОЛОВОК  -->
                    <div class="flex items-center">
                      <DialogTitle as="h3" class="text-base leading-6 text-gray-900 grow">
                        {{ title }}
                      </DialogTitle>
                      <span
                        v-if="!disableHeaderClose"
                        class="ml-2 cursor-pointer"
                        @click="emit('close')"
                      >
                        <v-close-icon />
                      </span>
                    </div>

                    <!--  КОНТЕНТ  -->
                    <div class="mt-2">
                      <slot></slot>
                    </div>
                  </div>
                </div>
              </div>

              <!--  ФУТЕР  -->
              <div class="bg-soft-pink px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  :disabled="okDisabled"
                  type="button"
                  class="inline-flex w-full justify-center rounded-md px-3 bg-lime-500 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto"
                  :class="{
                    'cursor-not-allowed': okDisabled,
                    'hover:bg-lime-400': !okDisabled,
                  }"
                  @click="ok"
                >
                  ОК
                </button>
                <button
                  v-if="!justOk"
                  type="button"
                        class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        @click="emit('close')" ref="cancelButtonRef">Отмена
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
