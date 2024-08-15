<script setup>
import HeaderNav from '@/componentes/HeaderNav.vue';
import LoginPrincipal from '@/componentes/LoginPrincipal.vue';
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

        <div class="conteiner">
            <div class="form text-left">
                <form @submit.prevent="login">
                    <div class="mb-3">
                        <input type="text" class="form-control" id="email" placeholder="NOME:"
                            style="margin-top:-35px ;">
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
                        <input type="date" class="form-control" style="margin-top: -50px;">
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
    
                    <div class="perguntaCadastro">
                        <p>Primeira vez? Faça o seu cadastro!</p>
                    </div>
                    <div class="opcoesCadastro">
                        <p><a href="#"
                                style="color: white; text-decoration: none;">CLIENTE</a> - <a href="#"
                                style="color: white; text-decoration: none;">FUNCIONÁRIO</a> - <a href="#"
                                style="color: white; text-decoration: none;">SUPERIOR</a></p>
                    </div>
                    <button class="botao" type="submit">CONFIRMAR</button>
                </form>
            </div>
        </div>
            

        

</template>
<style scoped>
* {
    padding: 0;
    margin: 0;
}

.conteiner {
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('@/assets/vitrinePadaria.jpg');
    background-position: 100%;
    /* margin-bottom: -1050px; */
}
.conteiner img{
    height: 150vh;
}

.form {
    margin: 50px;

}

input {
    height: 5.5vh;
    margin-bottom: 40px;
    border: 1.9px solid black;
    box-shadow: 4px 4px white;
}

::placeholder {
    font-family: "Inder", sans-serif;
    padding-left: 10px;

}

.botao {
    height: 40px;
    width: 180px;
    background-color: rgb(255, 102, 0);
    color: white;
    border: 0;
    margin-top: 45px;
    cursor: pointer;
    border-radius: 25px;
    transition: all 0.3s;
}

.textoCadastro {
    font-size: 1vh;
}

.botao:hover {
    height: 44.444px;
    width: 200px;
    background-color: rgb(255, 102, 14);
}


.fundoForm {
    opacity: 92%;
    /* height: 1100px; */
    width: 500px;
    background-color: #4D1C01;
    position: relative;
    /* bottom: 70px; */
    /* left: 565px; */
    border-radius: 40px;

}

.formCampo {
    color: white;
    height: 800px;
    width: 500px;
    position: relative;
    /* bottom: 1150px; */
    /* left: 565px; */
    border-radius: 40px;
}

.formCampo h1 {
    padding-top: 30px;
    font-family: "Inder", sans-serif;
    font-size: 5.5vh;
}

.formCampo p {
    font-family: "Inder", sans-serif;
    padding-top: 20px;
    font-size: 2.3vh;
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
    /* width: 18vh; */
}

.navbar {
    /* height: 17vh; */
    background-color: #4D1C01;
    justify-content: space-between;
}



.fundo {
    /* height: 83vh; */
    background-color: #fcf9c6;
}

.col {
    margin-left: 40px;
    margin-right: 40px;
    margin-bottom: 50px;
    height: 100%;
}

.produto {
    margin-top: -93px;
    box-shadow: .00001px -10px;
}

.produto,
img {
    width: 100%;
}

.perguntaCadastro {
    font-size: 2vh; margin-top: -30px;
}

.opcoesCadastro {
    font-size: 2vh; margin-top: -20px;
}
</style>
