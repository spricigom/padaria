<script setup>
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg ">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><img src="@/assets/logo.png" alt=""></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                   

                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        </li>
                    </ul>



                    <ul class="navbar-nav">
                        <li>
                            <p><a class="nav-link" href="">HOME</a></p>
                        </li>

                        <li>
                             <p><a class="nav-link" href="">CARDÁPIO</a></p>
                        </li>

                        <li>
                             <p><a class="nav-link" href="">MINHAS COMPRAS</a></p>
                        </li>

                        <li>
                             <p><a class="nav-link" href="">FUNCIONARIOS</a></p>
                        </li>
                        
                    </ul>



                   
                </div>
            </div>
        </nav>
    </header>

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
                        </div>
                    </div>
                    <div class="col">
                        <div class="produto">
                            <div class="campo">
                                <h1>ATENDIMENTO AO CLIENTE</h1>
                            </div>
                                <img class="imagem" src="@/assets/atendimento.jpeg" alt="">
                        </div>
                    </div>
                    <div class="col">
                        <div class="produto">
                            <div class="campo">
                                <h1>VENDAS DE PRODUTOS</h1>
                            </div>
                                <img class="imagem" src="@/assets/grafico.png" alt="">
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
    margin-right: 60px;
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

.campo {
    height: 15vh;
    top: 145px;
    position: relative;
    border-bottom-left-radius: 100px;
    border-bottom-right-radius: 100px;
    background-color: #642D0E;
    color: white;
}
</style>
