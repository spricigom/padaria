<script setup></script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg ">
            <div class="container-fluid">
                <RouterLink to="/" class="navbar-brand"><img src="@/assets/logo.png" alt=""> </RouterLink>
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
                            <h6><a class="nav-link" href="">HOME</a></h6>
                        </li>

                        <li>
                            <h6><a class="nav-link" href="">CARDÁPIO</a></h6>
                        </li>

                        <li>
                            <h6><a class="nav-link" href="">MINHAS COMPRAS</a></h6>
                        </li>

                        <li>
                            <h6><a class="nav-link" href="">FUNCIONARIOS</a></h6>
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
                    <div class="col" id="esquerda">
                        <h1 style="font-size: 7vh; letter-spacing: 25px; margin-top: 65px;">CLIENTES</h1>
                        <div class="campo">
                            <h2>FAÇA SUA ENCOMENDA</h2>
                            <h5>PELAS REDES SOCIAIS</h5>
                            <div class="icones">
                                <div>
                                    <img src="@/assets/whatsapp.png" alt="" class="icone">
                                    <p>(47) 98204-2389</p>
                                </div>

                                <div>
                                    <img src="@/assets/instagram.png" alt="" class="icone">
                                    <p>@padariasantopao</p>
                                </div>

                                <div>
                                    <img src="@/assets/mensageiro.png" alt="" class="icone">
                                    <p>@padariasantopao_</p>
                                </div>



                            </div>
                        </div>
                    </div>
                    <div class="col" id="direita">
                        
                        
                        <div class="container text-center">
                            <div class="row">
                                <div class="col" >
                                   
                                    <div class="clientes">
                                        <img src="@/assets/Cliente1.jpeg" alt="">
                                        <div class="textoClientes">
                                             <h3>1 LUGAR</h3>
                                        <p style="font-size: 2.2vh;">R$ 15.000 em produtos!</p>
                                        </div>
                                    </div>

                                </div>
                                <div class="col">
                                    <div class="clientes">
                                        <img src="@/assets/Cliente2.jpeg" alt="">
                                        <div class="textoClientes">
                                             <h3>2 LUGAR</h3>
                                        <p style="font-size: 2.2vh;">R$ 10.000 em produtos!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="container text-center">
                            <div class="row">
                                <div class="col">
                                    <div class="clientes">
                                        <img src="@/assets/Cliente3.jpeg" alt="">
                                        <div class="textoClientes">
                                             <h3>3 LUGAR</h3>
                                        <p style="font-size: 2.2vh;">R$ 9.000 em produtos!</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="clientes">
                                        <img src="@/assets/Cliente4.jpeg" alt="">
                                        <div class="textoClientes">
                                             <h3>4 LUGAR</h3>
                                        <p style="font-size: 2.2vh;">R$ 5.000 em produtos!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        
                    </div>

                </div>
            </div>
        </div>

    </body>

</template>


<style scoped>
#direita{
    margin-left: 50px;
}
.clientes{
    margin-left: 40px;
    margin-right: 40px;
    margin-top: 40px;

    background-color: #502D2D;
}
.clientes img{
    margin-top: 10px;
    width: 85%;
}
.icones {
    display: flex;
    justify-content: space-between;

    margin: 150px 40px 40px;
}

.icone {
    width: 4.5vw;
    margin-bottom: 10px;
}
h3{
    font-size: 3vh
}
p {
    font-family: "inder", serif;
    font-size: 2.3vh;
}
.textoClientes{
    color: white;
    padding-top: 10px;
    padding-bottom: 1px;
}
h2 {
    padding-top: 25px;
    font-family: "IM Fell Great Primer", serif;
    letter-spacing: 6px;
}

h5 {
    font-family: "IM Fell Great Primer", serif;
}

.campo {
    background-color: #EAE7B2;
    border-radius: 20px;
    height: 400px;
}

.fundo {
    background-color: #fcf9c6;
    height: 83vh;
}

h1 {
    font-size: 15vh;
}

body {
    background-color: #fcf9c6;
}

.nav-link {
    color: white;
}

li {
    margin-left: 60px;
}

.textoBaixo {
    padding-top: -7px;
    font-family: "IM Fell Great Primer", serif;
}

.navbar-brand {
    width: 18vh;
}

.navbar {
    height: 17vh;
    background-color: #4D1C01;
    justify-content: space-between;
}






.produto,
img {
    width: 100%;
}

.imagem {
    height: 68vh;
    border-radius: 10px;
}



h6 {
    font-size: 2vh;
}
</style>
