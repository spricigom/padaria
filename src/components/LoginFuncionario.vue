<script setup>
import { Reactive } from 'vue'
const emit = defineEmits(['salvarLogin'])
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
if login () {
    let error = false
    if (funcionario.nome == '') {
        alert("Faltou o nome")
        error = true
    }
    if (funcionario.sobrenome == '') {
        alert("Faltou o sobrenome")
        error = true
    }
    if (funcionario.email == '') {
        alert("Faltou o e-mail")
        error = true
    }
    if (funcionario.nascimento == '') {
        alert("Faltou a data de nascimento")
        error = true
    }
    if (funcionario.senha == '') {
        alert("Faltou a senha")
        error = true
    }
    if (funcionario.confirmSenha == '') {
        alert("Faltou a confirmação de senha")
        error = true
    }
    if (funcionario.senha!= funcionario.confirmSenha) {
        alert("Senhas não conferem")
        error = true
    }
    if (!error) {
        emit('salvarLogin', {...funcionario})
    }
}
</script>
<template>
    <h1>Login</h1>
    <form @submit.prevent="login">
        <label for="">Nome:</label>
        <input type="date" v-model="funcionario.nome">
        <label for="">Sobrenome:</label>
        <input type="text" v-model="funcionario.sobrenome">
        <label for="">E-mail:</label>
        <input type="email" v-model="funcionario.email">
        <label for="">Data de nascimento:</label>
        <input type="date" v-model="funcionario.nascimento">
        <label for="">Senha:</label>
        <input type="password" v-model="funcionario.senha">
        <label for="">Confirmar senha:</label>
        <input type="password" v-model="funcionario.confirmSenha">
        <label for="">Cadastro:</label>
        <input type="text" v-model="funcionario.cadastro">
        <label for="">Carteira de trabalho:</label>
        <input type="text" v-model="funcionario.carteiraTrab">
        <button type="submit">Concluir</button>
    </form>

</template>

<style scoped></style>