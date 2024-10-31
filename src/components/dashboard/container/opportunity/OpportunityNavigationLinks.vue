<script setup>
import { inject } from 'vue';
import { useRoute } from 'vue-router';

    const route = useRoute()
    const props = defineProps(
        {
            path: String,
            libel: String
        }
    )
    const option = async () => {
        const dynamic_option = await inject('dynamic_option')
        dynamic_option.value = props.libel
    }
</script>

<template>
    <li class="navigation_links" :class="{active_opportunity_link: route.path.includes(path)}">
        <slot></slot>
    </li>
</template>

<style scoped>
    .navigation_links{
        padding: 5px 10px 5px 0;
        align-content: center;
    }
    .active_opportunity_link{
        color: var(--red);
        border-right: 1px solid var(--red);
    }
    @media screen and (max-width: 1000px) {
        .navigation_links{
            width: 100%;  
        }      
        .active_opportunity_link{
            color: var(--red);
            /* text-decoration: underline; */
            border-right: none;
            border-bottom: 1px solid var(--red);
            width: 100%;
            text-align: center;
        }
    }
</style>