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
      component: () => import('../views/DonoView.vue')
    },
    {
      path: '/loginprincipal',
      name: 'loginprincipal',
      component: () => import('../views/LoginPrincipalView.vue')
    },
    {
      path: '/Clientes',
      name: 'Clientes',
      component: () => import('../views/ClientesView.vue')
    },
    {
      path: '/Cardapio',
      name: 'Cardapio',
      component: () => import('../views/CardapioView.vue')
    },
    {
      path: '/loginDono',
      name: 'loginDono',
      component: () => import('../views/loginDonoView.vue')
    },
    {
      path: '/loginCliente',
      name: 'loginCliente',
      component: () => import('../views/loginClienteView.vue')
    },
    {
      path: '/loginFuncionario',
      name: 'loginFuncionario',
      component: () => import('../views/LoginFuncionarioView.vue')
    },
    {
      path: '/produtosConsumidos',
      name: 'produtosConsumidos',
      component: () => import('../views/produtosConsumidosView.vue')
    },
    {
      path: '/relatorio',
      name: 'relatorio',
      component: () => import('../views/relatorioView.vue')
    },
    {
      path: '/pedido',
      name: 'pedido',
      component: () => import('../views/pedidoView.vue')
    }
  ]
})

export default router
