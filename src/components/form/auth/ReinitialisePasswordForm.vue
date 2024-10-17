<script setup>
    import InputComponent from '@/components/auth/form/InputComponent.vue';
    import ButtonComponent from '@/components/auth/form/ButtonComponent.vue';
    import CriteriaComponent from '@/components/auth/form/CriteriaComponent.vue';
import BackArrowTextComponent from '@/components/auth/form/backArrowTextComponent.vue';
import RedirectComponent from '@/components/auth/form/RedirectComponent.vue';

    const props = defineProps(
        {
            title: String
        }
    )
</script>

<template>
    <div class="login_form">
        <BackArrowTextComponent :redirect="'/forgot-password'"></BackArrowTextComponent>
        <div class="header">{{ title }}</div>
        <form class="inputs" @submit.prevent="">
            <InputComponent :type="'password'" :value="''" :placeholder="'******************'" :name="'email'" :libel="'Nouveau mot de passe'"></InputComponent>
            <CriteriaComponent></CriteriaComponent>
            <InputComponent :type="'password'" :value="''" :placeholder="'******************'" :name="'email'" :libel="'Confirmer le mot de passe'"></InputComponent>
            <ButtonComponent :value="'Réinitialiser'" :type="'submit'"></ButtonComponent>
        </form>
        <RedirectComponent :redirect="'/login'">Se Connecter</RedirectComponent>
    </div>
</template>

<style scoped>
    .header{
        font-size: 1.4rem;
    }
</style>