<script setup>
import { inject, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useWindowSize } from '@vueuse/core';

    const props = defineProps(
        {
            icon: String,
            svg: String,
            path: String,
            size: String,
            weight: String,
            color: String
        }
    )

    const route = useRoute()
    const isMobile = ref(false)
    const show = inject('show')
    const showNavbar = inject('showNavbar')
    const hideNavbarAndDarkBG = () => {
        if (isMobile.value === true) {
            show.value = false
            showNavbar.value = false
        } 
    }

    onMounted(() => {
        const {width} = useWindowSize()
        if(width < 1000) {
            isMobile.value = true
        }
    })
</script>

<template>
    <div @click="hideNavbarAndDarkBG">
        <li class="nav-item li-button">
            <div class="button" :class="{active: route.path.includes(path)}" >
                <span class="svg" v-if="svg">
                     <slot name="svg"></slot>
                </span>
                <span v-else-if="icon" class="icon">
                    <i :class="icon"></i>
                </span>
                <span v-else class="icon">
                </span>
                <span v-if="color" class="text_color" :style="{fontSize: size, fontWeight: weight}">
                    <slot name="text"></slot>
                </span>
                <span v-else class="text" :style="{fontSize: size, fontWeight: weight}">
                    <slot name="text"></slot>
                </span>
            </div>
        </li>
    </div>
</template>

<style>
    .button{
        display: flex;
        align-items: end;
    }
    .text{
        padding: 0;
    }
    .button, .active{
        padding: 10px 15px;
        border-radius: 6px;
        margin-bottom: 10px;
    }
    .active, .button:hover{
        background: linear-gradient(90deg, #DC1919 0%, #A80505 100%);
        color: var(--white);
    }
    .active .text_color{
        color: var(--white);
    }
    .button:hover .text{
        color: var(--white);
    }
    .text_color{
        color: var(--grey);
    }
    .button:hover .text_color{
        color: var(--white);
    }
    .icon, .svg{
        margin-right: 15px;
    }
    .active .svg .text, .active .svg .svg_icon, .button:hover .svg .svg_icon{
        filter: invert(100%);
    }
    .text{
        font-size: .85rem;
    }
</style>