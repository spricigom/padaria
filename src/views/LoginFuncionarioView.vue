<script setup>
import HeaderNav from '@/componentes/HeaderNav.vue';
import LoginFuncionario from '@/componentes/LoginFuncionario.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
function redirecionarFuncionario(){
    router.push({name: 'Dono'});

}
</script>

<template>
    <header>
        <HeaderNav />
    </header>
    <body>
        <LoginFuncionario @salvar-login-funcionario="redirecionarFuncionario"/>
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
