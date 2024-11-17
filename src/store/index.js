import { createStore } from 'vuex'
import { timesCards, conditionalCards } from '@/data'
import { setLocalforage } from '@/storage/index.js'

export default createStore({
  state() {
    return {
      selectedThemeFilter: '', // 'times', 'conditional'
      selectedCardFilters: {},
      selectedExampleFilters: {},
      selectedCards: [],
    }
  },
  actions: {
    updateSelectedThemeFilter({ commit }, payload) {
      if(!payload) return

      commit('SET_SELECTED_THEME_FILTER', payload)

      let fullThemeCards
      if (payload === 'times') { fullThemeCards = JSON.parse(JSON.stringify(timesCards)) }
      else if (payload === 'conditional') { fullThemeCards = JSON.parse(JSON.stringify(conditionalCards)) }

      commit('SET_SELECTED_CARDS', fullThemeCards)
    },
    updateSelectedCardFilters({ state, commit, dispatch }, { filters, full = false }) {
      if (!full) {
        Object.keys(filters).forEach((filterId) => {
          commit('SET_SELECTED_CARD_FILTER', { filterId, data: filters[filterId] })
        })
      } else {
        commit('SET_FULL_CARD_FILTER', filters)
      }
      dispatch('updateLocalforage')

      const filtersKeys = Object.keys(state.selectedCardFilters)
      state.selectedCards.forEach(card => {
        const prevShow = card.show
        card.show = filtersKeys.every(fKey => {
          // eslint-disable-next-line no-prototype-builtins
          if (state.selectedCardFilters[fKey].value.length) {
            return state.selectedCardFilters[fKey].value.includes(card.cardFilter[fKey])
          }
          return true
        })
        if (card.show && !prevShow) {
          dispatch('updateExamplesForCard',  { cardId: card.id })
        }
      })
    },
    updateSelectedExampleFilters({ state, commit, dispatch }, { filters, full = false }) {
      if (!full) {
        Object.keys(filters).forEach((filterId) => {
          commit('SET_SELECTED_EXAMPLE_FILTER', { filterId, data: filters[filterId] })
        })
      } else {
        commit('SET_FULL_EXAMPLE_FILTER', filters)
      }
      dispatch('updateLocalforage')

      const filtersKeys = Object.keys(state.selectedExampleFilters)

      if (!filtersKeys.length || Object.values(state.selectedExampleFilters).every(arr => !arr.value.length)) {
        state.selectedCards.forEach(card => card.examples.forEach(example => example.show = false))
        return
      }

      state.selectedCards.forEach((card) => {
        if (card.show) {
          card.examples.forEach((example) => {
            example.show = filtersKeys.every(fKey => {
                if (state.selectedExampleFilters[fKey].value.length) {
                  return state.selectedExampleFilters[fKey].value.includes(example.exampleFilter[fKey])
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
            if (state.selectedExampleFilters[fKey].value.length) {
              return state.selectedExampleFilters[fKey].value.includes(example.exampleFilter[fKey])
            }
            return true
          })
        })
    },
    updateLocalforage({ state }) {
      setLocalforage(state.selectedThemeFilter, JSON.stringify({
        selectedCardFilters: state.selectedCardFilters,
        selectedExampleFilters: state.selectedExampleFilters,
      }))
    },
  },
  mutations: {
    SET_SELECTED_THEME_FILTER(state, payload) {
      state.selectedThemeFilter = payload
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
    SET_FULL_CARD_FILTER (state, payload) {
      state.selectedCardFilters = payload
    },
    SET_FULL_EXAMPLE_FILTER (state, payload) {
      state.selectedExampleFilters = payload
    },
  },
})
