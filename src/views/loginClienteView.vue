<script setup>
import HeaderNav from '@/componentes/HeaderNav.vue';
// const principal = reactive({
//     email: '',
//     senha: ''

// })
// function salvarLogin(novoLogin) {
//     Object.assign(login, novoLogin)
// }
</script>

<template>
    <header>
        <headerNav />
    </header>

    <body>
        <div class="conteiner">
            <div class="fundoForm"></div>



            <div class="formCampo">
                <div class="textoForm text-center">
                    <h1>LOGIN CLIENTE</h1>
                    <p> PREENCHA AS INFORMAÇÕES</p>
                </div>
                
                 <div class="form">
                <form @submit.prevent="login">
                    <div class="mb-3">
                        <input type="text" class="form-control" id="email" placeholder="NOME:"
                            style="margin-top:-4.4vh ;">
                    </div>
                    <div class="mb-3">
                        <input type="number" class="form-control" placeholder="CPF:">
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control" placeholder="CIDADE:">
                    </div>
    
    
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="mb-3">
                                    <input type="text" class="form-control" placeholder="BAIRRO:">
                                </div>
                            </div>
                            <div class="col">
                                <div class="mb-3">
                                    <input type="number" class="form-control" placeholder="NUMERO:">
                                </div>
                            </div>
                        </div>
    
    
                    </div>
    
                    <div class="mb-3">
                        <input type="date" class="form-control" style="margin-top: -6.36vh;">
                    </div>
                    <div class="mb-3">
                        <input type="number" class="form-control" placeholder="TELEFONE:">
                    </div>
                    <div class="mb-3">
                        <input type="email" class="form-control" placeholder="E-MAIL:">
                    </div>
                    <div class="mb-3">
                        <input type="password" class="form-control" placeholder="SENHA:">
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
* {
    padding: 0;
    margin: 0;
}



body{
    background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url('@/assets/comidas.jpg');
    background-position: 100%;
    height: 135vh;
}
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
