<script setup>
import HeaderNav from '@/componentes/HeaderNav.vue';
</script>

<template>
    <HeaderNav/>

    <div class="fundo">
        <div class="produto">
            <div class="conteudo">
                <div class="preco">
                    <h2>R$ 0,50 Cada</h2>
                    <h5>No pix</h5>
                </div>
                <div class="login">
            <p>crosta dourada e crocante por fora, interior macio e arejado por dentro. O aroma irresistível e o sabor inigualável fazem dele o companheiro perfeito para qualquer refeição. Um clássico que transforma cada mordida em um momento de prazer!</p>

                    
                </div>
                <div>                   
                    <RouterLink to="/pedido"><button>COMPRAR</button></RouterLink>
                </div>
            </div>
            <div class="imagem_produto">
                <img src="@/assets/pao-frances.webp" alt="">
            </div>
        </div>
    </div>
</template>

<style>

button{
    height: 5vh;
    width: 15vw;
    background-color: #2C2B2B;
    color: white;
    border: 0;
    margin-top: 45px;
    cursor: pointer;
    border-radius: 15px;
    font-family: 'Josefin Sans', sans-serif
    tr
}
.links{
    color: black;
    position: relative;
    bottom: 5vh
} 
.links a{
    color: black;
}
p {
    font-family: "Inder", sans-serif;
    padding-top: 20px;
    font-size: 2.3vh;
    color: black;
}
::placeholder {
    font-family: "Inder", sans-serif;
    padding-left: 10px;

}
.form {
    margin: 50px;
}

input {
    margin-top: 2vh;
    height: 5.5vh;
    border: 1.9px solid black;
    box-shadow: 4px 4px white;
    width: 90%;
}
form{
    background-color: #88593e;
    height: 25vh;
    margin-top: 5vh;
}
h2{
    color: #F48200;
    font-family: 'Josefin Sans', 'sans serif';
    font-size: 4.5vw;
    margin: 0;
    cursor: default;
}
h5{
    margin: 0;
    text-decoration: underline;
    font-size: 1.4vw;
    color: black;
    cursor: default;

}
.fundo{
    background-color: #FFFDD1;
    width: 100%;
    height: 100vh;
    display: flex;
flex-direction: row;
justify-content: center;
}
.produto{
    background-color: #957C6E;
    height: 80vh;
    width: 80vw;
    margin-top: 10vh;
    display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
border-radius:2vw ;

}
.imagem_produto{
    height: 50vh;
    width: 40vw;
    
}
.imagem_produto img{
    height: 50vh;
    width: 40vw;    object-fit:cover;
}
.conteudo{
    width: 27vw;
    text-align: center;
}
</style>