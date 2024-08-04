<script setup></script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg ">
            <div class="container-fluid">
                <RouterLink to="/" class="navbar-brand"><img src="@/assets/logo.png" alt=""> </RouterLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">


                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        </li>
                    </ul>



                    <ul class="navbar-nav">
                        <li>
                            <h6><a class="nav-link" href="">HOME</a></h6>
                        </li>

                        <li>
                            <h6><a class="nav-link" href="">CARDÁPIO</a></h6>
                        </li>

                        <li>
                            <h6><a class="nav-link" href="">MINHAS COMPRAS</a></h6>
                        </li>

                        <li>
                            <h6><a class="nav-link" href="">FUNCIONARIOS</a></h6>
                        </li>

                    </ul>




                </div>
            </div>
        </nav>
    </header>

    <body>

        <div class="conteiner">
            <img src="@/assets/vitrinePadaria.jpg" alt="">

        </div>
        <div class="fundoForm"></div>
        
        <div class="formCampo text-center">
            <h1>LOGIN</h1>
            <p>PREENCHA SUAS INFORMAÇÕES</p>

            <div class="form text-left">
                <form>
                <div class="mb-3">
                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="E-MAIL:">
                    
                </div>
                <div class="mb-3">
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="SENHA:">
                </div>
                <p style="font-size: 2vh; margin-top: -30px;">Primeira vez? Faça o seu cadastro!</p>
                <p  style="font-size: 2vh; margin-top: -20px;"><a href="#" style="color: white; text-decoration: none;">CLIENTE</a> - <a href="#" style="color: white; text-decoration: none;">FUNCIONÁRIO</a> - <a href="#" style="color: white; text-decoration: none;">SUPERIOR</a></p>
                <button class="botao">CONFIRMAR</button>
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

.conteiner {
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    margin-bottom: -1000px;
}
.form{
    margin: 50px;
    
}
input{
    height: 5.5vh;
    margin-bottom: 40px;
    border: 1.9px solid black;
    box-shadow: 4px 4px white ;
}
::placeholder{
    font-family: "Inder", sans-serif;
    padding-left: 10px;

}
.botao{
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

.textoCadastro{
    font-size: 1vh;
}

.botao:hover{
    height: 44.444px;
    width: 200px;
    background-color: rgb(255, 102, 14);
}


.fundoForm {
    opacity: 92%;
    height: 500px;
    width: 500px;
    background-color: #4D1C01;
    position: relative;
    top: 200px;
    left: 565px;
    border-radius: 40px;
}

.formCampo {
    color: white;
    height: 500px;
    width: 500px;
    position: relative;
    bottom: 300px;
    left: 565px;
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
    width: 18vh;
}

.navbar {
    height: 17vh;
    background-color: #4D1C01;
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
    box-shadow: .00001px -10px;
}

.produto,
img {
    width: 100%;
}
</style>
