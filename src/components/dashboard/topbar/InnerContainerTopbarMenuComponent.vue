<script setup>
    const props = defineProps(
        {
            option: String,
            font_size: String
        }
    )
</script>

<template>
    <div class="container_topbar_menu">
        <div class="container_topbar_menu_text" :style="{fontSize: font_size}">
            <slot></slot>
        </div>
        <div class="option" v-if="option !== null">
            {{ option }} &gt;&gt;
        </div>
    </div>
</template>

<style scoped>
    .container_topbar_menu{
        display: flex;
        align-items: center;
    }
    .container_topbar_menu_text{
        font-weight: 300;
        padding: 1px 5px 1px 0;
        border-right: 1px solid var(--black);
        letter-spacing: 1px;
    }
    .option{
        padding: 5px
    }
</style>