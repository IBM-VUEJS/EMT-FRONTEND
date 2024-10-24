<script setup>
    
</script>

<template>
    <section id="mon_profil">
        <div class="myprofil_navbar">
            <slot name="sidebar"></slot>
        </div>
        <div class="myprofil_container">
            <slot name="container"></slot>
        </div>
    </section>
</template>

<style scoped>
    #mon_profil{
        box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        padding: 20px 40px;
        display: grid;
        grid-template-columns: 300px 1fr;
        grid-template-rows: 1fr;
        width: 100%;
        height: 100%;
    }
    .myprofil_navbar{
        padding: 0 20px;
    }
    .myprofil_container{
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 190px 1fr;
        /* outline: 1px solid red; */
        height: 75vh;
    }
</style>