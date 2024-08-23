import { createRouter, createWebHistory } from 'vue-router';
import Cadastro from '@/componentes/cadastro/CadastroVue.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../layouts/DefaultLayout.vue'),
      children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/HomeView.vue')
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
        path: '/clientes',
        name: 'clientes',
        component: () => import('../views/ClientesView.vue')
      },
      {
        path: '/cardapio',
        name: 'cardapio',
        component: () => import('../views/CardapioView.vue')
      },
      {
        path: '/cadastro',
        name: 'cadastro',
        component: () => import('../views/CadastroView.vue'),
        children: [
          {
            path: '/cadastro/comum',
            name: 'cadastroComum',
            component: Cadastro
          },
          {
            path: '/cadastro/dono',
            name: 'cadastroDono',
            component: Cadastro
          }
        ]
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
      },
      {
        path: '/fornecedores',
        name: 'fornecedores',
        component: () => import('../views/fornecedoresView.vue')
      }  
      ]
    }
  ]
})

export default router
