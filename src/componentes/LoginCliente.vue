<script setup>
import { reactive } from 'vue';
const emit = defineEmits(['salvarLoginCliente'])
const cliente = reactive({
    nome: '',
    cpf: '',
    cidade: '',
    cep: '',
    numero:'',
    nascimento:'',
    telefone: '',
    email:'',
    senha:''
})
function loginCliente(){
    let error = false
    if (!error) {
        emit('salvarLoginCliente', { ...cliente })
    }
}
</script>
<template>

<body>
        <div class="conteiner">
            <div class="fundoForm"></div>



            <div class="formCampo">
                <div class="textoForm text-center">
                    <h1>LOGIN CLIENTE</h1>
                    <p> PREENCHA AS INFORMAÇÕES</p>
                </div>
                
                 <div class="form">
                <form @submit.prevent="loginCliente">
                    <div class="mb-3">
                        <input type="text" class="form-control" id="email" placeholder="NOME:"
                         v-model="cliente.nome"   style="margin-top:-4.4vh ;">
                    </div>
                    <div class="mb-3">
                        <input type="number" class="form-control" placeholder="CPF:" v-model="cliente.cpf">
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control" placeholder="CIDADE:" v-model="cliente.cidade">
                    </div>
    
    
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="mb-3">
                                    <input type="number" class="form-control" placeholder="CEP:" v-model="cliente.cep">
                                </div>
                            </div>
                            <div class="col">
                                <div class="mb-3">
                                    <input type="number" class="form-control" placeholder="NUMERO:" v-model="cliente.numero">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <input type="date" class="form-control" style="margin-top: -6.36vh;" placeholder="DATA DE NASCIMENTO" v-model="cliente.nascimento">
                    </div>
                    <div class="mb-3">
                        <input type="number" class="form-control" placeholder="TELEFONE:" v-model="cliente.telefone">
                    </div>
                    <div class="mb-3">
                        <input type="email" class="form-control" placeholder="E-MAIL:" v-model="cliente.email">
                    </div>
                    <div class="mb-3">
                        <input type="password" class="form-control" placeholder="SENHA:" v-model="cliente.senha">
                    </div>    
    
                    <div class="Btn text-center">
                        <button class="botao " type="submit">CONFIRMAR</button>
 
                    </div>
                </form>
            </div>
            </div>

           
        </div>
            
    </body>
</template>
<style scoped>
.conteiner {
    display: flex;
    align-items: center;
    justify-content: center;
    
}

.form {
    margin: 6.36vh;

}

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

.botao:hover {
    height: 5.65vh;
    width: 25vw;
    background-color: rgb(255, 102, 14);
}


.fundoForm {
    opacity: 92%;
    height: 110vh;
    width: 32vw;
    background-color: #4D1C01;
    position: relative;
    border-radius: 5vh;
    left: 15vw;
    top: 10vh;

}

.formCampo {
    color: white;
    height: 100vh;
    width: 32vw;
    position: relative;
    border-radius: 5vh;
    right: 33vh;
    top: 5vh;
    
}

.formCampo h1 {
    font-family: "Inder", sans-serif;
    padding-top: 3.8vh;
    font-size: 5.5vh;
}

.formCampo p {
    font-family: "Inder", sans-serif;
    padding-top:1vh ;
    font-size: 2.3vh;
}

.col {
    margin-left: 0.6vw;
    margin-right: 0.6vw;
    margin-bottom: 6.36vh;
    height: 100%;
}

</style>