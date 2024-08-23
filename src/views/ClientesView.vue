<script setup>
import HeaderNav from '@/componentes/default/HeaderNav.vue'
</script>

<template>
   <header>
        <HeaderNav/>
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
    margin-left: 3.12vw;
}
.clientes{
    margin-left: 2.5vw;
    margin-right: 2.5vw;
    margin-top: 5.17vh;

    background-color: #502D2D;
}
.clientes img{
    margin-top: 1.29vh;
    width: 85%;
}
.icones {
    display: flex;
    justify-content: space-between;

    margin: 19.4vh 2.5vw 2.5vw;
    
}

.icone {
    width: 4.5vw;
    margin-bottom: 1.29vh;
}
h3{
    font-size: 3vh
}
p{
    font-family: "inder", serif;
    font-size: 2.3vh;
}
.textoClientes{
    color: white;
    padding-top: 1.29vh;
    padding-bottom: .29vh;
}
h2 {
    padding-top: 3.23vh;
    font-family: "IM Fell Great Primer", serif;
    letter-spacing: .37vw;
}

h5 {
    font-family: "IM Fell Great Primer", serif;
}

.campo {
    background-color: #EAE7B2;
    border-radius: 1.25vw;
    height: 51.74vh;
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
    margin-left: 3.75vw;
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
    border-radius: .62vw;
}



h6 {
    font-size: 2vh;
}
</style>
