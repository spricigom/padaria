<script setup>
import HeaderNav from '@/componentes/default/HeaderNav.vue';
import LoginPrincipal from '@/componentes/LoginPrincipal.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
function redirecionarPrincipal(){
    router.push({name: 'Cardapio'});

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
</style>
