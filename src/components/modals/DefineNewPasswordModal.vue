<script setup>
    import AuthView from '@/layouts/AuthView.vue';
    import FormView from '@/layouts/FormView.vue';
    import DefineNewPasswordForm from '@/components/form/auth/DefineNewPasswordForm.vue';
</script>

<template>
    <AuthView :width="'90%'" :height="'90svh'">
        <template v-slot:form>
            <FormView>
                <DefineNewPasswordForm :title="'Veuillez définir un nouveau mot de passe'"></DefineNewPasswordForm>
            </FormView>
        </template>
    </AuthView>
</template>

<style>
    
</style>