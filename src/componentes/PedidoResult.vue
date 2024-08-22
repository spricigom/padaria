<script setup>
defineProps(['pedido'])
</script>
<template>
    <h3>{{pedido.produto}}</h3>
    <h3>{{ pedido.quantidade }}</h3>
    <h3>{{ pedido.valorUnitario }}</h3>
    <h3>{{ pedido.valorTotal }}</h3>
    <h3>{{ pedido.desconto }}</h3>
    <h3>{{ pedido.email }}</h3>
</template>
<style scoped></style>