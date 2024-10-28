<script setup>
    
</script>

<template>
    <ul id="navigation">
        <slot></slot>
    </ul>
</template>

<style scoped>
    #navigation{
        display: flex;
        align-items: center;
        gap: 10px;
        list-style: none;
        height: 100%;
        margin: 0;
        padding: 0;
    }
    @media screen and (max-width: 1100px) {
        #navigation {
            display: flex;
            align-items: center;
            justify-content: start;
            flex-direction: column;
            display: none;
        }        
    }
</style>