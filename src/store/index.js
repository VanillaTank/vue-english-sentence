import { createStore } from 'vuex'
import activePastSimple from '@/data/generalData/ActivePastSimple'
import activePresentSimple from '@/data/generalData/ActivePresentSimple'

const generalCards = [
  normalizeCardData(activePastSimple),
  normalizeCardData(activePresentSimple),
]

function normalizeCardData (card) {
  const examples = card.examples.map(example => example.show = true)
  return {
    examples,
    ...card,
  }
}

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

      if (payload === 'general') {
        state.selectedCards = generalCards
      }
    },
    updateSelectedCardFilters(state, payload) {
      state.selectedCardFilters[payload.filterId] = payload.value
    },
    updateSelectedExampleFilters(state, payload) {
      state.selectedExampleFilters[payload.filterId] = payload.value
    },
  },
})
