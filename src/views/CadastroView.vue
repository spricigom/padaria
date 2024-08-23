<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
    <div class="container">
        <div class="fundoForm"></div>
        <RouterView />
    </div>
</template>

<style scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: center;   
}
.fundoForm {
    opacity: 92%;
    height: 110vh;
    width: 32vw;
    background-color: #4D1C01;
    position: relative;
    border-radius: 5vh;
    left: 15vw;
    top: 10vh;
}
</style>