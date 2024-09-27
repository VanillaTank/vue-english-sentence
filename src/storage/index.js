import localforage from 'localforage'
import themeFilters from '@/data/filters/themeFilters.js'

const localForage = localforage.createInstance({
  name: "filters"
});

export const setLocalforage = (key, value) => {
  return localForage.setItem(key, value)
    .catch(err => console.error(err))
}

export const getLocalforage = (key) => {
  return localForage.getItem(key)
    .catch(err => console.error(err))
}

export const checkIfLocalforageActual = async () => {
  const predefinedKeys = themeFilters.map(({title}) => title)
  const localforageKeys = await localForage.keys()

  return predefinedKeys.every((key) => localforageKeys.includes(key))
}

export const setDefaultLocalforageFilters = () => {
  for (let filter of themeFilters) {
    setLocalforage(filter.title, JSON.stringify({
      selectedCardFilters: filter.selectedFiltersByDefault.selectedCardFilters,
      selectedExampleFilters: filter.selectedFiltersByDefault.selectedExampleFilters,
    }))
      .catch(err => console.error(err))
  }
}
