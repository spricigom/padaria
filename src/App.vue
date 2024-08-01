<script setup>
import { RouterLink, RouterView } from 'vue-router'
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
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Dropdown
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>

                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                    </ul>
                    <p style="color: white;">bla bla bla</p>



                   
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
 
.navbar-brand{
    width: 18vh;
}
.navbar {
    height: 17vh;
    background-color: #4D1C01;
}

.fundo {
    background-color: #fcf9c6;
}

.col {
    margin-left: 40px;
    margin-right: 40px;
    margin-bottom: 50px;
    height: 100%;
}

.produto {
    margin-top: -60px;
    
}

.produto,
img {
    width: 100%;
    box-shadow: inset 10px black;
}

.imagem{
    height: 512px;
}

.campo {
    height: 20vh;
    top: 100px;
    position: relative;
    border-bottom-left-radius: 90px;
    border-bottom-right-radius: 90px;
    background-color: #642D0E;
    color: white;
}
</style>
