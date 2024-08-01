import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
    },
    {
      path: '/dono',
      name: 'dono',
      component: () => import('../views/DonoView.vue')
    },
    {
      path: '/funcionario',
      name: 'funcionario',
      component: () => import('../views/FuncionarioView.vue')
    }
  ]
})

export default router
