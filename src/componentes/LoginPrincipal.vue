<script setup>
import { reactive } from 'vue'
const emit = defineEmits(['salvarLogin'])
const principal = reactive({
    email: '',
    senha: ''
})
function login() {
    let error = false
    if (!error) {
        emit('salvarLogin', { ...principal })
    }
}
</script>

<template>

    <body>

        <div class="fundoForm"></div>

        <div class="formCampo text-center">
            <h1>LOGIN</h1>
            <p>PREENCHA SUAS INFORMAÇÕES</p>

            <div class="form text-left">
                <form @submit.prevent="login">
                    <div class="mb-3">
                        <input type="email" class="form-control" id="email" placeholder="E-MAIL:"
                            v-model="principal.email" />
                    </div>
                    <div class="mb-3">
                        <input type="password" class="form-control" id="senha" placeholder="SENHA:"
                            v-model="principal.senha" />
                    </div>
                    <p style="font-size: 2vh; margin-top: -30px">Primeira vez? Faça o seu cadastro!</p>
                    <p style="font-size: 2vh; margin-top: -20px">
                        <RouterLink to="loginCliente" style="color: white; text-decoration: none">CLIENTE</RouterLink> -
                        <RouterLink to="loginFuncionario" style="color: white; text-decoration: none">FUNCIONÁRIO
                        </RouterLink>
                        - <RouterLink to="loginDono" style="color: white; text-decoration: none">SUPERIOR</RouterLink>
                    </p>
                    <button class="botao" type="submit">CONFIRMAR</button>
                </form>
            </div>
        </div>
    </body>
</template>
<style scoped>
* {
    padding: 0;
    margin: 0;
}


body {
    display: flex;
    justify-content: center;
    text-align: center;

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
    font-family: 'Inder', sans-serif;
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

.botao:hover {
    height: 44.444px;
    width: 200px;
    background-color: rgb(255, 102, 14);
}

.textoCadastro {
    font-size: 1vh;
}

.fundoForm {
    opacity: 92%;
    height: 540px;
    width: 500px;
    background-color: #4d1c01;
    border-radius: 40px;
    position: relative;
    left: 250px;
    top: 10vh;

}

.formCampo {
    color: white;
    height: 500px;
    width: 500px;
    position: relative;
    right: 250px;
    border-radius: 40px;
    top: 10vh;
}

@media screen and (max-width: 2510px) {
    .fundoForm {
        background-color: #4d1c01;
        width: 40vw;
        height: 50vh;
        left: 20vw;
    }

    .formCampo {
        width: 40vw;
        height: 50vh;
        right: 20vw;
    }

    ::placeholder {
        font-family: 'Inder', sans-serif;
        padding-left: 2vh;
        font-size: 1.2vw;
    }

    .botao {
        height: 5vh;
        width: 15vw;
        font-size: 1vw;
    }

}

@media screen and (max-width: 2864px) {
    .fundoForm {
        background-color: #4d1c01;
        width: 40vw;
        height: 50vh;
        left: 20vw;
    }

    .formCampo {
        width: 40vw;
        height: 50vh;
        right: 20vw;
    }

    ::placeholder {
        font-family: 'Inder', sans-serif;
        padding-left: 2vh;
        font-size: 1.2vw;
    }

    .botao {
        height: 5vh;
        width: 15vw;
        font-size: 1vw;
    }

}

@media screen and (max-width: 1850px) {
    .fundoForm {
        background-color: #4d1c01;
        width: 40vw;
        height: 65vh;
        left: 20vw;
    }

    .formCampo {
        width: 40vw;
        height: 50vh;
        right: 20vw;
    }

    ::placeholder {
        font-family: 'Inder', sans-serif;
        padding-left: 2vh;
        font-size: 1vw;
    }

    input {
        height: 7vh;
    }

    .botao {
        height: 5vh;
        width: 15vw;
        font-size: 1vw;
    }

}

@media screen and (max-width: 1700px) {
    ::placeholder {
        font-family: 'Inder', sans-serif;
        padding-left: 2vh;
        font-size: 1.2vw;
    }
}

@media screen and (max-width: 1400px) {
    .botao {
        height: 5vh;
        width: 20vw;
        font-size: 1.4vw;
    }
}

@media screen and (max-width: 1313px) {
    ::placeholder {
        font-family: 'Inder', sans-serif;
        padding-left: 2vh;
        font-size: 1.3vw;
    }
}


@media screen and (max-width: 1135px) {
    .fundoForm {
        background-color: #4d1c01;
        width: 50vw;
        height: 65vh;
        left: 25vw;
    }

    .formCampo {
        width: 50vw;
        height: 50vh;
        right: 25vw;
    }

    ::placeholder {
        font-family: 'Inder', sans-serif;
        padding-left: 2vh;
        font-size: 1.4vw;
    }

    .botao {
        height: 5.3vh;
        width: 25vw;
        font-size: 1.4vw;
    }
}

@media screen and (max-width: 1024px) {
    ::placeholder {
        font-family: 'Inder', sans-serif;
        padding-left: 2vh;
        font-size: 1.5vw;
    }
}

@media screen and (max-width: 768px) {
    .fundoForm {
        background-color: #4d1c01;
        width: 70vw;
        height: 65vh;

    }

    .formCampo {
        width: 80vw;
        height: 50vh;

    }

    ::placeholder {
        font-family: 'Inder', sans-serif;
        padding-left: 2vh;
        font-size: 2vw;
    }

    .botao {
        height: 5.3vh;
        width: 30vw;
        font-size: 2vw;
    }
}

@media screen and (max-width: 425px) {
    body {
        display: flex;
        justify-content: center;
        text-align: center;
        flex-direction: column;
    }

    .fundoForm {
        background-color: #4d1c01;
        width: 100vw;
        height: 64vh;
        left: 0;

    }

    .formCampo {
        width: 100vw;
        height: 80vh;
        left: 0;
        top: -50vh;

    }

    ::placeholder {
        font-family: 'Inder', sans-serif;
        padding-left: 2vh;
        font-size: 3.4vw;
    }

    .botao {
        height: 5.3vh;
        width: 50vw;
        font-size: 3.5vw;
        margin-top: 2vh;
    }
}




.formCampo h1 {
    padding-top: 30px;
    font-family: 'Inder', sans-serif;
    font-size: 5.5vh;
}

.formCampo p {
    font-family: 'Inder', sans-serif;
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
    font-family: 'IM Fell Great Primer', serif;
}

.navbar-brand {
    width: 18vh;
}

.navbar {
    height: 17vh;
    background-color: #4d1c01;
    justify-content: space-between;
}

.fundo {
    height: 83vh;
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
    box-shadow: 0.00001px -10px;
}

.produto,
img {
    width: 100%;
}
</style>
