<script setup>
    
</script>

<template>
    <div id="inner_container">
        <RouterView></RouterView>
    </div>
</template>

<style scoped>
    #inner_container{
        display: flex;
        flex-direction: column;
        padding: 10px 20px 25px 20px;
        gap: 10px;
        height: 100%;
        width: 100%;
        background-color: var(--menu-bg);
        overflow-y: scroll;
    }

    @media screen and (max-width: 1300px) 
    {
        #inner_container{
        }        
    }
</style>