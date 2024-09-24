<script setup>
import { RouterLink } from 'vue-router'
</script>


<template>

    <body>


        <div id="carouselExampleCaptions" class="carousel slide">
            <div class="carousel-indicators">
                <button id="botao" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button id="botao" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                
            </div>
            <div class="carousel-inner">
                <RouterLink to="/loginprincipal">
                      <div class="carousel-item active">
                    <img src="@/assets/cafe.png" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                      
                        <h5>BEM -VINDO A <br> PADARAIA SANTO PÃO</h5>
                        <p>Faça seu login</p>
                    </div>
                </div>
                </RouterLink>
                
                <RouterLink to="/Cardapio">
                     <div class="carousel-item">
                    <img src="@/assets/comidasCarrossel.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>VEJA OS <br> NOSSOS PRODUTOS</h5>
                    </div>
                </div>
                </RouterLink>

               
                
            </div>
            
        </div>
    </body>


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
                           <RouterLink to="/" class="nav-link"> <h6>HOME</h6> </RouterLink>
                        </li>
                        <li>
                           <RouterLink to="cardapio" class="nav-link"> <h6>CARDÁPIO</h6> </RouterLink>
                        </li>
                        <li>
                           <RouterLink to="relatorio" class="nav-link"><h6> RELATORIO</h6></RouterLink> 
                        </li>
                        <li>
                          <RouterLink to="dono" class="nav-link">  <h6>FUNCIONARIOS</h6> </RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    


</template>
<style scoped>
.carousel-caption{
    bottom: 10vh;
}
.nav-link {
    color: white;
    text-decoration: none;
}

li {
    margin-left: 60px;
}

.navbar-brand {
    width: 18vh;
}

.navbar {
    height: .0000001px;
    background: none;
    justify-content: space-between;
    display: flex;
    position: relative;
    bottom: 97vh;

}

img {
    width: 100%;
}



h5 {
    font-family: "IM Fell DW Pica", serif;
    font-size: 3vh;
    letter-spacing: .5vw;
}
#botao{
    margin: 1.5vh;
    height: 3.5vh;
    width: 3.5vh;
    border-radius: 100%;
}

</style>