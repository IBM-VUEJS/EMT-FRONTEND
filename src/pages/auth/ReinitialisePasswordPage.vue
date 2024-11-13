<script setup>
    import ReinitialisePasswordForm from '@/components/form/auth/ReinitialisePasswordForm.vue';
    import AuthView from '@/layouts/AuthView.vue';
    import FormView from '@/layouts/FormView.vue';
</script>

<template>
    <AuthView>
        <template v-slot:form>
            <FormView>
                <ReinitialisePasswordForm :title="'Réinitialisation de mot de passe'"></ReinitialisePasswordForm>
            </FormView>
        </template>
    </AuthView>
</template>

<style>
    
</style>