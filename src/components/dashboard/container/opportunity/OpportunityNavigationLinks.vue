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
</style>