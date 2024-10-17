<script setup>
    import { RouterLink } from 'vue-router';
    const props = defineProps(
        {
            redirect: String,
        }
    )
</script>

<template>
    <RouterLink :to="redirect">
        <div class="auth_link_div">
            <span class="auth_link_span">
                <slot></slot>
            </span>
        </div>
    </RouterLink>
</template>

<style>
    
</style>