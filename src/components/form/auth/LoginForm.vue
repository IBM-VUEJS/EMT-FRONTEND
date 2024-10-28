<script setup>
import ButtonComponent from '@/components/auth/form/ButtonComponent.vue';
import InputComponent from '@/components/auth/form/InputComponent.vue';
import RedirectComponent from '@/components/auth/form/RedirectComponent.vue';
import { VueReCaptcha } from 'vue-recaptcha-v3';
import { useRoute, useRouter } from 'vue-router';
const props = defineProps(
    {
        title: String
    }
)
const route = useRouter()
const login = () => {
    route.push('/dashboard')
}
    
</script>

<template>
    <div class="login_form">
        <div class="header">{{ title }}</div>
        <form class="inputs" @submit.prevent="login">
            <InputComponent :type="'email'" :value="''" :placeholder="'example.eba@gmail.com'" :name="'email'" :libel="'Email'" :padding="'5px 20px'"></InputComponent>
            <InputComponent :type="'password'" :value="''" :placeholder="'*********'" :name="'password'" :libel="'Mot de passe'" :padding="'10px 20px'"></InputComponent>
            <VueReCaptcha ref="recaptcha" @verify="onVerify"></VueReCaptcha>
            <ButtonComponent :value="'Se Connecter'" :type="'submit'"></ButtonComponent>
        </form>
        <RedirectComponent :redirect="'/forgot-password'">Mot de passe oublié ? </RedirectComponent>
    </div>
</template>

<style scoped>
</style>