<script setup>
    import AuthView from '@/views/AuthView.vue';
    import FormView from '@/views/FormView.vue';
    import ReinitialisePasswordForm from '@/components/form/auth/ReinitialisePasswordForm.vue';
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