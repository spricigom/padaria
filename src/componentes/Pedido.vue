<script setup>
import { reactive } from 'vue';
const emit = defineEmits(['enviarPedido'])
const pedido = reactive({
  produto: '',
  quantidade: '',
  valorUnitario: '',
  valorTotal: '',
  desconto: '',
  email: '',
  senha: ''
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
      <div class="col" id="fundo"></div>
      <div class="col" id="fundo"></div>
    </div>
  </div>

  <div class="container text-center">
    <div class="row">
      <div class="col" id="conteudo">
        <div class="formCampo">
          <div class="textoForm text-center">
            <h1>FAÇA SUA COMPRA</h1>
            <p>PREENCHA AS INFORMAÇÕES</p>
          </div>

          <div class="form">
            <form @submit.prevent="loginPedido">
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="email"
                  placeholder="PRODUTO:"
                  style="margin-top: -4.4vh"
                  v-model="pedido.produto"
                />
              </div>
              <div class="mb-3">
                <input
                  type="number"
                  class="form-control"
                  placeholder="QUANTIDADE:"
                  v-model="pedido.quantidade"
                />
              </div>
              <div class="mb-3">
                <input
                  type="number"
                  class="form-control"
                  placeholder="VALOR UNITÁRIO"
                  v-model="pedido.valorUnitario"
                />
              </div>
              <div class="mb-3">
                <input
                  type="number"
                  class="form-control"
                  placeholder="VALOR TOTAL"
                  v-model="pedido.valorTotal"
                />
              </div>
              <div class="mb-3">
                <input
                  type="number"
                  class="form-control"
                  placeholder="VALOR COM DESCONTO"
                  v-model="pedido.desconto"
                />
              </div>
              <div class="mb-3">
                <input
                  type="email"
                  class="form-control"
                  placeholder="E-MAIL:"
                  v-model="pedido.email"
                />
              </div>
              <div class="mb-3">
                <input
                  type="password"
                  class="form-control"
                  placeholder="SENHA:"
                  v-model="pedido.senha"
                />
              </div>

              <p style="font-size: 2vh; margin-top: -30px">Primeira vez? Faça o seu cadastro!</p>
              <p style="font-size: 2vh; margin-top: -20px">
                <a href="#" style="color: white; text-decoration: none">CLIENTE</a> -
                <a href="#" style="color: white; text-decoration: none">FUNCIONÁRIO</a> -
                <a href="#" style="color: white; text-decoration: none">SUPERIOR</a>
              </p>
              <button class="botao" type="submit">CONFIRMAR</button>
            </form>
          </div>
        </div>
      </div>

      <div class="col" id="conteudo">

        
        <div class="formResultado">
          <div class="textoForm text-center">
            <h1>REVISE SUA COMPRA</h1>
            <p>CONFIRME AS INFORMAÇÕES</p>
          </div>

          <h4 class="resultado">{{ pedido.produto }}</h4>
          <h4 class="resultado">{{ pedido.quantidade }}</h4>
          <h4 class="resultado">{{ pedido.valorUnitario }}</h4>
          <h4 class="resultado">{{ pedido.valorTotal }}</h4>
          <h4 class="resultado">{{ pedido.desconto }}</h4>
          <h4 class="resultado">{{ pedido.email }}</h4>

          <button class="botao" id="enviar" @click="loginPedido">ENVIAR</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
#enviar {
  position: relative;
  top: 15vh;
}

.resultado {
  height: 5.5vh;
  margin-bottom: 5vh;
}

input {
  height: 5.5vh;
  margin-bottom: 5vh;
  border: 0.2vh solid black;
  box-shadow: 0.5vh 0.5vh white;
}

::placeholder {
  font-family: 'Inder', sans-serif;
  padding-left: 0.6vw;
}

.botao {
  height: 5vh;
  width: 23vw;
  background-color: rgb(255, 102, 0);
  color: white;
  border: 0;
  cursor: pointer;
  border-radius: 1.6vw;
}

#fundo {
  background-color: #4d1c01;
  color: white;
  margin-top: 12vh;
  margin-left: 4vw;
  margin-right: 4vw;
  height: 105vh;
  opacity: 92%;
  border-radius: 40px;
}

#conteudo {
  height: 0.1px;
}

.formCampo {
  color: white;
  height: 100vh;
  position: relative;
  border-radius: 5vh;
  bottom: 120vh;
  margin: 13vh;
  right: 4.5vw;
  width: 30vw;
}

.formCampo h1 {
  font-family: 'Inder', sans-serif;
  padding-top: 3.8vh;
  font-size: 5vh;
}

.formCampo p {
  font-family: 'Inder', sans-serif;
  padding-top: 1vh;
  font-size: 2.3vh;
}

.formResultado {
  color: white;
  height: 100vh;
  position: relative;
  border-radius: 5vh;
  bottom: 120vh;
  margin: 13vh;
  width: 30vw;
  left: 31vw;
}

.formResultado h1 {
  font-family: 'Inder', sans-serif;
  padding-top: 3.8vh;
  font-size: 5vh;
}

.formResultado p {
  font-family: 'Inder', sans-serif;
  padding-top: 1vh;
  font-size: 2.3vh;
}

.form {
  margin: 6.36vh;
}
</style>
