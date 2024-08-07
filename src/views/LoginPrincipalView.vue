<script setup>
import HeaderNav from '@/componentes/HeaderNav.vue';
import LoginPrincipal from '@/componentes/LoginPrincipal.vue';
// const principal = reactive({
//     email: '',
//     senha: ''

// })
// function salvarLogin(novoLogin) {
//     Object.assign(login, novoLogin)
// }
</script>

<template>
    <header>
        <HeaderNav/>
    </header>
    <body>
       <LoginPrincipal />     
    </body>

</template>
<style scoped>
</style>
