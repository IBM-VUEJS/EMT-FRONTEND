<script setup>
import InputComponent from '@/components/form/InputComponent.vue';
import SelectComponent from '@/components/form/SelectComponent.vue';
import ButtonComponent from '@/components/form/ButtonComponent.vue';
import TextareaComponent from '@/components/form/TextareaComponent.vue';
import RedCircleArrowIcon from '@/assets/icons/RedCircleArrowIcon';
import DownloadIcon from '@/assets/icons/DownloadIcon';
import ResourcePersonIcon from '@/assets/icons/ResourcePersonIcon';
import Swal from 'sweetalert2';
import { useRouter } from 'vue-router';

const router = useRouter()
const createClientFunc = () => {
    router.push({name: 'client-list'})
    Swal.fire(
        {
            icon: 'success',
            text: 'Le Client a été crée avec succès',
            confirmButtonText: 'Retour',
            confirmButtonColor: 'var(--green)'
        }
    )
}
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
                <h3>Mettre à jour un Client</h3>
            </div>
        </div>
        <div class="text">
            Clients  » Liste des clients » Mise à jour Client
        </div>
    </div>
    <div class="form_red_descript_text">
        <div class="container_client">
            <div class="red_descript_text">
                <h4>Mise à jour du Client</h4>
                <small>Remplissez ce formulaire pour créer un client</small>
            </div>

            <div class="form">
                <div class="myprofile_div_image">
                    <div class="myprofile_div_image_container_client">
                        <img src="" alt="">
                    </div>
                    <label for="profil" class="camera">
                        <i class="bi bi-camera-fill" ></i>
                    </label>
                    <div class="container_client_topbar_menu">
                    </div>
                </div>
                <div class="form_details_opportunity">
                    <h5>Informations du client</h5>
                </div>
                
                <form class="clients" @submit.prevent="createClientFunc">
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
                        <ButtonComponent :button_width="'120px'" :type="'reset'" :slim="true" :bordered="true" >Annuler</ButtonComponent>
                        <ButtonComponent :button_width="'140px'" :type="'submit'" :slim="true" >
                            Enregister 
                            <span v-html="DownloadIcon"></span>
                        </ButtonComponent>
                    </div>
                    <input type="file" name="" id="profil" style="visibility: hidden;">
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
    .container_client{
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
    .myprofile_div_image{
        width: 220px;
        height: 220px;
        background-color: var(--red);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        margin: 0 auto;
    }
    .myprofile_div_image_container_client{
        width: 205px;
        height: 205px;
        background-color: aliceblue;
        border-radius: 50%;
    }
    .param_container_client_sidebar_links{
        padding: 50px 20px 0 0;
        height: 80%;
        border-right: 1px solid var(--grey-light);
    }
    .camera{
        color: var(--white);
        background-color: var(--red);
        font-size: 1.4rem;
        position: absolute;
        bottom: 0;
        right: 30px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        text-align: center;
        align-content: center;
        cursor: pointer;
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
    @media screen and (max-width: 850px) {
        .container_client{
            width: 100%;
        }
        .cancel_save{
            justify-content: space-between;
            padding: 25px 0 0 0;
        }
    }
</style>