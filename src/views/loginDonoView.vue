<script setup>
import HeaderNav from '@/componentes/HeaderNav.vue';
import LoginDono from '@/componentes/LoginDono.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
function redirecionarDono(){
    router.push({name: 'produtosConsumidos'});
}
</script>

<template>
    <header>
        <HeaderNav />
    </header>

    <body>
         <LoginDono @salvar-login-dono="redirecionarDono" />
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
