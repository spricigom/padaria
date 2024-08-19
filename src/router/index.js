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
      path: '/dono',
      name: 'dono',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DonoView.vue')
    },
    {
      path: '/loginprincipal',
      name: 'loginprincipal',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginPrincipalView.vue')
    },
    {
      path: '/Clientes',
      name: 'Clientes',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ClientesView.vue')
    },
    {
      path: '/Cardapio',
      name: 'Cardapio',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CardapioView.vue')
    },
    {
      path: '/loginDono',
      name: 'loginDono',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/loginDonoView.vue')
    },
    {
      path: '/loginCliente',
      name: 'loginCliente',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/loginClienteView.vue')
    },
    {
      path: '/loginFuncionario',
      name: 'loginFuncionario',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/loginFuncionarioView.vue')
    },
    {
      path: '/produtosConsumidos',
      name: 'produtosConsumidos',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/produtosConsumidosView.vue')
    },
    {
      path: '/relatorio',
      name: 'relatorio',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/relatorioView.vue')
    }
  ]
})

export default router
