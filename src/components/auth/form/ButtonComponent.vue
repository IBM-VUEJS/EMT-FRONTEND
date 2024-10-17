<script setup>
import { ref } from 'vue';

    defineProps(
        {
            type: String, 
            value: ref,
            name: String,
            libel: String
        }
    )
</script>

<template>
        <div class="input">
            <input :type="type" :name="name" :id="name" :value="value">
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
    .input input{
        width: 100%;
        padding: 10px 20px;
        background: var(--red-gradient-bg);
        border: none;
        border-radius: 6px;
        font-size: 1.025rem;
        text-align: center;
        align-content: center;
        font-weight: bold;
        color: var(--text-white);
        cursor: pointer;
    }
</style>