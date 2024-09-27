import localforage from 'localforage'

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
