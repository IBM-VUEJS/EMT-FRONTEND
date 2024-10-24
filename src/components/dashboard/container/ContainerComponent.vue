<script setup>
    
</script>

<template>
    <div id="inner_container">
        <RouterView></RouterView>
    </div>
</template>

<style scoped>
    #inner_container{
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 40px 1fr;
        padding: 10px 20px 25px 20px;
        gap: 10px;
        height: 100%;
        width: 100%;
        overflow-y: scroll;
        background-color: var(--menu-bg);
    }
</style>