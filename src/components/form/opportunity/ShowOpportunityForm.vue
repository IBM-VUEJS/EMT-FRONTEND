<script setup>
import ButtonComponent from '@/components/auth/form/ButtonComponent.vue';
import InputComponent from '@/components/auth/form/InputComponent.vue';
import SelectComponent from '@/components/auth/form/SelectComponent.vue';
import TextareaComponent from '@/components/auth/form/TextareaComponent.vue';
import DownloadIcon from '@/components/icons/DownloadIcon';
import LeftArrowIcon from '@/components/icons/LeftArrowIcon';
import Swal from 'sweetalert2';
import { computed, inject, provide, readonly, ref } from 'vue';

const show = inject('show')
const opportunity_to_show = inject('opportunity_to_show')
const showOpportunity = inject('showOpportunity')

const closeAddOpportunityForm = () => {
    show.value = false
    showOpportunity.value = false
    opportunity_to_show.value = []
}

</script>

<template>
    <div class="add_opportunity_form">
        <h5>Informations de l'opportunitée</h5>
        <form @submit.prevent="saveOpportunity" id="add_opp">
            <div class="inputs_add_form">
                <div class="left_part">
                    <div>
                        <InputComponent :readonly="true" :bottom="'0'" :placeholder="'Nom'" :libel="'Nom de l\'opportunité'" :border="'1px solid var(--grey)'" :value="opportunity_to_show[0].id" :disabled="true"></InputComponent>
                    </div>
                    <div class="add_form_double_input">
                        <div>
                            <InputComponent :readonly="true" :bottom="'0'" :placeholder="'Saisir'" :libel="'Revenue'" :border="'1px solid var(--grey)'" :value="opportunity_to_show[0].revenu"></InputComponent>
                        </div>
                        <div>
                            <InputComponent :readonly="true" :width="'100%'" :bottom="'0'" :placeholder="'Nom'" :libel="'Devise'" :border="'1px solid var(--grey)'" :value="opportunity_to_show[0].id"></InputComponent>
                        </div>
                    </div>
                    <div>
                        <InputComponent :readonly="true" :bottom="'0'" :placeholder="'Saisir le chiffre'" :libel="'Probabiliter de conversion'" :border="'1px solid var(--grey)'" :value="opportunity_to_show[0].id"></InputComponent>
                    </div>
                    <div>
                        <InputComponent :readonly="true" :bottom="'0'" :placeholder="'Nom'" :libel="'Type de contact'" :border="'1px solid var(--grey)'" :value="opportunity_to_show[0].id"></InputComponent>
                    </div>
                    <div>
                        <InputComponent :readonly="true" :bottom="'0'" :placeholder="'Nom'" :libel="'Nom du contact'" :border="'1px solid var(--grey)'" :value="opportunity_to_show[0].id"></InputComponent>

                    </div>
                    <div>
                        <InputComponent :readonly="true" :bottom="'0'" :placeholder="'Nom'" :libel="'Source de l\'opportunité'" :border="'1px solid var(--grey)'" :value="opportunity_to_show[0].id"></InputComponent>
                    </div>
                </div>

                <div class="right_part">
                    <div>
                        <InputComponent :readonly="true" :bottom="'0'" :placeholder="'Nom'" :libel="'Catégorie'" :border="'1px solid var(--grey)'" :value="opportunity_to_show[0].id"></InputComponent>
                    </div>
                    <div>
                        <InputComponent :readonly="true":bottom="'0'" :placeholder="'Nom'" :libel="'Catégorie'" :border="'1px solid var(--grey)'" :value="opportunity_to_show[0].id"></InputComponent>
                    </div>
                    <div>
                        <InputComponent :readonly="true" :bottom="'0'" :placeholder="'Nom'" :libel="'Catégorie'" :border="'1px solid var(--grey)'" :value="opportunity_to_show[0].id"></InputComponent>
                    </div>
                    <div>
                        <label for="" class="notes">Notes</label>
                        <div class="div_notes">
                            {{ opportunity_to_show[0].notes }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="actions_buttons">
                <ButtonComponent :type="'reset'" :slim="true" :bordered="true" :bottom="'0'" @click="closeAddOpportunityForm">
                    <span v-html="LeftArrowIcon"></span>
                    Retour
                </ButtonComponent>
            </div>
        </form>
    </div>
</template>

<style scoped>
    .notes{
        margin-bottom: 10px;
    }
    .div_notes{
        padding: 10px;
        height: 200px;
        min-width: 300px;
        border-radius: 10px;
        border: 1px solid var(--grey);
        word-wrap: break-word;
        word-break: break-all;
        overflow-y: scroll;
    }
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