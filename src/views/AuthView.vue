<script setup>
    defineProps(
        {
            width: String,
            height: String
        }
    )
</script>

<template>
    <div class="auth" :style="{width: width, height: height}">
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
        background: var(--red-gradient), url('/public/assets/background/bg-auth-girl.jpg');
        background-position: 0 0;
        background-size: cover;
        background-repeat: no-repeat;
        transform: rotateY(180deg);
    }
    @media screen and (max-width: 1100px) {
        .auth{
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr;
            width: 100%;
            height: 100svh;
        }
        .background_image{
            display: none !important;
        }
    }
</style>