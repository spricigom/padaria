<script setup>
import HeaderNav from '@/componentes/HeaderNav.vue';
import LoginCliente from '@/componentes/LoginCliente.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
function redirecionarCliente(){
    router.push({name: 'Cardapio'});

}
</script>

<template>
    <header>
        <HeaderNav />
    </header>

    <body>
        <LoginCliente @salvar-login-cliente="redirecionarCliente"/>
    </body>
        

        

</template>
<style scoped>
* {
    padding: 0;
    margin: 0;
}
body{
    background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url('@/assets/comidas.jpg');
    background-position: 100%;
    height: 135vh;
}
</style>
