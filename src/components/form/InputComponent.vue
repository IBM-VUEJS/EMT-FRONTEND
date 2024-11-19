<script setup>
    import { ref, onMounted } from 'vue';
    import EyehideoutlineIcon from '@/assets/icons/EyehideoutlineIcon';
    import EyeoutlineIcon from '@/assets/icons/EyeoutlineIcon';
    import SearchIcon from '@/assets/icons/SearchIcon';

    const show_password = ref(false)
    const emits = defineEmits(['update:inputValue', 'update:passwordValue'])
    // const emits = defineEmits(['update:passwordValue'])

    const onPasswordChange = (event) => {
        emits('update:passwordValue', event.currentTarget.value)
    }
    const onInputChange = (event) => {
        emits('update:inputValue', event.currentTarget.value)
    }
    const props = defineProps(
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
            height: String,
            input_error: Array,
            inputValue: String,
            passwordValue: String
        }
    )
    onMounted(() => {
    })
</script>

<template>
        <div class="inputs" :style="{marginBottom: bottom}">
            <label :for="name">{{libel}}</label>
            <template v-if="type === 'password'">
                <div class="input_div"  :style="{border: border, padding: padding}">
                    <input :type="show_password ? 'text' : 'password'" :name="name"  :placeholder="placeholder" :readonly="readonly" @input="onPasswordChange">
                    <div class="icon" @click="show_password = !show_password">
                        <template v-if="show_password">
                            <span v-html="EyeoutlineIcon"></span>
                        </template>
                        <template v-else>
                            <span v-html="EyehideoutlineIcon"></span>
                        </template>
                    </div>
                </div>
                <small class="small_error">
                    <template v-if="input_error">
                        <!-- {{ error }} -->
                    </template>
                </small>
            </template>
            <template v-else>
                <input class="input" :type="type" :name="name" :id="name" :placeholder="placeholder" :style="{border: border, width: width, borderRadius: radius, padding: padding, height: height}" :readonly="readonly" @input="onInputChange">
                <small class="small_error">
                    <template v-if="input_error">
                        {{ input_error }}
                    </template>
                </small>
            </template>
        </div>
</template>

<style scoped>
    .inputs{
        display: flex;
        align-items: start;
        justify-content: center;
        gap: 10px;
        margin-bottom: 0px;
        flex-direction: column;
    }
    .inputs .input{
        padding: 5px 20px;
    }
    .inputs .input, .input_div{
        width: 100%;
        border: 1px solid var(--red);
        border-radius: 6px;
        font-size: 1.02rem;
    }
    .inputs .input:focus{
        border: 1px solid var(--red);   
        outline: 2px solid var(--red);
    }
    .input_div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: var(--white);
    }
    .input_div:focus-within{
        border: 1px solid var(--red);   
        outline: 2px solid var(--red)
    }
    .input_div input{
        width: 90%;
        padding: 5px 20px;
        border: none;
        outline: none;
        background-color: transparent
    }
    .input_div .icon{
        width: 10%;
        height: 100%;
        width: 50px;
        display: flex;
        align-items: center;
        justify-content: end;
        background-color: transparent;
    }
</style>