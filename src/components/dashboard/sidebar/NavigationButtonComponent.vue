<script setup>
import { useRoute } from 'vue-router';

    const props = defineProps(
        {
            icon: String,
            path: String,
            size: String,
            weight: String,
            color: String
        }
    )

    const route = useRoute()
    console.log(route.path);
</script>

<template>
    <div>
        <li class="nav-item li-button">
            <div class="button" :class="{active: path === route.path}" >
                <span v-if="icon" class="icon">
                    <i :class="icon"></i>
                </span>
                <span class="text" :style="{fontSize: size, fontWeight: weight, color: color}">
                    <slot name="text"></slot>
                </span>
            </div>
        </li>
    </div>
</template>

<style scoped>
    .button, .active{
        padding: 10px 15px;
        border-radius: 6px;
        margin-bottom: 25px;
    }
    .active,.button:hover{
        background: linear-gradient(90deg, #DC1919 0%, #A80505 100%);
        color: white;
    }
    .button:hover .text{
        color: var(--white);
    }
</style>