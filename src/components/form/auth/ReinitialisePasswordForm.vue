<script setup>
    import InputComponent from '@/components/auth/form/InputComponent.vue';
    import ButtonComponent from '@/components/auth/form/ButtonComponent.vue';
    import CriteriaComponent from '@/components/auth/form/CriteriaComponent.vue';
import BackArrowTextComponent from '@/components/auth/form/backArrowTextComponent.vue';
import RedirectComponent from '@/components/auth/form/RedirectComponent.vue';
import Swal from 'sweetalert2';
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';

    const props = defineProps(
        {
            title: String
        }
    )
    const route = useRouter()
    const reinitialisePassword = () => {
        Swal.fire(
            {
                title: '',
                text: "Votre mot de passe a été réintialisé avec succès. Un e-mail  contenant vos nouveaux identifiants vous a été envoyé. Vous pouvez à présent vous connecter.",
                icon: 'success',
                confirmButtonText: 'Se Connecter',
                confirmButtonColor: '#2FAC00'
            }
        ).then(
            (result) => {
                if (result.isConfirmed) {
                    route.push('/login')
                }
            }
        )
    }

</script>

<template>
    <div class="login_form">
        <BackArrowTextComponent :redirect="'/forgot-password'"></BackArrowTextComponent>
        <div class="header">{{ title }}</div>
        <form class="inputs" @submit.prevent="reinitialisePassword">
            <InputComponent :type="'password'" :value="''" :placeholder="'******************'" :name="'password'" :libel="'Nouveau mot de passe'"></InputComponent>
            <CriteriaComponent></CriteriaComponent>
            <InputComponent :type="'password'" :value="''" :placeholder="'******************'" :name="'confirmPassword'" :libel="'Confirmer le mot de passe'"></InputComponent>
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