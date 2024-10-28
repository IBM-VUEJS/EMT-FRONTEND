<script setup>
import MyProfileForm from '@/components/form/param/MyProfileForm.vue';

    
</script>

<template>
    <div class="param_content">
        <div class="change_bar_content">
            <div class="current_option">Edit Profile</div>
            <div class="last_modification">Dernière mise à jour 15 octobre</div>
        </div>
        <div class="change_container_content">
            <MyProfileForm>

            </MyProfileForm>
        </div>
    </div>
</template>

<style>
/* *{
    outline: 1px solid red
} */
    .param_content{
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-rows: 40px 1fr;
        padding: 0 40px 0 40px;
    }
    .change_bar_content{
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        color: var(--grey);
        padding: 0 40px 0 0;
    }
    .change_container_content{
        width: 100%;
        height: 100%;
    }
    .current_option{
        font-size: 1.3rem;
        font-weight: bold;
    }
    @media screen and (max-width: 1000px) {
        .param_content{
            padding: 0;
        }
    }
</style>