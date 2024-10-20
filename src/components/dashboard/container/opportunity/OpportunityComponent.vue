<script setup>
    
</script>

<template>
    <section id="opportunity_container">
        <div class="stats">
            <slot name="container"></slot>
        </div>
    </section>
</template>

<style scoped>
    #opportunity_container, .stats{
        padding: 0px;
        width: 100%;
        height: 100%;
    }
</style>