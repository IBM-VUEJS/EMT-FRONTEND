<script setup>
import EbaLogoComponent from '@/components/dashboard/navigationbar/EbaLogoComponent.vue';

    
</script>

<template>
    <div class="form_container">
        <div class="form">
            <EbaLogoComponent :width="220"></EbaLogoComponent>
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
    .form_container{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }
    .form{
        display: grid;
        grid-template-rows: 180px 1fr;
        width: 460px;
        min-height: 400px;

    }
</style>