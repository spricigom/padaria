<script setup>
import HeaderNav from '@/componentes/default/HeaderNav.vue'
</script>

<template>
    <header>
        <HeaderNav />
    </header>

    <body>
        <div class="fundo">
            <div class="esq text-center">
                <div class="titulo">
                    <h3>PRODUTOS CONSUMIDOS</h3>
                    <h5>PADARIA SANTO PÃO</h5>
                </div>

                <div class="aviso">
                    <h6>MAIS VENDIDOS
                        <br>
                        AUMENTE A PRODUÇÃO
                    </h6>
                </div>

                <div class="container text-center">
                    <div class="row">
                        <div class="col">
                            <div class="campo">
                                <h6>MAIS VENDIDOS
                                    <br>
                                    AUMENTE A PRODUÇÃO
                                </h6>
                            </div>
                            <img src="@/assets/pao-frances.webp" alt="">
                        </div>
                        <div class="col">
                            <div class="campo">
                                <h6>MAIS VENDIDOS
                                    <br>
                                    AUMENTE A PRODUÇÃO
                                </h6>
                            </div>
                            <img src="@/assets/pizza.jpg" alt="">

                        </div>

                    </div>

                    <div class="aviso2">
                        <h6>MAIS VENDIDOS
                            <br>
                            AUMENTE A PRODUÇÃO
                        </h6>
                    </div>

                    <div class="row">
                        <div class="col">
                            <div class="campo">
                                <h6>MAIS VENDIDOS
                                    <br>
                                    AUMENTE A PRODUÇÃO
                                </h6>
                            </div>
                            <img src="@/assets/salgados.webp" alt="">
                        </div>
                        <div class="col">
                            <div class="campo">
                                <h6>MAIS VENDIDOS
                                    <br>
                                    AUMENTE A PRODUÇÃO
                                </h6>
                            </div>
                            <img src="@/assets/macarronCopia.jpeg" alt="">
                        </div>

                    </div>
                </div>
            </div>



            <div class="dir text-center">
                <h3 id="h3">ESTOQUE DE PRODUTOS</h3>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="O QUE VOCÊ PROCURA?"
                        aria-label="Search">
                </form>

                <div class="compras">
                    <div id="title">
                        <h3>VENDAS DOS PRODUTOS</h3>
                    </div>
                    <div>
                        <div class="clientes">
                            <p>VENDA#3994: Luna Bolsoni Ramos ..... 200 salgados. R$150,00</p>
                        </div>
                        <div class="clientes">
                            <p>VENDA2: Luiz Eduardo ..... 159 brigadeiros. R$100,00</p>
                        </div>
                         <div class="clientes">
                            <p>VENDA3: Emili Spricgo ..... 100 macarrons. R$150,00</p>
                        </div>
                        <div class="clientes">
                            <p>VENDA4: Sara Kozoski ..... 3 pizzas. R$40,00</p>
                        </div>
                        <div class="clientes">
                            <p>VENDA5: Francisco Vargas ..... 15 pão frânces. R$6,99</p>
                        </div>
                        <div class="clientes">
                            <p>VENDA6: Heloisa  ..... 20 pão de queijo. R$22,00</p>                       
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
.clientes {
    display: flex;
    justify-content: left;
    margin-left: 3vw;
}

.compras {
    margin-top: 8vh
}

#title {
    margin-bottom: 5vh;
}

p {
    font-family: "Inder", sans-serif;
    color: white;
}

::placeholder {
    font-family: "Inder", sans-serif;
}

form {
    margin-top: 5vh;
    margin-left: 6vw;
    margin-right: 6vw;
}

input {
    height: 6vh;
}

.fundo {
    height: 120vh;
    background-color: red;
}

.esq {
    background-color: #fcf9c6;
    width: 65%;
    float: left;
    height: 120vh;
}

.dir {
    background-color: #7e5037;
    width: 35%;
    float: right;
    height: 120vh;
}

.titulo {
    margin: 10px;
    background-color: #4D1C01;
}

h3 {
    font-family: "IM Fell Great Primer", serif;
    color: white;
    letter-spacing: .9vh;
    padding-top: 4vh;
}

h5 {
    font-family: "IM Fell Great Primer", serif;
    color: white;
    letter-spacing: .9vh;
    padding-top: 2vh;
    padding-bottom: 4vh;
}

h6 {
    font-family: "IM Fell Great Primer", serif;
    color: white;
    letter-spacing: .9vh;
    font-size: 1.7vh;
    padding: 1vh;
}

#h3 {
    margin-top: 5vh
}

.aviso {
    background-color: #4D1C01;
    margin-top: 3%;
    margin-left: 25%;
    margin-right: 25%
}

.aviso2 {
    background-color: #4D1C01;
    margin-top: 6%;
    margin-left: 25%;
    margin-right: 25%
}

.campo {
    background-color: #4D1C01;
    margin-top: 3%;
    margin-left: 12%;
    margin-right: 12%;
    display: flex;
    position: relative;
    top: 30px;
    justify-content: center;
    height: 6vh;
}

img {
    height: 17vh;
    width: 100%;

}
</style>
