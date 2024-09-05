<script setup>
import HeaderNav from '@/componentes/HeaderNav.vue';
</script>

<template>
   
    <HeaderNav />
    <body>
        <div class="conteiner">
            <div class="fundoForm"></div>



            <div class="formCampo">
                <div class="textoForm text-center">
                    <h1>RELATÓRIO</h1>
                    <p> PREENCHA AS INFORMAÇÕES</p>
                    <p>SOMENTE PESSOAS AUTORIZADAS</p>
                </div>
                
                 <div class="form">
                <form @submit.prevent="login">
                    
                    <div class="mb-3">
                        <input type="email" class="form-control" placeholder="E-MAIL:">
                    </div>
                    <div class="mb-3">
                        <input type="password" class="form-control" placeholder="SENHA:">
                    </div>    
    
                    <div class="Btn text-center">
                       <RouterLink to="fornecedores"> <button class="botao " type="submit">CONFIRMAR</button> </RouterLink>
 
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
    height: 110vh;
    background-size:cover ;
    
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
    height: 55vh;
    width: 32vw;
    background-color: #4D1C01;
    position: relative;
    border-radius: 5vh;
    left: 15vw;
    bottom: 15vh;

}

.formCampo {
    color: white;
    height: 100vh;
    width: 32vw;
    position: relative;
    border-radius: 5vh;
    right: 33vh;
    top: 7vh;
    
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
