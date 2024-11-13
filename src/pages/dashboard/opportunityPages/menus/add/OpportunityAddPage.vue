<script setup>
import InputComponent from '@/components/form/InputComponent.vue';
import SelectComponent from '@/components/form/SelectComponent.vue';
import ButtonComponent from '@/components/form/ButtonComponent.vue';
import TextareaComponent from '@/components/form/TextareaComponent.vue';
import RedCircleArrowIcon from '@/assets/icons/RedCircleArrowIcon';
import DownloadIcon from '@/assets/icons/DownloadIcon';


</script>

<template>
    <div class="title_text">
        <div class="arrow_title">
            <div class="arrow">
                <RouterLink :to="{name: 'opportunity-list'}">
                    <span v-html="RedCircleArrowIcon"></span>
                </RouterLink>
            </div>
            <div class="title">
                <h3>Créer une nouvelle opportunité</h3>
            </div>
        </div>
        <div class="text">
            Opportunités  » Liste Prospets » Créer une opportunités
        </div>
    </div>
    <div class="form_red_descript_text">
        <div class="container_opportunity">
            <div class="red_descript_text">
                <h4>Créer une opportunité</h4>
                <small>Remplissez ce formulaire pour créer une opportunité</small>
            </div>

            <div class="form">
                <div class="form_details_opportunity">
                    <h5>Détails de l'opportunité</h5>
                </div>
                <form class="inputs_opportunity_form">
                    <div class="input_opportunity">
                        <InputComponent :libel="'Nom de l\'opportunité'" :border="'1px solid var(--grey)'"></InputComponent>
                    </div>
                    <div class="double_inputs">
                        <div class="double_input">
                            <InputComponent :width="'100%'" :libel="'Revenus espéré'"  :border="'1px solid var(--grey)'"></InputComponent>
                        </div>
                        <div class="double_input">
                            <SelectComponent :bottom="'0'" :width="'100%'" :libel="'Devise'"  :border="'1px solid var(--grey)'"></SelectComponent>
                        </div>
                    </div>
                    <div class="input_opportunity">
                        <InputComponent :width="'100%'" :libel="'Probabilité de conversion'"  :border="'1px solid var(--grey)'"></InputComponent>
                    </div>
                    <div class="input_opportunity">
                        <SelectComponent :width="'100%'" :libel="'Type de contact'"  :border="'1px solid var(--grey)'"></SelectComponent>
                    </div>
                    <div class="input_opportunity">
                        <InputComponent :width="'100%'" :libel="'Nom du contact'"  :border="'1px solid var(--grey)'"></InputComponent>
                    </div>
                    <div class="input_opportunity">
                        <SelectComponent :width="'100%'" :libel="'Source de l\'opportunité'"  :border="'1px solid var(--grey)'"></SelectComponent>
                    </div>
                    <div class="input_opportunity">
                        <SelectComponent :width="'100%'" :libel="'Catégorie'"  :border="'1px solid var(--grey)'"></SelectComponent>
                    </div>
                    <div class="input_opportunity">
                        <SelectComponent :width="'100%'" :libel="'Secteur d\'activités'"  :border="'1px solid var(--grey)'"></SelectComponent>
                    </div>
                    <div class="input_opportunity">
                        <SelectComponent :width="'100%'" :libel="'Pays'"  :border="'1px solid var(--grey)'"></SelectComponent>
                    </div>
                    <div class="textarea">
                        <TextareaComponent :width="'100%'" :libel="'Notes'"  :border="'1px solid var(--grey)'"></TextareaComponent>
                    </div>
                    <div class="cancel_save">
                        <ButtonComponent :button_width="'140px'" :type="'reset'" :slim="true" :bordered="true" >Annuler</ButtonComponent>
                        <ButtonComponent :button_width="'140px'" :type="'submit'" :slim="true" >
                            Enregister 
                            <span v-html="DownloadIcon"></span>
                        </ButtonComponent>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .arrow_title{
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .title h3{
        font-weight: 300;
    }
    .text{
        padding-left: 40px;
    }
    .form_red_descript_text{
        width: 100%;
        display: flex;
        align-items: start;
        justify-content: center;
    }
    .container_opportunity{
        width: 65%;
    }
    .red_descript_text{
        width: 100%;
        height: 100px;
        background: rgba(177, 0, 0, 1);
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 12px;
    }
    .form{
        margin-top: 20px;
        border: 1px solid rgba(237, 237, 237, 1);
        background-color: var(--white);
        border-radius: 12px;
        padding: 25px  20px 10px 20px;
    }
    .inputs_opportunity_form{
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        /* outline: 1px solid red; */
    }
    .input_opportunity{
        min-height: 50px;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        /* outline: 1px solid red; */
    }
    .double_inputs{
        display: grid;
        grid-template-columns: 1fr 1fr;
        min-height: 50px;
        width: 100%;
        gap: 10px;
    }
    .textarea{
        display: grid;
        grid-template-columns: 1fr;
    }
    .cancel_save{
        display: flex;
        align-items: center;
        justify-content: end;
        gap: 20px;
        padding: 25px 10px 0px 10px;
    }    
    @media screen and (max-width: 850px) {
        .container_opportunity{
            width: 100%;
        }
        .cancel_save{
            justify-content: space-between;
            padding: 25px 0 0 0;
        }
    }
</style>