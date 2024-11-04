<script setup>
import InputComponent from '@/components/auth/form/InputComponent.vue';
import SelectComponent from '@/components/auth/form/SelectComponent.vue';
import ButtonComponent from '@/components/auth/form/ButtonComponent.vue';
import TextareaComponent from '@/components/auth/form/TextareaComponent.vue';
import RedCircleArrowIcon from '@/components/icons/RedCircleArrowIcon';
import DownloadIcon from '@/components/icons/DownloadIcon';
import ResourcePersonIcon from '@/components/icons/ResourcePersonIcon';


</script>

<template>
    <div class="title_text">
        <div class="arrow_title">
            <div class="arrow">
                <RouterLink :to="{name: 'client-list'}">
                    <span v-html="RedCircleArrowIcon"></span>
                </RouterLink>
            </div>
            <div class="title">
                <h3>Ajouter un nouveau Client</h3>
            </div>
        </div>
        <div class="text">
            Clients  » Liste des clients » Ajout Client
        </div>
    </div>
    <div class="form_red_descript_text">
        <div class="container">
            <div class="red_descript_text">
                <h4>Créer un Client</h4>
                <small>Remplissez ce formulaire pour créer un client</small>
            </div>

            <div class="form">
                <div class="form_details_opportunity">
                    <h5>Informations du client</h5>
                </div>
                <form class="clients" @submit.prevent="createClient">
                    <div class="input_client_info">
                        <InputComponent :libel="'Nom du client'" :placeholder="'Nom'" :border="'1px solid var(--grey)'"></InputComponent>
                    </div>
                    <div class="input_client_info">
                        <InputComponent :libel="'Email'" :placeholder="'example@gmail.com'" :border="'1px solid var(--grey)'"></InputComponent>
                    </div>
                    <div class="double_clients">
                        <div class="double_clients_libel">Numéro de téléphone</div>
                        <div class="double_clients_inputs">
                            <div class="double_input_client">
                                <SelectComponent :width="'100%'"  :border="'1px solid var(--grey)'"></SelectComponent>
                            </div>
                            <div class="double_input_client">
                                <InputComponent :bottom="'0'" :placeholder="'Saisissez votre numéro de téléphone'" :width="'100%'"  :border="'1px solid var(--grey)'"></InputComponent>
                            </div>
                        </div>
                    </div>
                    <div class="input_client_info">
                        <InputComponent :width="'100%'" :libel="'Adresse'" :placeholder="'Veuillez saisir l\'adresse de résidence'"  :border="'1px solid var(--grey)'"></InputComponent>
                    </div>
                    <div class="input_client_info">
                        <SelectComponent :width="'100%'" :libel="'Type de client'" :placeholder="'Veuillez choisir'"  :border="'1px solid var(--grey)'"></SelectComponent>
                    </div>
                    <div class="input_client_info">
                        <InputComponent :width="'100%'" :libel="'Dévise'" :placeholder="'Veuillez saisir'"  :border="'1px solid var(--grey)'"></InputComponent>
                    </div>
                    <div class="input_client_info">
                        <SelectComponent :width="'100%'" :libel="'Pays'"  :border="'1px solid var(--grey)'"></SelectComponent>
                    </div>
                    <div class="input_client_info">
                        <SelectComponent :width="'100%'" :libel="'Catégorie'"  :border="'1px solid var(--grey)'"></SelectComponent>
                    </div>
                    <div class="input_client_info">
                        <SelectComponent :width="'100%'" :libel="'Secteur d\'activités'"  :border="'1px solid var(--grey)'"></SelectComponent>
                    </div>
                    <div class="input_client_info">
                        <SelectComponent :width="'100%'" :libel="'Source'"  :border="'1px solid var(--grey)'"></SelectComponent>
                    </div>
                    <div class="input_client_info">
                        <InputComponent :width="'100%'" :libel="'Site web'" :placeholder="'Veuillez saisir'"  :border="'1px solid var(--grey)'"></InputComponent>
                    </div>
                    <div class="textarea">
                        <TextareaComponent :width="'100%'" :libel="'Notes'"  :border="'1px solid var(--grey)'"></TextareaComponent>
                    </div>

                    <!-- Personne Ressource -->

                    <div class="resource_person">
                        <span v-html="ResourcePersonIcon"></span> Personne Ressource
                    </div>
                    <div class="input_client_info">
                        <InputComponent :libel="'Nom et prénoms'" :placeholder="'Nom et prénoms'" :border="'1px solid var(--grey)'"></InputComponent>
                    </div>
                    <div class="input_client_info">
                        <InputComponent :libel="'Email'" :placeholder="'example@gmail.com'" :border="'1px solid var(--grey)'"></InputComponent>
                    </div>
                    <div class="double_clients">
                        <div class="double_clients_libel">Numéro de téléphone</div>
                        <div class="double_clients_inputs">
                            <div class="double_input_client">
                                <SelectComponent :width="'100%'"  :border="'1px solid var(--grey)'"></SelectComponent>
                            </div>
                            <div class="double_input_client">
                                <InputComponent :bottom="'0'" :placeholder="'Saisissez votre numéro de téléphone'" :width="'100%'"  :border="'1px solid var(--grey)'"></InputComponent>
                            </div>
                        </div>
                    </div>
                    <div class="input_client_info">
                        <InputComponent :width="'100%'" :libel="'Poste occupé'" :placeholder="'Veuillez saisir'"  :border="'1px solid var(--grey)'"></InputComponent>
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
    .container{
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
        padding: 25px  10px 10px 10px;
    }
    .clients{
        padding: 15px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        /* outline: 1px solid red; */
    }
    .input_client_info{
        min-height: 50px;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        /* outline: 1px solid red; */
    }
    .double_clients_inputs{
        display: grid;
        grid-template-columns: 60px 1fr;
        min-height: 50px;
        width: 100%;
        gap: 10px;
    }
    .textarea{
        /* padding: 0 10px; */
        display: grid;
        grid-template-columns: 1fr;
    }
    .resource_person{
        padding: 15px 0;
        display: flex;
        align-items: center;
    }
    .cancel_save{
        display: flex;
        align-items: center;
        justify-content: end;
        gap: 20px;
        padding: 25px 10px 0px 10px;
    }
</style>