<script setup>
import HeaderNav from '@/componentes/default/HeaderNav.vue'
</script>
<template>
    <header>
        <HeaderNav />
    </header>

    <main>
        <div class="text-center"><h1>CONHECA NOSSOS <br> PRINCIPAIS <br> FORNECEDORES</h1></div>
        <div class="container text-center">
            <div class="row">
                <div class="col">

                    <div class="empresa">
                        <h2>MASSAS</h2>
                        <h4>CARREFOUR</h4>
                    </div>


                    <div class="dados">
                        <p>COD: 0001</p>
                        <p style="margin-top: -2vh;">CNPJ: 0101122</p>
                    </div>
                    <div class="endereco">

                        <p>ENDEREÇO: RUA DO CAFÉ, CENTRO, 327</p>

                    </div>
                </div>


                <div class="col">

                    <div class="empresa">
                        <h2>DOCES</h2>
                        <h4>CIA DO CAFÉ</h4>
                    </div>


                    <div class="dados">
                        <p>COD: 0001</p>
                        <p style="margin-top: -2vh;">CNPJ: 0101122</p>
                    </div>
                    <div class="endereco">

                        <p>ENDEREÇO: RUA DO CAFÉ, CENTRO, 327</p>

                    </div>
                </div>
                <div class="col">

                    <div class="empresa">
                        <h2>INGREDIENTES</h2>
                        <h4>INDUSTRIAS NOGUEIRA</h4>
                    </div>


                    <div class="dados">
                        <p>COD: 0001</p>
                        <p style="margin-top: -2vh;">CNPJ: 0101122</p>
                    </div>
                    <div class="endereco">

                        <p>ENDEREÇO: RUA DO CAFÉ, CENTRO, 327</p>

                    </div>
                </div>
                <div class="col">

                    <div class="empresa">
                        <h2>SALGADOS</h2>
                        <h4>SALGADOS PONTO CERTO</h4>
                    </div>


                    <div class="dados">
                        <p>COD: 0001</p>
                        <p style="margin-top: -2vh;">CNPJ: 0101122</p>
                    </div>
                    <div class="endereco">

                        <p>ENDEREÇO: RUA DO CAFÉ, CENTRO, 327</p>

                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
main {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('@/assets/comidas.jpg');
    background-position: 100%;
    height: 120vh;
}


.col {
    color: white;
    background-color: #502D2D;
    margin: 3vw;
    font-family: "Inder", sans-serif;

}
.dados{
    margin-top: 4vh;
}
h1{
    padding-top: 10vh;
    color: white;
    letter-spacing: 0.9vw;
}
h2 {
    padding-top: 4vh;
    font-size: 3.8vh;
}

h4 {
    margin-top: 2vh;
    font-size: 2.5vh;
}

p {
    font-size: 2vh
}
</style>