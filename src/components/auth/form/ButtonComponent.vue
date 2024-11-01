<script setup>
import { ref } from 'vue';

    defineProps(
        {
            type: String, 
            value: String,
            name: String,
            libel: String,
            button_width: String,
            button_height: String,
            size: String,
            bottom: String,
            bgcolor: String,
            textcolor: String,
            slim: Boolean,
            bordered: Boolean
        }
    )
</script>

<template>
        <div v-if="!bordered" class="input" :style="{marginBottom: bottom, width: button_width}">
            <button :type="type" :class="slim ? 'button_slim not_bordered' : 'button'" :style="{width: button_width, height: button_height, fontSize: size, marginBottom: bottom, backgroundColor: bgcolor, color: textcolor}">
                <slot></slot> {{ value }}
            </button> 
        </div>

        <div v-else class="input" :style="{marginBottom: bottom, width: button_width}">
            <button :type="type" :class="slim ? 'button_slim' : ''" class="bordered" :style="{width: button_width, height: button_height, fontSize: size, marginBottom: bottom, backgroundColor: bgcolor, color: textcolor}">
                <slot></slot> {{ value }}
            </button> 
        </div>
</template>

<style scoped>
    .input{
        display: flex;
        align-items: start;
        justify-content: center;
        gap: 10px;
        margin-bottom: 25px;
        flex-direction: column;
    }
    .button{
        width: 100%;
        padding: 10px 20px;
        background: var(--red-gradient-bg);
        border: none;
        border-radius: 6px;
        font-size: 1.025rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        font-weight: bold;
        color: var(--text-white);
        text-wrap: nowrap;
        cursor: pointer;
    }
    .not_bordered{
        background: var(--red-gradient-bg);
        color: var(--white);
        padding: 7px 20px;
    }
    .button_slim{
        border-radius: 5px;
        border: none;
    }
    .bordered{
        background-color: var(--white);
        color: var(--red);
        border: 2px solid var(--red);
        padding: 5px 20px;
        border-radius: 6px;
    }
</style>