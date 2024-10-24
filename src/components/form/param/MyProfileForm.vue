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
                    <div class="form_part_title">
                        <div class="double_input_username">
                            <InputComponent :libel="'Noms'" :placeholder="''" :border="border"></InputComponent>
                            <InputComponent :libel="'Prénoms'"  :border="border"></InputComponent>
                        </div>
                    </div>
                    <div>
                        <InputComponent :libel="'Email utilisés'" :placeholder="'exampleEba@gmail.com'" :type="'email'" :border="border"></InputComponent>
                    </div>
                    <div>
                        <InputComponent :libel="'Mot de passe'" :placeholder="'*************'" :type="'password'" :border="border"></InputComponent>
                    </div>
                    <div>
                        <InputComponent :libel="'Date de naissance'" :placeholder="'--/--/--'" :type="'date'" :border="border"></InputComponent>
                    </div>
                </div>
                <div class="right_form">
                    <div class="title">Contact</div>
                    <div class="form_part_title">
                        <div>
                            <InputComponent :libel="'Email personnel'" :type="'email'"  :border="border"></InputComponent>
                        </div>
                    </div>
                    <div class="">
                        <div class="form_part_title">
                        <div>Numéro de téléphone</div>
                        <div class="double_input_number">
                            <span>
                                <SelectComponent  :border="border" :options="options" :isvisiblevibel="false"></SelectComponent>
                            </span>
                            <span>
                                <InputComponent  :border="border"></InputComponent>
                            </span>
                        </div>
                    </div>
                    </div>
                    <div>
                        <SelectComponent :libel="'Situation géographique'"  :border="border" :options="situations"></SelectComponent>
                    </div>
                    <div>
                        <InputComponent :libel="'Adresse'"  :border="border"></InputComponent>
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
    .my_profile_form{
        padding: 0 10px 0 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .form_inputs{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    }
    form{
        display: grid;
        grid-template-rows: 1fr 40px;
        grid-template-columns: 1fr;
        padding-top: 0px;
        width: 100%;
        height: 100%;
    }
    .left_form, .right_form{
        width: 100%;
        display: grid;
        grid-template-rows: repeat(5, 65px);
        padding: 0 30px 0px 2px;
        gap: 15px;
    }
    .form_part_title{
        display: grid;
        grid-template-rows: 20px 1fr;
    }
    .title{
        display: flex;
        align-items: center;
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
    .submit_button{
        padding-top: 20px;
    }
</style>