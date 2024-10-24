<script setup>
    import { ref } from 'vue';
    import EyehideoutlineIcon from '@/components/icons/EyehideoutlineIcon';
    import EyeoutlineIcon from '@/components/icons/EyeoutlineIcon';
    import SearchIcon from '@/components/icons/SearchIcon';

    const show_password = ref(false)

    defineProps(
        {
            type: String, 
            value: String,
            placeholder: String,
            name: String,
            libel: String,
            border: String,
            width: String,
            radius: String,
            search: Boolean,
            bottom: String,
            padding: String,
            readonly: Boolean,
            height: String
        }
    )
</script>

<template>
        <div class="inputs" :style="{marginBottom: bottom}">
            <label :for="name">{{libel}}</label>
            <template v-if="type === 'password'">
                <div class="input_div"  :style="{border: border}">
                    <input :type="show_password ? 'text' : 'password'" :name="name"  :placeholder="placeholder" :readonly="readonly" >
                    <div class="icon" @click="show_password = !show_password">
                        <template v-if="show_password">
                            <span v-html="EyeoutlineIcon"></span>
                        </template>
                        <template v-else>
                            <span v-html="EyehideoutlineIcon"></span>
                        </template>
                    </div>
                </div>
            </template>
            <template v-else>
                <input class="input" :type="type" :name="name" :id="name" :value="value" :placeholder="placeholder" :style="{border: border, width: width, borderRadius: radius, padding: padding, height: height}" :readonly="readonly">
            </template>
        </div>
</template>

<style scoped>
    .inputs{
        display: flex;
        align-items: start;
        justify-content: center;
        gap: 10px;
        margin-bottom: 25px;
        flex-direction: column;
    }
    .inputs .input{
        padding: 5px 20px;
    }
    .inputs .input, .input_div{
        width: 100%;
        border: 1px solid red;
        border-radius: 6px;
        font-size: 1.02rem;
    }
    .inputs .input:focus{
        border: 1px solid var(--red);   
        outline: 2px solid var(--red);
    }
    .input_div{
        display: grid;
        grid-template-columns: 1fr 50px;
        background-color: var(--white);
    }
    .input_div:focus-within{
        border: 1px solid red;   
        outline: 2px solid red;
    }
    .input_div input{
        width: auto;
        padding: 5px 20px;
        border: none;
        outline: none;
        background-color: transparent
    }
    .input_div div{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
    }
</style>