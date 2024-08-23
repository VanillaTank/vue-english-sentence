import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      selectedMainFilter: 'general', // 'general', 'conditional'
      selectedCardFilters: {},
      selectedExampleFilters: {},
    }
  },
  mutations: {
    updateSelectedMainFilter(state, payload) {
      state.selectedMainFilter = payload
    },
    updateSelectedCardFilters(state, payload) {
      state.selectedCardFilters[payload.filterId] = payload.value
    },
    updateSelectedExampleFilters(state, payload) {
      state.selectedExampleFilters[payload.filterId] = payload.value
    },
  },
})
