<script setup>
import buttons from './DashboardButtonNavigationLinks';
import NaviationButtonComponent from './NavigationButtonComponent.vue';
import EbaLogoComponent from './EbaLogoComponent.vue';

</script>

<template>
    <div class="d-flex flex-column  px-3 bg-body-light sidebar" style="">
        <EbaLogoComponent></EbaLogoComponent>
        <ul class="nav nav-pills flex-column">
            <div class="nav_btn">
                <slot name="content"></slot>
            </div>
        </ul>
    </div>
</template>

<style>
    .sidebar{
        position: sticky;
        top: 10px;
        width: 280px; 
        box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2);
    }
    .nav_btn{
        margin: 0;
    }
</style>