<script setup>
    import AuthView from '@/layouts/AuthView.vue';
    import FormView from '@/layouts/FormView.vue';
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