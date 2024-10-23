<script setup>
import ButtonComponent from '@/components/auth/form/ButtonComponent.vue';
import InputComponent from '@/components/auth/form/InputComponent.vue';
import SelectComponent from '@/components/auth/form/SelectComponent.vue';
import LeftArrowIcon from '@/components/icons/LeftArrowIcon';

    
</script>

<template>
    <div id="prospect_form">
        <div class="prospect_image_name">
            <div class="prospect_image">
                <div class="image_box_red">
                    <div class="image_container">

                    </div>
                </div>
            </div>
            <div class="prospect_name">
                <div class="name">Mobina Mirbagheri</div>
                <div class="text">Your account is ready, you can now apply for advice.</div>
            </div>
        </div>
        <div class="prospect_number_creation">
            <div class="prospect_number">N° PRO_24009</div>
            <div class="prospect_creation_date">Crée le 16 Octobre 2024</div>
        </div>
        <div class="prospect_form_container">
            <form id="prospet_form_inputs_container">
                <div class="left_form_part">
                    <h5>Informations</h5>
                    <div>
                        <InputComponent :libel="'Nom'" :bottom="'0'" :border="'1px solid var(--grey)'"></InputComponent>
                    </div>
                    <div>
                        <InputComponent :libel="'Nom'" :bottom="'0'" :border="'1px solid var(--grey)'"></InputComponent>
                    </div>
                    <div class="phone_number">
                        <InputComponent :libel="'Numéro de téléphone'" :border="'1px solid var(--grey)'"></InputComponent>
                    </div>
                    <div>
                        <InputComponent :libel="'Nom'" :bottom="'0'" :border="'1px solid var(--grey)'"></InputComponent>
                    </div>
                </div>
                <div class="rigth_form_part">
                    <div class="rgith_form_part_1">
                        <h5></h5>
                        <div>
                            <InputComponent :libel="'Nom'" :bottom="'0'" :border="'1px solid var(--grey)'"></InputComponent>
                        </div>
                        <div>
                            <InputComponent :libel="'Nom'" :bottom="'0'" :border="'1px solid var(--grey)'"></InputComponent>
                        </div>
                        <div>
                            <InputComponent :libel="'Nom'" :bottom="'0'" :border="'1px solid var(--grey)'"></InputComponent>
                        </div>
                        <div>
                            <InputComponent :libel="'Nom'" :bottom="'0'" :border="'1px solid var(--grey)'"></InputComponent>
                        </div>
                    </div>
                    <div class="rgith_form_part_2">
                        <h5>Personne ressource</h5>
                        <div>
                            <InputComponent :libel="'Nom'" :bottom="'0'" :border="'1px solid var(--grey)'"></InputComponent>
                        </div>
                        <div>
                            <InputComponent :libel="'Nom'" :bottom="'0'" :border="'1px solid var(--grey)'"></InputComponent>
                        </div>
                        <div>
                            <InputComponent :libel="'Nom'" :bottom="'0'" :border="'1px solid var(--grey)'"></InputComponent>
                        </div>
                        <div>
                            <InputComponent :libel="'Nom'" :bottom="'0'" :border="'1px solid var(--grey)'"></InputComponent>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <div style="display: flex; align-items: center; justify-content: end;">
            <ButtonComponent :bordered="true">
                <span v-html="LeftArrowIcon"></span>
                Retour
            </ButtonComponent>
        </div>
    </div>
</template>

<style scoped>
    #prospect_form{
        display: grid;
        grid-template-rows: 210px 50px 1fr 50px;
        padding: 15px 50px;
        width: 80%;
        min-width: 300px;
        min-height: 80vh;
        max-height: 100vh;
        background-color: var(--white);
        border-radius: 0px;
        overflow-y: scroll;
    }
    .prospect_image_name, .prospect_number_creation, #prospet_form_inputs_container{
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 25px;
    }
    .image_box_red{
        width: 210px;
        height: 210px;
        border-radius: 50%;
        background-color: var(--red);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .image_container{
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background-color: var(--grey)
    }
    .prospect_name{
        display: grid;
        grid-template-rows: 2fr 1fr;
    }
    .prospect_name .name{
        align-content: end;
        font-size: 1.4rem;
    }
    .prospect_number_creation .prospect_number, .prospect_number_creation .prospect_creation_date{
        align-content: center;
        color: var(--red)
    }
    .prospect_number_creation .prospect_number{
        font-weight: 500;
        font-size: 1.4rem;
    }
    .prospect_number_creation .prospect_creation_date{
        text-align: end;
        font-size: 1rem;
    }
    #prospet_form_inputs_container, .rigth_form_part{
        width: 100%;
        height: 100%;
    }
    .left_form_part, .rgith_form_part_1, .rgith_form_part_2{
        display: grid;
        grid-template-rows: repeat(5, 1fr);
        width: 100%;
        height: 100%;
    }
    .rigth_form_part{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        gap: 25px;
    }
    h5{
        align-content: center;
    }
    /* .phone_number{
        display: grid;
        grid-template-columns: 1fr 2fr;
    } */
</style>