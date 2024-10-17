<script setup>
    import AuthView from '@/views/AuthView.vue';
    import FormView from '@/views/FormView.vue';
    import ForgotPasswordForm from '@/components/form/auth/ForgotPasswordForm.vue';
</script>

<template>
    <AuthView>
        <template v-slot:form>
            <FormView>
                <ForgotPasswordForm :title="'Réinitialisation de mot de passe'"></ForgotPasswordForm>
            </FormView>
        </template>
    </AuthView>
</template>

<style>
    
</style>