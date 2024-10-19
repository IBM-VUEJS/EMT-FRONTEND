<script setup>
import { ref } from 'vue';

    defineProps(
        {
            options: Array, 
            value: ref,
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
            <select name="" id="" :style="{border: border}">
                <template v-for="option in options">
                    <option :value="option['value']">
                        {{ option['libel'] }}
                    </option>
                </template>
            </select>
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
    .input select{
        width: 100%;
        padding: 10px 20px;
        border: 1px solid red;
        border-radius: 6px;
        font-size: 1.02rem;
        background-color: var(--white);
    }
    .input select:focus{
        border: 1px solid var(--red);   
        outline: 2px solid var(--red);
    }
</style>