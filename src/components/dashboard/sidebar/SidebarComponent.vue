<script setup>
import buttons from './ButtonNavigationComponent';
import NaviationButtonComponent from './NaviationButtonComponent.vue';
import EbaLogoComponent from './EbaLogoComponent.vue';

</script>

<template>
    <div class="d-flex flex-column  px-3 bg-body-light" style="width: 280px; box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2);">
        <EbaLogoComponent></EbaLogoComponent>
        <ul class="nav nav-pills flex-column">
            <div class="nav_btn">
                <slot name="content"></slot>
            </div>
        </ul>
    </div>
</template>

<style scoped>
    .nav_btn{
        margin: 0;
    }
</style>