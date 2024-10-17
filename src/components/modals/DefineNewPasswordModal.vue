<script setup>
    import AuthView from '@/views/AuthView.vue';
    import FormView from '@/views/FormView.vue';
    import DefineNewPasswordForm from '@/components/form/auth/DefineNewPasswordForm.vue';
</script>

<template>
    <AuthView>
        <template v-slot:form>
            <FormView>
                <DefineNewPasswordForm :title="'Veuillez définir un nouveau mot de passe'"></DefineNewPasswordForm>
            </FormView>
        </template>
    </AuthView>
</template>

<style>
    
</style>