<script setup>
    
</script>

<template>
    <div class="auth">
         <div class="background_form">
            <slot name="form"></slot>
         </div>
         <div class="background_image">
         </div>
    </div>
</template>

<style>
/* *{
    outline: 1px solid red;
} */
    .background_form{
        background-color: var(--grey-white);
    }
    .auth{
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 100%;
        height: 100svh;
    }
    .background_image{
        background: var(--red-gradient), url('/public/assets/background/bg-auth-girl.png');
        background-position: fixed;
        background-size: cover;
        background-repeat: no-repeat;
    }
</style>