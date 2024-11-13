<script setup>
    import LoginForm from '@/components/form/auth/LoginForm.vue';
import AuthView from '@/layouts/AuthView.vue';
import FormView from '@/layouts/FormView.vue';
</script>

<template>
    <AuthView>
        <template v-slot:form>
            <FormView>
                <LoginForm :title="'Bienvenue'"></LoginForm>
            </FormView>
        </template>
    </AuthView>
</template>

<style>
    
</style>