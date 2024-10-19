<script setup>
import { ref } from 'vue';

    defineProps(
        {
            type: String, 
            value: String,
            placeholder: String,
            name: String,
            libel: String,
            border: String
        }
    )
</script>

<template>
        <div class="input">
            <label :for="name">{{libel}}</label>
            <input :type="type" :name="name" :id="name" :value="value" :placeholder="placeholder" :style="{border: border}">
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
        border: 1px solid red;
        border-radius: 6px;
        font-size: 1.02rem;
    }
    .input input:focus{
        border: 1px solid red;   
        outline: 2px solid red;
    }
</style>