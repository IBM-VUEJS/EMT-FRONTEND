<script setup>
    import LoginForm from '@/components/form/auth/LoginForm.vue';
import AuthView from '@/views/AuthView.vue';
import FormView from '@/views/FormView.vue';
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