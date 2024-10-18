<script setup>
    const props = defineProps(
        {
            option: String,
            font_size: String,
            navigation: Boolean
        }
    )
</script>

<template>
    <div class="container_topbar_menu">
        <template v-if="navigation">
            <div class="navigation">
                <slot name="navigation"></slot>
            </div>
            <div class="current_page_option">
                <div class="container_topbar_menu_text" :style="{fontSize: font_size}">
                    <slot name="current_page"></slot>
                </div>
                <div class="option" v-if="option !== null">
                    {{ option }} &gt;&gt;
                </div>
            </div>
        </template>
        <template v-else>
            <div class="current_page_option2">
                <div class="container_topbar_menu_text" :style="{fontSize: font_size}">
                    <slot name="current_page"></slot>
                </div>
                <div class="option" v-if="option !== null">
                    {{ option }} &gt;&gt;
                </div>
            </div>
        </template>
    </div>
</template>

<style scoped>
    .container_topbar_menu{
        display: flex;
        align-items: center;
        width: 100%;
    }
    .current_page_option{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .current_page_option2{
        display: flex;
        align-items: center;
        justify-content: end;
        width: 100%;
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