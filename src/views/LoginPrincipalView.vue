<script setup>
import HeaderNav from '@/componentes/HeaderNav.vue';
import LoginPrincipal from '@/componentes/LoginPrincipal.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
function redirecionarPrincipal(){
    router.push({name: 'cardapio'});

}

</script>

<template>
    <header>
        <HeaderNav />
    </header>

    <body>
        <LoginPrincipal @salvar-login="redirecionarPrincipal"/>
            
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
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
