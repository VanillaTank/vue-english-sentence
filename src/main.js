import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import store from './store'
import { checkIfLocalforageActual, setDefaultLocalforageFilters } from '@/storage'


const app = createApp(App)

app.use(router)
app.use(store)

try {
  const isLocalforageActual = await checkIfLocalforageActual()
  if (!isLocalforageActual) {
    setDefaultLocalforageFilters()
  }
} catch (e) {
  console.log(e)
}

app.mount('#app')
