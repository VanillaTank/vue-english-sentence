import { createStore } from 'vuex'
import activePastSimple from '@/data/generalData/ActivePastSimple'
import activePresentSimple from '@/data/generalData/ActivePresentSimple'

const generalCards = [
  activePastSimple,
  activePresentSimple,
]

export default createStore({
  state() {
    return {
      selectedMainFilter: 'general', // 'general', 'conditional'
      selectedCardFilters: { time: ['past'], timeType: ['simple'], voice: ['active'] },
      selectedExampleFilters: { pronoun: ['I', 'heSheIt'], verb: ['regular'], sentenceType: ['statement'] },

      fullCardByMainFilter: [],
      selectedCards: [],
    }
  },
  actions: {
    updateSelectedMainFilter({ commit, state }, payload) {
      state.selectedMainFilter = payload

      if (payload === 'general') {
        state.selectedCards = structuredClone(generalCards)
      } else if (payload === 'conditional') {
        state.selectedCards = []
      }

      commit('updateSelectedCardFilters', null)
      commit('updateSelectedExampleFilters', null)
    },
  },
  mutations: {
    updateSelectedCardFilters(state, payload) {
      if (payload) {
        Object.keys(payload).forEach((filterId) => {
          state.selectedCardFilters[filterId] = payload[filterId]
        })
      }

      const filtersKeys = Object.keys(state.selectedCardFilters)
      state.selectedCards.forEach(card => {
        card.show = filtersKeys.every(fKey => {
          // eslint-disable-next-line no-prototype-builtins
          if (state.selectedCardFilters[fKey].length) {
            return state.selectedCardFilters[fKey].includes(card.cardFilter[fKey])
          }
          return true
        })
      })
    },
    updateSelectedExampleFilters(state, payload) {
      if (payload) {
        Object.keys(payload).forEach((filterId) => {
          state.selectedExampleFilters[filterId] = payload[filterId]
        })
      }

      const filtersKeys = Object.keys(state.selectedExampleFilters)

      if (!filtersKeys.length || Object.values(state.selectedExampleFilters).every(arr => !arr.length)) {
        state.selectedCards.forEach(card => card.examples.forEach(example => example.show = false))
        return
      }

      state.selectedCards.forEach((card) => {
        if (card.show) {
          card.examples.forEach((example) => {
            example.show = filtersKeys.every(fKey => {
              if (state.selectedExampleFilters[fKey].length) {
                return state.selectedExampleFilters[fKey].includes(example.exampleFilter[fKey])
              }
              return true
            })
          })
        }
      })
    },
  },
})
