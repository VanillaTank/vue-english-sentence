import { createStore } from 'vuex'
import { timesCards, conditionalCards, filters } from '@/data'

const { themeFilters } = filters

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
      commit('SET_SELECTED_THEME_FILTER', payload)

      const selectedThemeFilter = themeFilters.find(theme => theme.title === payload)

      let fullThemeCards
      if (selectedThemeFilter.title === 'times') { fullThemeCards = JSON.parse(JSON.stringify(timesCards)) }
      else if (selectedThemeFilter.title === 'conditional') { fullThemeCards = JSON.parse(JSON.stringify(conditionalCards)) }

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
    updateSelectedExampleFilters({ state, commit }, { filters, full = false }) {
      if (!full) {
        Object.keys(filters).forEach((filterId) => {
          commit('SET_SELECTED_EXAMPLE_FILTER', { filterId, data: filters[filterId] })
        })
      } else {
        commit('SET_FULL_EXAMPLE_FILTER', filters)
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
