<script setup>
import ButtonComponent from '@/components/auth/form/ButtonComponent.vue';
import InputComponent from '@/components/auth/form/InputComponent.vue';
import SelectComponent from '@/components/auth/form/SelectComponent.vue';
import TextareaComponent from '@/components/auth/form/TextareaComponent.vue';
import DownloadIcon from '@/components/icons/DownloadIcon';
import LeftArrowIcon from '@/components/icons/LeftArrowIcon';

    
</script>

<template>
    <div class="add_opportunity_form">
        <h5>Créer une nouvelle opportunitée</h5>
        <form @submit.prevent="" id="add_opp">
            <div class="inputs_add_form">
                <div class="left_part">
                    <div>
                        <InputComponent :bottom="'0'" :placeholder="'Nom'" :libel="'Nom de l\'opportunité'" :border="'1px solid var(--grey)'"></InputComponent>
                    </div>
                    <div class="add_form_double_input">
                        <div>
                            <InputComponent :bottom="'0'" :placeholder="'Saisir'" :libel="'Revenue'" :border="'1px solid var(--grey)'"></InputComponent>
                        </div>
                        <div>
                            <SelectComponent :width="'100%'" :bottom="'0'" :placeholder="'Nom'" :libel="'Devise'" :border="'1px solid var(--grey)'"></SelectComponent>
                        </div>
                    </div>
                    <div>
                        <InputComponent :bottom="'0'" :placeholder="'Saisir le chiffre'" :libel="'Probabiliter de conversion'" :border="'1px solid var(--grey)'"></InputComponent>
                    </div>
                    <div>
                        <SelectComponent :bottom="'0'" :placeholder="'Nom'" :libel="'Type de contact'" :border="'1px solid var(--grey)'"></SelectComponent>
                    </div>
                    <div>
                        <SelectComponent :bottom="'0'" :placeholder="'Nom'" :libel="'Nom du contact'" :border="'1px solid var(--grey)'"></SelectComponent>

                    </div>
                    <div>
                        <SelectComponent :bottom="'0'" :placeholder="'Nom'" :libel="'Source de l\'opportunité'" :border="'1px solid var(--grey)'"></SelectComponent>
                    </div>
                </div>

                <div class="right_part">
                    <div>
                        <SelectComponent :bottom="'0'" :placeholder="'Nom'" :libel="'Catégorie'" :border="'1px solid var(--grey)'"></SelectComponent>
                    </div>
                    <div>
                        <SelectComponent :bottom="'0'" :placeholder="'Nom'" :libel="'Catégorie'" :border="'1px solid var(--grey)'"></SelectComponent>
                    </div>
                    <div>
                        <SelectComponent :bottom="'0'" :placeholder="'Nom'" :libel="'Catégorie'" :border="'1px solid var(--grey)'"></SelectComponent>
                    </div>
                    <div>
                        <TextareaComponent :libel="'Notes'"></TextareaComponent>
                    </div>
                </div>
            </div>
            <div class="actions_buttons">
                <ButtonComponent :type="'reset'" :slim="true" :bordered="true" :bottom="'0'" >
                    <span v-html="LeftArrowIcon"></span>
                    Retour
                </ButtonComponent>
                <ButtonComponent :type="'submit'" :bottom="'0'" :slim="true">
                    <span v-html="DownloadIcon"></span>
                    Enregistrer
                </ButtonComponent>
            </div>
        </form>
    </div>
</template>

<style>
    .add_opportunity_form{
        display: grid;
        grid-template-rows: 60px 1fr;
        padding: 15px 30px;
        max-width: 1200px;
        min-width: 1100px;
        max-height: 620px;
        background-color: var(--white);
        border-radius: 10px;
        overflow-y: scroll;
    }
   .inputs_add_form{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
        gap: 15px;
    }
    .add_form_double_input{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 18px;
    }
    .actions_buttons{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    #add_opp{
        display: grid;
        grid-template-rows: 1fr 65px;
    }
    .ql-toolbar.ql-snow{
        border-bottom: none !important;
        border-top: 1px solid var(--grey);
        border-left: 1px solid var(--grey);
        border-right: 1px solid var(--grey);
        border-radius: 10px 10px 0 0;
    }
    .ql-container.ql-snow{
        border-bottom: 1px solid var(--grey);
        border-top: none !important;
        border-left: 1px solid var(--grey);
        border-right: 1px solid var(--grey);
        border-radius: 0 0 10px 10px;
    }
    #textarea{
        border: 2px solid transparent;
        box-sizing: border-box  ;
    }
    #textarea:focus-within{
        border: 2px solid var(--red);
    }
    @media screen and (max-width: 1200px) {
        .add_opportunity_form{
            display: grid;
            grid-template-rows: 60px 1fr;
            padding: 15px 30px;
            max-width: 1000px;
            min-width: 900px;
            max-height: 620px;
            background-color: var(--white);
            border-radius: 10px;
            overflow-y: scroll;
        }
        .inputs_add_form{
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
            gap: 15px;
        }
    }

    @media screen and (max-width: 930px) {
        .add_opportunity_form{
            display: grid;
            grid-template-rows: 60px 1fr;
            padding: 15px 10px;
            max-width: 400px;
            min-width: 300px;
            max-height: 620px;
            background-color: var(--white);
            border-radius: 10px;
            overflow-y: scroll;
        }
        .inputs_add_form{
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 15px;
        }
    }
    @media screen and (max-width: 450px) {
        body{
            overflow: hidden;
        }
        .add_opportunity_form{
            display: grid;
            grid-template-rows: 60px 1fr;
            padding: 15px 10px;
            width: 1000px;
            height: 100svh;
            background-color: var(--white);
            border-radius: 10px;
            overflow-y: scroll;
        }
        .inputs_add_form{
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 15px;
        }
    }
</style>