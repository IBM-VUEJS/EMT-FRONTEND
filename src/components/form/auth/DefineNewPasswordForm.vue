<script setup>
    import InputComponent from '../InputComponent.vue';
    import ButtonComponent from '../ButtonComponent.vue';
    import CriteriaComponent from '../CriteriaComponent.vue';
    import { computed, inject, provide, ref, watch } from 'vue';
    import Swal from 'sweetalert2';

    const char_num_8 = ref(false)
    const min_one_maj = ref(false)
    const min_one_min = ref(false)
    const special_char = ref(false)
    const errs = ref([])
    const minchar_regex = /[a-z]+/
    const majchar_regex = /[A-Z]+/
    const specialchar_regex = /[!"#$%&'()*+,\-./:;<=>?@\[\\\]^_`{|}~]/


    const password = ref('')
    const confirmPassword = ref('')
    watch(password, 
        (newValue, oldValue) => {
            if (newValue.length >= 8) {
                char_num_8.value = true
            } else{
                char_num_8.value = false
            }

            if(majchar_regex.test(newValue)){
                min_one_maj.value = true
            } else{
                min_one_maj.value = false    
            }

            if(minchar_regex.test(newValue)){
                min_one_min.value = true
            } else{
                min_one_min.value = false   
            }

            if(specialchar_regex.test(newValue)){
                special_char.value = true
            } else{
                special_char.value = false   
            }
        }
    )

    watch(confirmPassword, 
        (newValue, oldValue) => {
            console.log(newValue)
            if(newValue !== password.value && password.value.length !== 0) {
                errs.value.push(
                    {
                        text: 'Les mots de passe ne sont pas les même.'
                    }
                )
                
            }
        }
    )

    const props = defineProps(
        {
            title: String
        }
    )

    let show = inject('show')
    const showDefinePasswordForm = inject('showDefinePasswordForm')
    const changePassword = () => {
        show.value = false
        showDefinePasswordForm.value = false
        Swal.fire(
            {
                title: '',
                text: 'Le mot de passe a été défini avec succès',
                icon: 'success',
                confirmButtonText: 'Retour',
                confirmButtonColor: '#53AC32'
            }
        )
    }
</script>

<template>
    <div class="login_form">
        <div class="header">{{ title }}</div>
        <form class="inputs" @submit.prevent="changePassword">
            <InputComponent :PasswordValue="password" :type="'password'" :value="''" :placeholder="'******************'" :name="'email'" :libel="'Nouveau mot de passe'" :padding="'5px'" :bottom="'10px'" v-model:passwordValue="password"></InputComponent>
            <div class="password_criteria">
                <div class="criteria">
                    <span :class="char_num_8 ? 'green_circle' : 'red_circle'"></span>
                    <span class="text">8 caractères au moins</span>
                </div>
                <div class="criteria">
                    <span :class="min_one_maj ? 'green_circle' : 'red_circle'"></span>
                    <span class="text">1 lettre majuscule au moins</span>
                </div>
                <div class="criteria">
                    <span :class="min_one_min ? 'green_circle' : 'red_circle'"></span>
                    <span class="text">1 lettre minuscule au moins</span>
                </div>
                <div class="criteria">
                    <span :class="special_char ? 'green_circle' : 'red_circle'"></span>
                    <span class="text">Catactère spécial (!,$,%,&,@,*,...)</span>
                </div>
            </div>
            <InputComponent :type="'password'" :value="''" :placeholder="'******************'" :name="'email'" :libel="'Confirmer le mot de passe'" :padding="'5px'" :bottom="'10px'" v-model:inputValue="confirmPassword" :input_error="errs"></InputComponent>
            <ButtonComponent :value="'Valider'" :type="'submit'"></ButtonComponent>
        </form>
    </div>
</template>

<style scoped>
    .header{
        font-size: 1.4rem;
    }
    .password_criteria{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 11fr;
        width: 100%;
        height: 70px;
    }
    .criteria{
        display: flex;
        align-items: center;
        gap: 15px;
    }
    .green_circle, .red_circle{
        width: 10px;
        height: 10px;
        display: block;
        border-radius: 50%;
    }
    .green_circle{
        background-color: var(--green);
    }
    .red_circle{
        background-color: var(--red);
    }
    .text{
        font-size: .8rem;
    }
    @media screen and (max-width: 800px) {
        .text{
            font-size: .65rem;
        }        
    }
</style>