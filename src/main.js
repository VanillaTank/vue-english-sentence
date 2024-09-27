import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import store from './store'
import themeFilters from '@/data/filters/themeFilters.js'
import { setLocalforage } from '@/storage'


const app = createApp(App)

app.use(router)
app.use(store)

for (let filter of themeFilters) {
  setLocalforage(filter.title, JSON.stringify({
    selectedCardFilters: filter.selectedFiltersByDefault.selectedCardFilters,
    selectedExampleFilters: filter.selectedFiltersByDefault.selectedExampleFilters,
  }))
}

app.mount('#app')
