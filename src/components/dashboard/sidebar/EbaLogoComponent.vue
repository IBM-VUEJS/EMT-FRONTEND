<script setup>
    const logo = "https://ebusinessafrique.com/wp-content/uploads/2020/02/logo.png"
</script>

<template>
    <div>
        <div class="logo">
            <img :src="logo" alt="">
        </div>
    </div>
</template>

<style scoped>
    .logo{
        width: 100%;
        height: 140px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>