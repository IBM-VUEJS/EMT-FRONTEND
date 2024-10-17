<script setup>
import ButtonComponent from '@/components/auth/form/ButtonComponent.vue';
import InputComponent from '@/components/auth/form/InputComponent.vue';
import RedirectComponent from '@/components/auth/form/RedirectComponent.vue';
const props = defineProps(
    {
        title: String
    }
)

    
</script>

<template>
    <div class="login_form">
        <div class="header">{{ title }}</div>
        <form class="inputs" @submit.prevent="">
            <InputComponent :type="'email'" :value="''" :placeholder="'example.eba@gmail.com'" :name="'email'" :libel="'Email'"></InputComponent>
            <InputComponent :type="'password'" :value="''" :placeholder="'*********'" :name="'password'" :libel="'Mot de passe'"></InputComponent>
            <ButtonComponent :value="'Se Connecter'" :type="'submit'"></ButtonComponent>
        </form>
        <RedirectComponent :redirect="'/forgot-password'">Mot de passe oublié ? </RedirectComponent>
    </div>
</template>

<style scoped>
</style>