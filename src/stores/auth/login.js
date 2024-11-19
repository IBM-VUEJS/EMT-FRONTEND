import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

export const useLoginStore = defineStore('login',  () => {
    const login = async (credentials) => {
        const router = useRouter()
        const userInfos = ref({})
        const token = ref('')
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BASE_BACKEND_URL}/api/v1/auth/login`, 
                {
                    email: credentials.email,
                    password: credentials.password,
                }
            );
            console.log('try, ', response.data.user.email)
            userInfos.value = response.data
            if (response.data.user.email == credentials.email) {
                console.log('router, ', response.data.user.email)
                router.push({name: 'dashboard'})
            } else {
                
            }
            token.value = userInfos.authorisation.token.value.plainTextToken
    
        } catch (error) {
            console.log(error)
            if (error.response) {
                console.error('Statut HTTP :', error.response.status);
                console.error('Message :', error.response.data);
              } else if (error.request) {
                console.error('Aucune réponse reçue :', error.request);
              } else {
                // console.error('Erreur');
              } 
        }

        return {token, userInfos}
    }

    return {login}
});