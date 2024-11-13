<script setup>
    import InputComponent from '../InputComponent.vue';
    import ButtonComponent from '../ButtonComponent.vue';
    import BackArrowTextComponent from '../backArrowTextComponent.vue';
    import RedirectComponent from '../RedirectComponent.vue';
    import { onMounted, ref } from 'vue';
    import Swal from 'sweetalert2';

    const props = defineProps(
        {
            title: String
        }
    )

    const email = ref("")
    email.value = "eba@gmail.com"

    const sendReinitialisePasswordLink = () => {
            Swal.fire(
                {
                    text: `Un lien de reinitialisation vous a été envoyé sur ${email.value}. Le lien expire dans 5 minutes`,
                    icon: 'success',
                    confirmButtonText: `Renvoyer le lien ?`,
                    confirmButtonColor: 'var(--green)',
                    timer: 3000
                }
            ).then(
                (result) => {
                    if (result.dismiss === "timer") {
                        Swal.fire(
                            {
                                title: '',
                                text: "Le lien a expiré le renvoyer ?",
                                icon: 'warning',
                                confirmButtonText: `Renvoyer le lien de reinitialisation `,
                                confirmButtonColor: 'var(--red)'
                            }
                        ).then(
                            (resend) => {
                                if (resend.isConfirmed) {
                                    sendReinitialisePasswordLink()
                                }
                            }
                        )
                    }
                }
            )
    }
</script>

<template>
    <div class="login_form">
        <BackArrowTextComponent :redirect="'/login'"></BackArrowTextComponent>
        <div class="header">{{ title }}</div>
        <form class="inputs" @submit.prevent="sendReinitialisePasswordLink">
            <InputComponent :type="'email'" :value="''" :placeholder="'example.eba@gmail.com'" :name="'email'" :libel="'Saisissez votre adresse email pour recevoir le lien de réinitialisation'"></InputComponent>
            <ButtonComponent :value="'Rénitialiser'" :type="'submit'"></ButtonComponent>
        </form>
        <RedirectComponent :redirect="'/login'">Se Connecter</RedirectComponent>
    </div>
</template>

<style scoped>
    
</style>