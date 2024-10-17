<script setup>
import ButtonComponent from '@/components/auth/form/ButtonComponent.vue';
import InputComponent from '@/components/auth/form/InputComponent.vue';
const props = defineProps(
    {
        title: String
    }
)

    
</script>

<template>
    <div class="login_form">
        <div class="header">{{ title }}</div>
        <form class="inputs">
            <InputComponent :type="'email'" :value="''" :placeholder="'example.eba@gmail.com'" :name="'email'" :libel="'Email'"></InputComponent>
            <InputComponent :type="'password'" :value="''" :placeholder="'*********'" :name="'password'" :libel="'Mot de passe'"></InputComponent>
            <ButtonComponent :value="'Se Connecter'" :type="'submit'"></ButtonComponent>
        </form>
        <RouterLink :to="{name: 'reinitialise-password'}">
            <div class="auth_link_div">
                <span class="auth_link_span">Mot de passe oublié ? </span>
            </div>
        </RouterLink>
    </div>
</template>

<style scoped>
</style>