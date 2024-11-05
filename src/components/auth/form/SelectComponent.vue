<script setup>
import { ref } from 'vue';

    defineProps(
        {
            options: Array, 
            placeholder: String,
            name: String,
            libel: String,
            border: String,
            bgColor: String,
            width: String,
            purple: Boolean,
            bottom: String,
            disabled: Boolean,
            isvisiblelibel: Boolean,
            padding: String
        }
    )
</script>

<template>
        <div class="input_select">
            <label v-if="!isvisiblelibel" :for="name">{{libel}}</label>
            <select name="" id="" :style="{border: border, backgroundColor: bgColor, width: width, marginBottom: bottom, padding: padding}" :class="purple ? 'purple' : 'select'" :disabled="disabled">
                <template v-for="option in options">
                    <option :value="option['value']">
                        {{ option['libel'] }}
                    </option>
                </template>
            </select>
            <small class="small_error">
                    <template v-if="error">
                        {{ error }}
                    </template>
                </small>
        </div>
</template>

<style scoped>
    .input_select{
        display: flex;
        align-items: start;
        justify-content: center;
        gap: 10px;
        height: 100%;
        /* padding: 0 10px; */
        flex-direction: column;
    }
    .input_select .select{
        width: 100%;
        padding: 5px;
        border: 1px solid var(--red);
        border-radius: 6px;
        font-size: 1.02rem;
        background-color: var(--white);
        color: var(--grey)
    }
    select option{
        color: var(--grey);
    }
    .input_select .select:focus{
        border: 1px solid var(--red);   
        outline: 2px solid var(--red);
    }
    .purple{
        width: 100%;
        padding: 10px 20px;
        border-radius: 6px;
        font-size: 1.02rem;
        background-color: var(--white);
    }
    .purple:focus{
        border: 1px solid var(--purple);   
        outline: 2px solid var(--purple);
    }
    .select_error{
        text-wrap: nowrap;
    }
</style>