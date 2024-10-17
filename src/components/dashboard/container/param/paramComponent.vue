<script setup>
    
</script>

<template>
    <section id="mon_profil">
        <div class="myprofil_navbar">
            <slot></slot>
        </div>
        <div></div>
    </section>
</template>

<style scoped>
    #mon_profil{
        box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        padding: 10px 20px;
        display: grid;
        grid-template-columns: 300px 1fr;
        grid-template-rows: 1fr;
        width: 100%;
        height: 100%;
    }
</style>