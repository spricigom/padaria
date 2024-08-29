<script setup>
import LoginPrincipal from '@/componentes/LoginPrincipal.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
function redirecionarPrincipal(){
    router.push({name: 'Cardapio'});

}

</script>

<template>
  

    <body>
        <LoginPrincipal @salvar-login="redirecionarPrincipal"/>
    </body>
        

        

</template>
<style scoped>
</style>
