<script setup>
import ButtonComponent from '../ButtonComponent.vue';
import InputComponent from '../InputComponent.vue';
import RedirectComponent from '../RedirectComponent.vue';
import { ref } from 'vue';
import { RecaptchaV2 } from 'vue3-recaptcha-v2';
import { useRoute, useRouter } from 'vue-router';
import { useLoginStore } from '@/stores/auth/login';

const email = ref("")
const password = ref("")
const auth = useLoginStore()
const props = defineProps(
    {
        title: String
    }
)

const recaptcha = ref(null)
const route = useRouter()

const isVerified = ref(false);
const recaptchaResponse = ref(null);

const handleWidgetId = (widgetId) => {
  console.log("Widget ID: ", widgetId)
};
const handleErrorCalback = () => {
  console.log("Error callback");
};
const handleExpiredCallback = () => {
  console.log("Expired callback");
};
const handleLoadCallback = (response) => {
  console.log("Load callback", response);
};

if(password.value.length >= 8 && )
auth.login({email: email.value, password: password.value})
</script>

<template>
    <div class="login_form">
        <div class="header">{{ title }}</div>
        <form class="inputs" @submit.prevent="login">
            {{ email }}
            <InputComponent :type="'email'" :value="''" :placeholder="'example.eba@gmail.com'" :name="'email'" :libel="'Email'" :padding="'5px 20px'" :bottom="'10px'" v-model:inputValue="email"></InputComponent>
            {{ password }}
            <InputComponent :type="'password'" :value="''" :placeholder="'*********'" :name="'password'" :libel="'Mot de passe'" :padding="'0'" :bottom="'10px'" v-model:passwordValue="password"></InputComponent>
            <ButtonComponent :value="'Se Connecter'" :type="'submit'"></ButtonComponent>
            <RecaptchaV2
                @widget-id="handleWidgetId"
                @error-callback="handleErrorCalback"
                @expired-callback="handleExpiredCallback"
                @load-callback="handleLoadCallback"
            />
        </form>
        <RedirectComponent :redirect="'/forgot-password'">Mot de passe oublié ? </RedirectComponent>
    </div>
</template>

<style scoped>
    #rc-anchor-container{
        width: 100px !important;
    }
    .rc-anchor-normal{
        width: 100px !important;
    }
</style>