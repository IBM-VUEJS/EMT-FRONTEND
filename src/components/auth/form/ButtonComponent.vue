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
            bottom: String
        }
    )
</script>

<template>
        <div class="input">
            <button :type="type" :name="name" :id="name" :style="{width: button_width, height: button_height, fontSize: size, marginBottom: bottom}" >
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
    .input button{
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
</style>