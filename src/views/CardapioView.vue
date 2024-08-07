<script setup>
import HeaderNav from '@/componentes/HeaderNav.vue'
</script>

<template>
    <header>
    <HeaderNav />
    </header>

    <body>
       <div class="fundo">

       </div>
    </body>

  

</template>


<style scoped>
template{
max-width: 100vh;}
h1{
    margin-top: 10px;
    font-size: 3.5vh;
}
.nav-link{
    color: white;
}

li{
    margin-left: 60px;
}

.textoBaixo{
    padding-top: -7px;
    font-family: "IM Fell Great Primer", serif;
}

.navbar-brand{
    width: 18vh;
}
.navbar {
    height: 17vh;
    background-color: #4D1C01;
    justify-content: space-between;
}

.fundo {
    height: 83vh;
    background-color: #fcf9c6;
}

.col {
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 50px;
    height: 100%;
}

.produto {
    margin-top: -123px;
    box-shadow: .00001px -10px;
}

.produto,
img {
    width: 100%;
}

.imagem{
    height: 68vh;
    border-radius: 10px;
}
h1{
    font-size: 3.5vh;
    padding: 35px;
}
h6{
    font-size: 2vh;
}

.campo {
    height: 15vh;
    top: 15vh;
    position: relative;
    border-bottom-left-radius: 100px;
    border-bottom-right-radius: 100px;
    background-color: #642D0E;
    color: white;
}
.campoBaixo {
    height: 3.5vh;
    margin-left: 15px;
    margin-right: 15px;
    bottom: 50px;
    position: relative;
    background-color: #642D0E;
    color: white;
}
</style>
