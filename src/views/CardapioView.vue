<script setup>
import HeaderNav from '@/componentes/HeaderNav.vue';
</script>
<template>
        <HeaderNav />


    <body>
        <div class="fundo">
            <div class="textoCima text-center">
                <h1>ITENS DE PADARIA</h1>
                <p>CONHEÇA OS ITENS MAIS VENDIDOS AQUI NA PADARIA SANTO PÃO</p>
            </div>




            <div class="container text-center  ">
                <div class="row colunaCima">
                    <div class="col">
                        <img src="@/assets/salgados.webp" alt="">
                        <h2>SALGADOS</h2>
                        <p>R$ 1,50 CADA</p>
                    </div>
                    <div class="col">
                        <img src="@/assets/paoDeQueijo.jpg" alt="">
                        <h2>PÃO DE QUEIJO</h2>
                        <p>R$ 1,00 CADA</p>
                    </div>
                    <div class="col">
                        <img src="@/assets/pizza.jpg" alt="">
                        <h2>PIZZAS</h2>
                        <p>R$ 5,00 POR FATIA</p>
                    </div>
                    <div class="col">
                     <RouterLink to="produto">   <img src="@/assets/pao-frances.webp" alt=""></RouterLink>
                        <h2>PÃO FRANCÊS</h2>
                        <p>R$ 0,50 CADA</p>
                    </div>
                </div>

                <div class="textoCima text-center">
                <h1>MAIS VENDIDOS</h1>
            </div>

                <div class="row colunaBaixo">
                    <div class="col" id="colBaixo">
                        <img src="@/assets/boloDeChocolate.jpeg" alt="">
                        <h2>BOLOS</h2>
                        <p>R$ 108,90 POR KG</p>
                    </div>
                    <div class="col" id="colBaixo">
                        <img src="@/assets/brigadeiro.jpeg" alt="">
                        <h2>BRIGADEIROS</h2>
                        <p>R$ 0,50 CADA</p>
                    </div>
                    <div class="col" id="colBaixo">
                        <img src="@/assets/macarron.jpeg" alt="">
                        <h2>MACARRONS</h2>
                        <p>R$ 2,00 CADA</p>
                    </div>
                </div>
            </div>





        </div>
    </body>
</template>


<style scoped>
h2 {
    font-family: "Jockey One", sans-serif;
    color: #461212;
}

p {
    font-family: "ABeeZee", sans-serif;
    color: black;
}

#colBaixo {
    margin-left: 45px;
    margin-right: 45px;
}

.col {
    margin-left: 15px;
    margin-right: 15px;
    height: 100%;
}

.colunaCima {
    height: 40vh;
    margin-left: 2vw;
    margin-right: 2vw;
    margin-bottom: 2vh;
}

.colunaBaixo {
    margin-right: 6vw;
    margin-left: 6vw;
    height: 40vh;


}

.fundo {
    height: 120vh;
    background-color: #fcf9c6;
    padding-top: 50px;
}

.textoCima {
    margin-top: 1vh;
    margin-bottom: 5vh;
}

img {
    width: 230px;
    height: 230px;
    border: 12px #461212 solid;
}
</style>
