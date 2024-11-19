<script setup>
    import AuthView from '@/layouts/AuthView.vue';
    import FormView from '@/layouts/FormView.vue';
    import { ref } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    import { useLoginStore } from '@/stores/auth/login';
    import { storeToRefs } from 'pinia';
    import LoginForm from '@/components/form/auth/LoginForm.vue';


</script>

<template>
    <AuthView>
        <template v-slot:form>
            <FormView>
                    <LoginForm/>
            </FormView>
        </template>
    </AuthView>
</template>

<style scoped>
</style>