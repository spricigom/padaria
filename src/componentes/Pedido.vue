<script setup>
import { reactive } from 'vue';
const emit = defineEmits(['enviarPedido'])
const pedido = reactive ({
    produto:'',
    quantidade:'',
    valorUnitario:'',
    valorTotal:'',
    desconto: '',
    email:'',
    senha:''
})
function loginPedido() {
    let error = false
    if (!error) {
        emit('enviarPedido', { ...pedido })
    }
}
</script>
<template>
    
       <div class="container text-center">
            <div class="row">
                <div class="col" id="fundo">
                </div>
                <div class="col" id="fundo">
                </div>

            </div>

        </div>

        <div class="container text-center">
            <div class="row">
                <div class="col" id="conteudo">


                    <div class="formCampo">
                        <div class="textoForm text-center">
                            <h1>FAÇA SUA COMPRA</h1>
                            <p> PREENCHA AS INFORMAÇÕES</p>
                        </div>

                        <div class="form">
                            <form @submit.prevent="loginPedido">
                                <div class="mb-3">
                                    <input type="text" class="form-control" id="email" placeholder="PRODUTO:"
                                        style="margin-top:-4.4vh ;" v-model="pedido.produto">
                                </div>
                                <div class="mb-3">
                                    <input type="number" class="form-control" placeholder="QUANTIDADE:" v-model="pedido.quantidade">
                                </div>
                                <div class="mb-3">
                                    <input type="number" class="form-control" placeholder="VALOR UNITÁRIO" v-model="pedido.valorUnitario">
                                </div>
                                <div class="mb-3">
                                    <input type="number" class="form-control" placeholder="VALOR TOTAL" v-model="pedido.valorTotal">
                                </div>
                                <div class="mb-3">
                                    <input type="number" class="form-control" placeholder="VALOR COM DESCONTO" v-model="pedido.desconto">
                                </div>
                                <div class="mb-3">
                                    <input type="email" class="form-control" placeholder="E-MAIL:" v-model="pedido.email">
                                </div>
                                <div class="mb-3">
                                    <input type="password" class="form-control" placeholder="SENHA:" v-model="pedido.senha">
                                </div>

                                <p style="font-size: 2vh; margin-top: -30px;">Primeira vez? Faça o seu cadastro!</p>
                                <p style="font-size: 2vh; margin-top: -20px;"><a href="#"
                                        style="color: white; text-decoration: none;">CLIENTE</a> - <a href="#"
                                        style="color: white; text-decoration: none;">FUNCIONÁRIO</a> - <a href="#"
                                        style="color: white; text-decoration: none;">SUPERIOR</a></p>
                                <button class="botao" type="submit">CONFIRMAR</button>
                            </form>
                        </div>
                    </div>

                </div>


                <div class="col" id="conteudo">
                    <div class="formCampo">
                        <h1>PEDIDO #2139104</h1>

                    </div>
                </div>



            </div>
        </div>
</template>
<style scoped>
input {
    height: 5.5vh;
    margin-bottom: 5vh;
    border: .2vh solid black;
    box-shadow: .5vh .5vh white;
}

::placeholder {
    font-family: "Inder", sans-serif;
    padding-left: .6vw;

}

.botao {
    height: 5vh;
    width: 23vw;
    background-color: rgb(255, 102, 0);
    color: white;
    border: 0;
    cursor: pointer;
    border-radius: 1.6vw;
    transition: all 0.3s;
}


#fundo {
    background-color: #4D1C01;
    color: white;
    margin: 12vh;
    height: 105vh;
    opacity: 92%;
    border-radius: 40px;
}

#conteudo {
    height: .1px;
}

.formCampo {
    color: white;
    height: 100vh;
    position: relative;
    border-radius: 5vh;
    bottom: 130vh;
    margin: 13vh;
    right: 1vw;
}

.formCampo h1 {
    font-family: "Inder", sans-serif;
    padding-top: 3.8vh;
    font-size: 5.5vh;
}

.formCampo p {
    font-family: "Inder", sans-serif;
    padding-top: 1vh;
    font-size: 2.3vh;
}

.form {
    margin: 6.36vh;

}
</style>