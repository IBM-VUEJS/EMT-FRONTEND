<script setup>
    import SearchIcon from '@/components/icons/SearchIcon';

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
            disabled: Boolean,
            radius: String,
            width: String,
            border: String
        }
    )
</script>

<template>
    <div class="input_search">
        <input class="search" :type="'search'" :name="name" :id="name" :value="value" :placeholder="'Rechercher'" :style="{border: border, width: width, borderRadius: radius}" :disabled="disabled"> 
        <button type="submit">
            <div v-html="SearchIcon"></div>
        </button>
    </div>
</template>

<style scoped>
    .input_search{
        display: grid;
        grid-template-columns: 1fr 50px;
        padding: 5px;
        border-radius: 5px;
        box-shadow: var(--shadow);
        width: 100%;
    }
    .input_search:focus-within{
        outline: 1px solid red;
    }
    .input_search .search{
        padding: 5px 20px;
        border: none;
        background-color: transparent;
    }
    .input_search .search:focus{
        border: none;
        outline: none;
    }
    .input_search button{
        padding: 2.5px 20px;
        margin: 0;
        border: none;
        background-color: transparent;
        cursor: pointer
    }

</style>