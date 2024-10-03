<script setup>
import HeaderNav from '@/componentes/HeaderNav.vue';
import LoginProduto from '@/componentes/LoginProduto.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
function redirecionar(){
    router.push({name: 'produtosConsumidos'});

}

</script>
<template>
    <body>
                <header>
        <HeaderNav />
    </header>
    <body>
        <LoginProduto @salvar-login-produto="redirecionar"/>
    </body>

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
    height: 130vh;
    background-repeat: no-repeat;
    background-size: cover;
}

</style>