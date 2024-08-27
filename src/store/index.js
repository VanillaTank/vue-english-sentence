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
      selectedCards: [],
    }
  },
  actions: {
    updateSelectedMainFilter({ commit, dispatch }, payload) {
      commit('SET_SELECTED_MAIN_FILTER', payload)

      if (payload === 'general') {
        commit('SET_SELECTED_CARDS', structuredClone(generalCards))
      } else if (payload === 'conditional') {
        commit('SET_SELECTED_CARDS', [])
      }

      dispatch('updateSelectedCardFilters', null)
      dispatch('updateSelectedExampleFilters', null)
    },
    updateSelectedCardFilters({ state, commit, dispatch }, payload) {
      if (payload) {
        Object.keys(payload).forEach((filterId) => {
          commit('SET_SELECTED_CARD_FILTER', { filterId, data: payload[filterId] })
        })
      }

      const filtersKeys = Object.keys(state.selectedCardFilters)
      state.selectedCards.forEach(card => {
        const prevShow = card.show
        card.show = filtersKeys.every(fKey => {
          // eslint-disable-next-line no-prototype-builtins
          if (state.selectedCardFilters[fKey].length) {
            return state.selectedCardFilters[fKey].includes(card.cardFilter[fKey])
          }
          return true
        })
        if (card.show && !prevShow) {
          dispatch('updateExamplesForCard',  { cardId: card.id })
        }
      })
    },
    updateSelectedExampleFilters({ state, commit }, payload) {
      if (payload) {
        Object.keys(payload).forEach((filterId) => {
          commit('SET_SELECTED_EXAMPLE_FILTER', { filterId, data: payload[filterId] })
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
    updateExamplesForCard({ state }, { cardId }) {
      const filtersKeys = Object.keys(state.selectedExampleFilters)

      state.selectedCards
        .find(card => card.id === cardId).examples
        .forEach((example) => {
          example.show = filtersKeys.every(fKey => {
            if (state.selectedExampleFilters[fKey].length) {
              return state.selectedExampleFilters[fKey].includes(example.exampleFilter[fKey])
            }
            return true
          })
        })
    },
  },
  mutations: {
    SET_SELECTED_MAIN_FILTER(state, payload) {
      state.selectedMainFilter = payload
    },
    SET_SELECTED_CARD_FILTER(state, { filterId, data }) {
      state.selectedCardFilters[filterId] = data
    },
    SET_SELECTED_EXAMPLE_FILTER(state, { filterId, data }) {
      state.selectedExampleFilters[filterId] = data
    },
    SET_SELECTED_CARDS(state, payload) {
      state.selectedCards = payload
    },
  },
})
