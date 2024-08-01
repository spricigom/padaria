<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <RouterLink to="/dono">Ver perfil </RouterLink>

    <header>
        <nav class="navbar navbar-expand-lg ">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><img src="@/assets/logo.png" alt=""></a>
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
    <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="@/assets/cafe.png" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="@/assets/cafe.png" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="@/assets/cafe.png" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<style scoped>
.nav-link{
    color: white;
}

li{
    margin-left: 60px;
}

.textoBaixo{
    padding-top: 7px;
    font-family: "IM Fell Great Primer", serif;
}

.navbar-brand{
    width: 18vh;
}

.campoBaixo {
    height: 3.5vh;
    margin-left: 15px;
    margin-right: 15px;
    bottom: 50px;
    background-color: #642D0E;
    color: white;
}

.navbar {
    height: 17vh;
    top: 180px;
    justify-content: space-between;
    position: relative;
    
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

.imagem{
    height: 68vh;
    border-radius: 10px;
}
h1{
    font-size: 3.5vh;
    padding: 35px;
}
h6{
    font-size: 2vh;
}


</style>

