import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import store from '@/store'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      alias: '/times',
      name: 'times',
      component: App,
    },
    {
      path: '/conditional',
      name: 'conditional',
      component: App,
    }
  ]
})

router.beforeEach((to) => {
  window.alert(to.name)
  store.dispatch('updateSelectedThemeFilter', to.name)
})

export default router
