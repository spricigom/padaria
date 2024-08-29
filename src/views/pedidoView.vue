<script setup>
import { reactive } from 'vue';
import Pedido from '@/componentes/Pedido.vue';

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

    <body>
         <main>
            <Pedido @enviar-pedido="salvarPedido"/>
            <!-- <PedidoResult :pedido="pedido"/> -->
        </main>

    <footer></footer>
    </body>
   
</template>

<style scoped>

main {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('@/assets/comidas.jpg');
    object-fit: cover;
}




</style>