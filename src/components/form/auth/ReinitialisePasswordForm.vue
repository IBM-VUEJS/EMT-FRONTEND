<script setup>
    import InputComponent from '../InputComponent.vue';
    import ButtonComponent from '../ButtonComponent.vue';
    import CriteriaComponent from '../CriteriaComponent.vue';
    import backArrowTextComponent from '../backArrowTextComponent.vue';
    import RedirectComponent from '../RedirectComponent.vue';
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