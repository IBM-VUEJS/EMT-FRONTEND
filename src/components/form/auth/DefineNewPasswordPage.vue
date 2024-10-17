<script setup>
    import InputComponent from '@/components/auth/form/InputComponent.vue';
    import ButtonComponent from '@/components/auth/form/ButtonComponent.vue';
    const props = defineProps(
        {
            title: String
        }
    )
</script>

<template>
    <div class="login_form">
        <RouterLink :to="{}">
            <div class="back">
                <span class="back_icon">
                    <i></i>
                </span>
                <span class="back_text">Retour</span>
            </div>
        </RouterLink>
        <div class="header">{{ title }}</div>
        <form class="inputs">
            <InputComponent :type="'email'" :value="''" :placeholder="'example.eba@gmail.com'" :name="'email'" :libel="'Saisissez votre adresse email pour recevoir le lien de réinitialisation'"></InputComponent>
            <ButtonComponent :value="'Rénitialiser'" :type="'submit'"></ButtonComponent>
        </form>
        <RouterLink :to="{name: 'login'}">
            <div class="auth_link_div">
                <span class="auth_link_span">Se Connecter</span>
            </div>
        </RouterLink>
    </div>
</template>

<style scoped>
    
</style>