<script setup>
import buttons from './DashboardButtonNavigationLinks';
import NaviationButtonComponent from './NavigationButtonComponent.vue';
import EbaLogoComponent from './EbaLogoComponent.vue';

</script>

<template>
    <div class="d-flex flex-column  px-3 bg-body-light sidebar" style="" id="sidebar">
        <EbaLogoComponent></EbaLogoComponent>
        <ul class="nav nav-pills flex-column">
            <div class="nav_btn">
                <slot name="content"></slot>
            </div>
        </ul>
    </div>
</template>

<style>
    #sidebar{
        position: sticky;
        top: 10px;
        width: 100%; 
        box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2);
        overflow-y: scroll;
    }
    #sidebar:hover{
        overflow-y: scroll;
    }
    #sidebar::-webkit-scrollbar{
        width: 2px;
    }
    #sidebar::-webkit-scrollbar-thumb{
        background: var(--white);
        border-radius: 10px;
    }
    #sidebar:hover::-webkit-scrollbar-thumb{
        background: var(--red);
        border-radius: 10px;
    }
    .nav_btn{
        margin: 0;
    }

    @media screen and (max-width: 1200px) {
        #sidebar{
            display: none !important;
        }
    }
</style>