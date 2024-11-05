<script setup>
import InputComponent from '@/components/auth/form/InputComponent.vue';
import SelectComponent from '@/components/auth/form/SelectComponent.vue';
import ButtonComponent from '@/components/auth/form/ButtonComponent.vue';
import TextareaComponent from '@/components/auth/form/TextareaComponent.vue';
import RedCircleArrowIcon from '@/components/icons/RedCircleArrowIcon';
import DownloadIcon from '@/components/icons/DownloadIcon';
import ResourcePersonIcon from '@/components/icons/ResourcePersonIcon';
import FileIcon from '@/components/icons/FileIcon';
import { useRoute, useRouter } from 'vue-router';
import { onMounted } from 'vue';

const route = useRoute()
const router = useRouter()
const previousURL = router.options.history.state.back

</script>

<template>
    <div class="title_text">
        <div class="arrow_title">
            <div class="arrow">
                <template v-if="true">
                    <RouterLink :to="previousURL">
                        <span v-html="RedCircleArrowIcon"></span>
                    </RouterLink>
                </template>
            </div>
            <div class="title">
                <h3>Détails du client N* {{ route.params.client_id }}</h3>
            </div>
        </div>
        <div class="text">
            Clients  » Liste des clients » Détails Client
        </div>
    </div>
    <div class="container_show_info">
        <div class="child_1">
            <div class="icon">
                <span v-html="FileIcon"></span>
            </div>
            <div class="client_id">
                <span>Détails du client N* {{ route.params.client_id }}</span>
            </div>
            <div class="active_or_not">
                <div class="active_client statut" v-if="true">
                    <span class="green_point"></span>
                    Actif
                </div>
                <div class="inactive_client statut" v-else>
                    <span class="red_point"></span>
                    Inactif
                </div>
            </div>
        </div>
        <div class="child_2">
            <div class="maj_date">
                <div class="maj">
                    Dernière mise à jour: Mardi le 29 Octobre 2024
                </div>
                <small>12 : 35</small>
            </div>
            <div class="update_client">
                <RouterLink :to="{}">
                    <ButtonComponent :slim="true" :bordered="true">
                        Modifier ces informations
                    </ButtonComponent>
                </RouterLink>
            </div>
        </div>
        <div class="child_3">
            <div class="created_at_hour">
                <div class="created_at">
                    Créer le Mardi 12 Septembre 2024
                </div>
                <small class="hour">
                    12 : 45
                </small>
            </div>
        </div>
        <div class="child_4">
            <div class="text_info_client">
                Informations sur le client
            </div>
            <div class="informations">
                <div class="informations_childs">
                    <div class="libel">Nom</div>
                    <div class="value">CRT</div>
                </div>
                <div class="informations_childs">
                    <div class="libel">Email</div>
                    <div class="value">crt.togo.officiel@gmail.com</div>
                </div>
                <div class="informations_childs">
                    <div class="libel">N* de téléphone</div>
                    <div class="value">+228 3409349023</div>
                </div>
                <div class="informations_childs">
                    <div class="libel">Adresse</div>
                    <div class="value">X4MQ+7JR, Lomé, TOGO</div>
                </div>
            </div>
            <div class="informations">
                <div class="informations_childs">
                    <div class="libel">Type de client</div>
                    <div class="value">Entreprise privé</div>
                </div>
                <div class="informations_childs">
                    <div class="libel">Devise</div>
                    <div class="value">F CFA</div>
                </div>
                <div class="informations_childs">
                    <div class="libel">Pays</div>
                    <div class="value">TOGO</div>
                </div>
                <div class="informations_childs">
                    <div class="libel">Catégorie</div>
                    <div class="value">Dévéloppement</div>
                </div>
            </div>
            <div class="informations">
                <div class="informations_childs">
                    <div class="libel">Secteur d'activité</div>
                    <div class="value">Assurance</div>
                </div>
                <div class="informations_childs">
                    <div class="libel">Site web</div>
                    <div class="value">https://caissederetraites.tg</div>
                </div>
                <div class="informations_childs">
                    <div class="libel">Source</div>
                    <div class="value">Prospection</div>
                </div>
                <div class="informations_childs">
                    <div class="libel">Nom du commercial</div>
                    <div class="value">Espera AKAKPO</div>
                </div>
            </div>
            <div class="text_info_client">
                Personne resource
            </div>
            <div class="informations">
                <div class="informations_childs">
                    <div class="libel">Nom</div>
                    <div class="value">KPODO Jules</div>
                </div>
                <div class="informations_childs">
                    <div class="libel">Email</div>
                    <div class="value">julekpodo@gmail.com</div>
                </div>
                <div class="informations_childs">
                    <div class="libel">N* de téléphone</div>
                    <div class="value">+228 3409349023</div>
                </div>
                <div class="informations_childs">
                    <div class="libel">Poste</div>
                    <div class="value">Responsable Marketing</div>
                </div>
            </div>
            <div class="note">
                <div class="libel">Note</div>
                <div class="textarea_value">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum odio adipisci consectetur. Natus obcaecati voluptates est porro quisquam voluptatibus sunt?
                </div>
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
    .container_show_info{
        padding: 30px;
        border-radius: 10px;
        margin-top: 10px;
        box-shadow: var(--shadow);
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
    .child_1{
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .client_id span, .maj, .created_at{
        font-weight: 600;
    }
    .active_or_not{
        display: flex;
        align-items: center;
    }
    .active_client, .inactive_client{
        padding: 2.5px 15px;
        display: flex;
        align-items: center;
        gap: 5px;
        border-radius: 20px;
    }
    .active_client{
        background-color: var(--green-light);
        color: var(--green);
    }
    .inactive_client{
        background-color: var(--red-light);
        color: var(--red);
    }
    .green_point, .red_point{
        width: 8px;
        height: 8px;
        border-radius: 50%;
    }
    .green_point{
        background-color: var(--green);
    }
    .red_point{
        background-color: var(--red);
    }
    .child_2{
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
    .text_info_client{
        margin-bottom: 30px;
        font-weight: 600;
    }
    .informations{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        margin-bottom: 30px;
    }
    .libel{
        font-weight: 600;
    }
    .value{
        color: var(--grey);
    }
    .textarea_value{
        padding: 20px;
        border: 1px solid var(--grey);
        border-radius: 10px;
        min-height: 100px;
    }
    @media screen and (max-width: 1200px) {
       .informations_childs{
            margin-bottom: 15px;
       } 
    }
</style>