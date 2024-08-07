<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <RouterLink to="/dono">Pagina do Dono </RouterLink>
    <br>
    <RouterLink to="/loginprincipal">Login Principal </RouterLink>
    <br>
    <RouterLink to="/Clientes">Clientes </RouterLink>
    <br>
    <RouterLink to="/Cardapio">Cardápio </RouterLink>


</template>

<style scoped>
.nav-link {
    color: white;
}

li {
    margin-left: 60px;
}

.textoBaixo {
    padding-top: 7px;
    font-family: "IM Fell Great Primer", serif;
}

.navbar-brand {
    width: 18vh;
}


.campoBaixo {
    height: 3.5vh;
    margin-left: 15px;
    margin-right: 15px;
    bottom: 50px;
    background-color: #642D0E;
    color: white;
}

.navbar {
    height: 17vh;
    top: 180px;
    justify-content: space-between;
    position: relative;

}

.fundo {
    height: 83vh;
    background-color: #fcf9c6;
}

.col {
    margin-left: 40px;
    margin-right: 40px;
    margin-bottom: 50px;
    height: 100%;
}

.produto {
    margin-top: -93px;
    box-shadow: .00001px -10px;
}

.produto,
img {
    width: 100%;
}

.imagem {
    height: 68vh;
    border-radius: 10px;
}

h1 {
    font-size: 3.5vh;
    padding: 35px;
}

h6 {
    font-size: 2vh;
}
</style>
