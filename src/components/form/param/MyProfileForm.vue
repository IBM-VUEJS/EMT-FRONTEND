<script setup>
import ButtonComponent from '@/components/auth/form/ButtonComponent.vue';
import EditPenLineIcon from '@/components/icons/EditPenLineIcon';
import InputComponent from '@/components/auth/form/InputComponent.vue';
    const border = "1px solid var(--grey-light)"
</script>

<template>
    <div class="my_profile_form">
        <form @submit.prevent="">
            <div class="form_inputs">
                <div class="left_form">
                    <div class="form_part_title">
                        <div class="title">Personel</div>
                        <div class="double_input_username">
                            <InputComponent :libel="'Numéro de téléphone'"  :border="border"></InputComponent>
                            <InputComponent :libel="'Numéro de téléphone'"  :border="border"></InputComponent>
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
                    <div class="form_part_title">
                        <div class="title">Contact</div>
                        <div>
                            <InputComponent :libel="'Email personnel'" :type="'email'"  :border="border"></InputComponent>
                        </div>
                    </div>
                    <div class="">
                        <div class="form_part_title">
                        <div class="title">Numéro de téléphone</div>
                        <div class="double_input_number">
                            <InputComponent  :border="border"></InputComponent>
                            <InputComponent  :border="border"></InputComponent>
                        </div>
                    </div>
                    </div>
                    <div>
                        <InputComponent :libel="'text'"  :border="border"></InputComponent>
                    </div>
                    <div>
                        <InputComponent :libel="'text'"  :border="border"></InputComponent>
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
    .my_profile_form{
        padding: 0 10px 0 0;
        width: 100%;
        height: 100%;
    }
    .form_inputs{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    }
    form{
        display: grid;
        grid-template-rows: 1fr 40px;
        grid-template-columns: 1fr;
        padding-top: 15px;
        width: 100%;
        height: 100%;
    }
    .left_form, .right_form{
        width: 100%;
        display: grid;
        grid-template-rows: 80px 80px 80px 80px;
        padding: 0 30px 0px 0;
        gap: 15px;
    }
    .form_part_title{
        display: grid;
        grid-template-rows: 20px 1fr;
    }
    .title{
        display: flex;
        align-items: start;
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
</style>