<script setup>
import {reactive} from 'vue';
import LoginFuncionario from './components/LoginFuncionario.vue';

const funcionario = reactive({
    nome: '',
    sobrenome: '',
    email: '',
    nascimento: '',
    senha: '',
    confirmSenha: '',
    cadastro: '',
    carteiraTrab: ''
})
function salvarLogin(novoLogin) {
    Object.assign(login, novoLogin)
}
</script>
<template>
        <funcionario @login="salvarLogin"/>
</template>

<style scoped></style>