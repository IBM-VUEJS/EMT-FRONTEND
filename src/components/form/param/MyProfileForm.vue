<script setup>
    
</script>

<template>
    <div class="my_profile_form">
        <slot name="formcontent"></slot>
    </div>
</template>

<style scoped>
    .my_profile_form{
        padding: 0 10px;
        border-left: 1px solid var(--grey-light);
    }
</style>