<script setup>
import { useRoute } from 'vue-router';

    const props = defineProps(
        {
            icon: String,
            path: String,
        }
    )

    const route = useRoute()
    console.log(route.path);
</script>

<template>
    <div>
        <li class="nav-item li-button">
            <div class="button" :class="{active: path === route.path}" >
                <span class="icon">
                    <i :class="icon"></i>
                </span>
                <span class="text">
                    <slot name="text"></slot>
                </span>
            </div>
        </li>
    </div>
</template>

<style scoped>
    .button, .active{
        padding: 10px 20px;
        border-radius: 6px;
        margin-bottom: 15px;
    }
    .active,.button:hover{
        background: linear-gradient(90deg, #DC1919 0%, #A80505 100%);
        color: white;
    }
</style>