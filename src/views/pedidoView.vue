<script setup>
import { reactive } from 'vue';
import HeaderNav from '@/componentes/HeaderNav.vue'
import Pedido from '@/componentes/Pedido.vue';
import PedidoResult from '@/componentes/PedidoResult.vue';

const pedido = reactive ({
    produto:'',
    quantidade:'',
    valorUnitario:'',
    valorTotal:'',
    desconto: '',
    email:'',
    senha:''
})

function salvarPedido(resultPedido) {
    Object.assign(pedido, resultPedido)
}
</script>

<template>


    <header>
        <HeaderNav />
    </header>

    <body>
         <main>
            <Pedido @enviar-pedido="salvarPedido"/>
            <PedidoResult :pedido="pedido"/>
        </main>

    <footer></footer>
    </body>
   
</template>

<style scoped>

main {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('@/assets/comidas.jpg');
    background-position: 100%;
    height: 120vh;
}


</style>