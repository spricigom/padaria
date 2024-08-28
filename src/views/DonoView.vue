<script setup>
</script>

<template>
    

    <body>
        <div class="fundo">
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                        <div class="produto">
                            <div class="campo">
                                <h1>PRODUTOS CONSUMIDOS</h1>
                            </div>
                                <img class="imagem" src="@/assets/pao.jpeg" alt="">
                            <div class="campoBaixo">
                                <p class="textoBaixo">SOMENTE PESSOAS AUTORIZADAS!</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="produto">
                            <div class="campo">
                                <h1>ATENDIMENTO </h1>
                            </div>
                                <img class="imagem" src="@/assets/atendimento.jpeg" alt="">
                            <div class="campoBaixo">
                                <p class="textoBaixo">FAÇA SUA COMPRA ONLINE!</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="produto">
                            <div class="campo">
                                <h1>VENDAS DE PRODUTOS</h1>
                            </div>
                                <img class="imagem" src="@/assets/venda.jpg" alt="">
                            <div class="campoBaixo">
                                <p class="textoBaixo">SOMENTE PESSOAS AUTORIZADAS!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>





    </body>

    <!--
    <footer>
        <footer class="bg-body-tertiary text-center text-lg-start">
            <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.05);">
                © 2020 Copyright:
                <a class="text-body" href="https://mdbootstrap.com/">MDBootstrap.com</a>
            </div>
        </footer>

    </footer>
     -->

</template>


<style scoped>
.row{
    padding-top: 3.88vh;
}
template{
max-width: 100vh;
}

h1{
    margin-top: 1.29vh;
    font-size: 3.5vh;
}
.nav-link{
    color: white;
}

li{
    margin-left: 3.75vw;
}

.textoBaixo{
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
    margin-left: 1.87vw;
    margin-right: 1.87vw;
    margin-bottom: 6.46vh;
    height: 100%;
}

.produto {
    margin-top: -15.91vh;
}

.produto,
img {
    width: 100%;
}

.imagem{
    height: 68vh;
    border-radius: 0.8vw;
}
h1{
    font-size: 3.5vh;
    padding: 4.52vh;
}
h6{
    font-size: 2vh;
}

.campo {
    height: 15vh;
    top: 15vh;
    position: relative;
    border-bottom-left-radius: 6.25vw;
    border-bottom-right-radius: 6.25vw;
    background-color: #642D0E;
    color: white;
}
.campoBaixo {
    height: 3.5vh;
    margin-left: .93vw;
    margin-right: .93vw;
    bottom: 6.46vh;
    position: relative;
    background-color: #642D0E;
    color: white;
}
</style>
