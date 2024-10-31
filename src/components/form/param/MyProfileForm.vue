<script setup>
import ButtonComponent from '@/components/auth/form/ButtonComponent.vue';
import EditPenLineIcon from '@/components/icons/EditPenLineIcon';
import InputComponent from '@/components/auth/form/InputComponent.vue';
import SelectComponent from '@/components/auth/form/SelectComponent.vue';
import Swal from 'sweetalert2';

const border = "1px solid var(--grey-light)"
const options = [
    {
        value: 'TOGO',
        libel: '+228'
    },
    {
        value: 'BENIN',
        libel: '+229'
    }
]
const situations = [
    {
        value: 'TOGO',
        libel: 'TOGO'
    },
    {
        value: 'BENIN',
        libel: 'BENIN'
    },
    {
        value: 'GHANA',
        libel: 'GHANA'
    },
    {
        value: 'BURKINA-FASO',
        libel: 'BURKINA-FASO'
    },
]

const updateProfil = () => {
    Swal.fire({
            icon: 'warning',
            text: "Êtes-vous sur de vouloir Mettre à jour vos informations ?",
            titleText: 'cette action est irreversible',
            showDenyButton: true,
            confirmButtonText: "Oui, Mettre à jour",
            confirmButtonColor: 'var(--red)',
            denyButtonText: `Annuler`,
            denyButtonColor: "grey",
        }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                {
                    text: "Informations sauvegardées",
                    icon: "success",
                    confirmButtonColor: "#53AC32"
                }
            );
        } else if (result.isDenied) {
            Swal.fire(
                {
                    text: "Informations non sauvegardées",
                    icon: "info",
                    confirmButtonColor: "#53AC32"
                }
            );
        }
    });
}

</script>

<template>
    <div class="my_profile_form">
        <form @submit.prevent="updateProfil">
            <div class="form_inputs">
                <div class="left_form">
                    <div class="title">Personel</div>
                    <div class="inputs_param_form">
                        <div class="double_input_username">
                            <InputComponent :libel="'Noms'" :placeholder="''" :border="border" :padding="'10px'"></InputComponent>
                            <InputComponent :libel="'Prénoms'"  :border="border"  :padding="'10px'"></InputComponent>
                        </div>
                    </div>
                    <div class="inputs_param_form">
                        <InputComponent :libel="'Email utilisés'" :placeholder="'exampleEba@gmail.com'" :type="'email'" :border="border"  :padding="'10px'"></InputComponent>
                    </div>
                    <div class="inputs_param_form">
                        <InputComponent :libel="'Mot de passe'" :placeholder="'*************'" :type="'password'" :border="border" :padding="'5px'"></InputComponent>
                    </div>
                    <div class="inputs_param_form">
                        <InputComponent :libel="'Date de naissance'" :placeholder="'--/--/--'" :type="'date'" :border="border"  :padding="'10px'"></InputComponent>
                    </div>
                </div>
                <div class="right_form">
                    <div class="title">Contact</div>
                    <div class="inputs_param_form">
                        <div>
                            <InputComponent :libel="'Email personnel'" :type="'email'"  :border="border"  :padding="'10px'"></InputComponent>
                        </div>
                    </div>
                    <div class="inputs_param_form">
                        <div class="">
                        <div>Numéro de téléphone</div>
                        <div class="double_input_number">
                            <span>
                                <SelectComponent  :border="border" :options="options" :isvisiblevibel="false" :padding="'10px'"></SelectComponent>
                            </span>
                            <span>
                                <InputComponent  :border="border"  :padding="'10px'"></InputComponent>
                            </span>
                        </div>
                    </div>
                    </div>
                    <div class="inputs_param_form">
                        <SelectComponent :libel="'Situation géographique'"  :border="border" :options="situations"  :padding="'10px'"></SelectComponent>
                    </div>
                    <div class="inputs_param_form">
                        <InputComponent :libel="'Adresse'"  :border="border"  :padding="'10px'"></InputComponent>
                    </div>   
                </div>
            </div>
            <div class="submit_button">
                <ButtonComponent :value="'Mettre à jour les informations'" :button_height="'40px'" :button_width="'280px'" :size="'1em'">
                    <div v-html="EditPenLineIcon"></div>
                </ButtonComponent>
            </div>
        </form>
    </div>
</template>

<style scoped>
/* *{
    outline: 1px solid red
} */
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    .my_profile_form{
        padding: 0 10px 0 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .form_inputs{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        /* min-height: 450px; */
        margin-bottom: 20px;
        margin-top: 20px;
        padding-bottom: 20px;
    }
    form{
        display: flex;
        flex-direction: column;
    }
    .left_form, .right_form{
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        padding: 0 30px 0px 2px;
        gap: 15px;
    }
    .form_part_title{
        /* display: grid;
        grid-template-rows: 20px 1fr; */
    }
    .title{
        display: flex;
        align-items: center;
        width: 100%;
        height: 40px;
        font-size: 1.1rem;
        color: var(--grey);
    }
    .double_input_username, .double_input_number{
        display: grid;
    }
    .double_input_username{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 15px;
    }
    .double_input_number{
        display: grid;
        grid-template-columns: 80px 1fr;
        gap: 15px;
    }
    .inputs_param_form{
        min-height: 0;
        width: 100%;
    }
    .submit_button{
        width: 100%;
        height: 100%;
    }

    @media screen and (max-width: 1300px) {
        .form_inputs{
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            min-height: 450px;
        }
        .left_form, .right_form{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            padding: 0 30px 0px 2px;
            gap: 15px;
        }
    }

    @media screen and (max-width: 1000px) {
        .my_profile_form{
            padding: 0;
        }
        .left_form, .right_form{
            display: flex;
             min-height: 450px;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            padding: 0 0px 0px 2px;
            gap: 0;
        }
    }
</style>