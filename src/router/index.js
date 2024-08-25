import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import store from '@/store'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      alias: '/general',
      name: 'general',
      component: App,
    },
    {
      path: '/conditional',
      name: 'conditional',
      component: App,
    }
  ]
})

router.afterEach((to) => {
  store.commit('updateSelectedMainFilter', to.name)
})

export default router
