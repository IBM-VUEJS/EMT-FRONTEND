<script setup>
    
</script>

<template>
    <div id="dark_bg">
        <slot></slot>
    </div>
</template>

<style scoped>
    #dark_bg{
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 10;
        background-color: rgba(0, 0, 0, 0.4);
    }
</style>