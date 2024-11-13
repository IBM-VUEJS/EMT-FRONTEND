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
                <i class="bi bi-chevron-left"></i>
            </span>
            <span class="back_text">Retour</span>
        </div>
    </RouterLink>
</template>

<style scoped>
.back{
    display: flex;
    align-items: center;
}
    .back_icon{
        font-size: 1.2rem;
        font-weight: bolder;
        margin-right: 15px;
    }
</style>