<script setup>
    import { RouterLink } from 'vue-router';
    const props = defineProps(
        {
            redirect: String
        }
    )
</script>

<template>
    <RouterLink :to="redirect">
        <div class="back">
            <span class="back_icon">
                <i></i>
            </span>
            <span class="back_text">Retour</span>
        </div>
    </RouterLink>
</template>

<style>
    
</style>