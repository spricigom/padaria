<script setup>
import { useRoute } from 'vue-router';
import HeaderNav from '@/componentes/default/HeaderNav.vue';
import { RouterView } from 'vue-router';

const route = useRoute();

const fundoBackground = "background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('@/assets/comidas.jpg'); background-position: 100%; height: 110vh;"
</script>

<template>
    <HeaderNav />
    <main :style="(route.path === '/cadastro/comum' || route.path === '/cadastro/dono' || route.path === '/loginprincipal') ? fundoBackground : ''">
        <RouterView />
    </main>
</template>


<style scoped>


</style>