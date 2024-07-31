<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

   <div class="paia">
       <div class="campo">
           <h1>Nome</h1>
       </div>
       <img src="@/assets/pao.jpeg" alt="">
    </div>
</template>

<style scoped>
.paia{
    width: 30vh;
    height: 50vh;
}
img{
    width: 30vh;
    height: 50vh;
}

 
.campo {
    height: 10vh;
    top: 46px;
    position: relative;
    border-bottom-left-radius: 60px;
    border-bottom-right-radius: 60px;
    background-color: brown;
}
</style>
