<script setup>
import EbaLogoComponent from './EbaLogoComponent.vue';
import { inject, onMounted, ref } from 'vue';
import { useWindowSize } from '@vueuse/core'

const showNavbar = inject('showNavbar')
const show = inject('show')
const hideNavbarFunc = () => {
    showNavbar.value = false
    show.value = false
}
onMounted(() => {
    const {width} = useWindowSize()
    if (width.value < 1000) {
        showNavbar.value = false
    }else{
        showNavbar.value = true
    }
})

</script>

<template>
    <div class="d-flex flex-column  px-3 bg-body-light" id="sidebar" v-if="showNavbar">
        <div class="hide_nav_bar">
            <div class="hide_navbar_icon" @click="hideNavbarFunc">
                <i class="bi bi-x-square"></i>
            </div>
        </div>
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
    .hide_nav_bar{
        display: none;
    }

    @media screen and (max-width: 1200px) {
        #sidebar{
            display: none;
            position: absolute;
            z-index: 10;
            background-color: var(--white);
            width: 245px;
            height: 100svh;
            top: 0;
            left: 0;
        }
        .hide_nav_bar{
            display: block;
            width: 100%;
            position: relative;
            cursor: pointer;
        }
        .hide_navbar_icon{
            /* width: 40px;
            height: 40px; */
            /* border: 2px solid var(--red); */
            background-color: var(--white);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            color: var(--red);
            position: absolute;
            right: -10px;
        }
    }
</style>