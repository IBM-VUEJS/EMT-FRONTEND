<script setup>
import buttons from './ButtonNavigationComponent';
import NaviationButtonComponent from './NaviationButtonComponent.vue';
import EbaLogoComponent from './EbaLogoComponent.vue';

</script>

<template>
    <div class="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style="width: 280px;">
        <EbaLogoComponent></EbaLogoComponent>
        <ul class="nav nav-pills flex-column mb-auto">
            <slot name="content"></slot>
        </ul>
    </div>
</template>

<style>
    
</style>