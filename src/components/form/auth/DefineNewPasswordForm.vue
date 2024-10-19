<script setup>
    import InputComponent from '@/components/auth/form/InputComponent.vue';
    import ButtonComponent from '@/components/auth/form/ButtonComponent.vue';
    import CriteriaComponent from '@/components/auth/form/CriteriaComponent.vue';
import { inject, provide } from 'vue';
import Swal from 'sweetalert2';

    const props = defineProps(
        {
            title: String
        }
    )

    let show = inject('show')
    const changePassword = () => {
        console.log(show.value)
        show.value = false
        Swal.fire(
            {
                title: '',
                text: 'Le mot de passe a été défini avec succès',
                icon: 'success',
                confirmButtonText: 'Retour',
                confirmButtonColor: '#53AC32'
            }
        )
    }
</script>

<template>
    <div class="login_form">
        <div class="header">{{ title }}</div>
        <form class="inputs" @submit.prevent="changePassword">
            <InputComponent :type="'password'" :value="''" :placeholder="'******************'" :name="'email'" :libel="'Nouveau mot de passe'"></InputComponent>
            <CriteriaComponent></CriteriaComponent>
            <InputComponent :type="'password'" :value="''" :placeholder="'******************'" :name="'email'" :libel="'Confirmer le mot de passe'"></InputComponent>
            <ButtonComponent :value="'Valider'" :type="'submit'"></ButtonComponent>
        </form>
    </div>
</template>

<style scoped>
    .header{
        font-size: 1.4rem;
    }
</style>