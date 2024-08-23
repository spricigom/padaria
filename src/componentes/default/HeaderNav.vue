<script setup>
</script>
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
</template>
<style scoped>
.nav-link{
    color: white;
}

li{
    margin-left: 60px;
}
.navbar-brand{
    width: 18vh;
}
.navbar {
    height: 17vh;
    justify-content: space-between;
}

img {
    width: 100%;
}



h6{
    font-size: 2vh;
}

</style>