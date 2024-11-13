<script setup>
import SearchComponent from '@/components/auth/form/SearchComponent.vue';
import BlueEyesIcon from '@/assets/icons/BlueEyesIcon';
import DeleteIcon from '@/assets/icons/DeleteIcon';
import PaginationLeftArrow from '@/assets/icons/PaginationLeftArrow';
import PaginationRightArrow from '@/assets/icons/PaginationRightArrow';
import Swal from 'sweetalert2';
import { inject, provide, ref } from 'vue';

const opportunities = [
    {
        numero: 'CLT_2401',
        nom: 'EBA',
        type: 'Entreprise Privée',
        pays: 'TOGO',
        produit_service: 'VIRTUAL SERVICE',
        statut: 'Actif',
    },
    {
        numero: 'CLT_2402',
        nom: 'MTN',
        type: 'Entreprise Publique',
        pays: 'COTE D\'IVOIRE',
        produit_service: 'TELECOM SERVICE',
        statut: 'Inactif',
    },
    {
        numero: 'CLT_2403',
        nom: 'ORANGE',
        type: 'Entreprise Privée',
        pays: 'SENEGAL',
        produit_service: 'MOBILE BANKING',
        statut: 'Actif',
    },
    {
        numero: 'CLT_2404',
        nom: 'MOOV',
        type: 'Entreprise Publique',
        pays: 'BURKINA FASO',
        produit_service: 'INTERNET SERVICE',
        statut: 'Inactif',
    },
    {
        numero: 'CLT_2405',
        nom: 'SONATEL',
        type: 'Entreprise Privée',
        pays: 'MALI',
        produit_service: 'BROADBAND',
        statut: 'Actif',
    },
];


const hideFilter = ref(false)
const client_to_show = inject('client_to_show')


const show = inject('show')
const showclient  = inject('showclient')
const showAddOpportuinity = inject('showAddOpportuinity')
const showUpdateclient = inject('showUpdateclient')
const showDefinePasswordForm = inject('showDefinePasswordForm')


const unarchiveclient = () => {
    Swal.fire({
            title: '',
            showCancelButton: true,
            text: 'Êtes-vous sûr de vouloir désarchiver cet client ?',
            icon: 'warning',
            confirmButtonText: 'Oui, archiver',
            confirmButtonColor: 'var(--red)',
            cancelButtonText: 'Annuler',
            customClass: {
                cancelButton: 'cancel-button'
            }
        }).then(
            (result) => {
                if(result.isConfirmed) {
                    Swal.fire(
                        {
                            text: 'Le client a été désarchivé avec succès',
                            icon: 'success',
                            confirmButtonText: 'Retour',
                            confirmButtonColor: 'var(--green)'
                        }
                    )
                }
            }
        )
        show.value = false
        showDefinePasswordForm.value = false
}

const showclientFunc = (id) => {
    showclient.value = true
    show.value = true
    client_to_show.value.push(opportunities.find((client) => client.id === id))
    provide('client_to_show', client_to_show.value)
    
}

</script>

<template>
    <div class="lists">
        <div class="search_add_filtre">
            <div class="search_div">
                <form @submit.prevent="updateclient">
                    <SearchComponent :type="'search'" :width="''" :border="'none'" :search="true" :bottom="'0'"></SearchComponent>
                </form>
            </div>
        </div>
    <div id="client_list">
        <div class="client_info_list">
            <div class="list_header">
                <div  class="list_value"  style="padding-left: 15px;">Numéro</div>
                <div  class="list_value">Nom</div>
                <div  class="list_value">Type</div>
                <div  class="list_value">Pays</div>
                <div  class="list_value">Produits/Services</div>
                <div  class="list_value">Statut</div>
                <div  class="actions">Action</div>
            </div>
            <div class="list_body">
                <template v-for="client in opportunities">
                    <div class="list_body_values">
                        <div  class="list_value"  style="padding-left: 15px;">{{client['numero']}}</div>
                        <div  class="list_value">{{ client['nom'] }}</div>
                        <div  class="list_value">{{client['type']}}</div>
                        <div  class="list_value">{{ client['pays'] }}</div>
                        <div  class="list_value">{{client['produit_service']}}</div>
                        <div  class="list_value" :class="{green: client['statut'] === 'Actif',  red: client['statut'] === 'Inactif'}">{{client['statut']}}</div>
                        <div  class="actions">
                            <RouterLink :to="{name: 'client-show', params: {client_id: client['numero']}}">
                                <div class="action_icons" @click="showclientFunc(client['numero'])">
                                    <span v-html="BlueEyesIcon"></span>
                                </div>
                            </RouterLink>
                            <div class="action_icons" @click="unarchiveclient(client['numero'])">
                                <span v-html="DeleteIcon"></span>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </div>
        <div class="pagination">
            <div class="pagination_composant">
                <div class="left_arrow">
                    <span v-html="PaginationLeftArrow"></span>
                </div>
                <div class="pages">
                    <div class="page_link active_link">1</div>
                    <div class="page_link">2</div>
                    <div class="page_link">3</div>
                </div>
                <div class="right_arrow">
                    <span v-html="PaginationRightArrow"></span>
                </div>
            </div>
        </div>
</div>
    </div>
</template>

<style scoped>
    .lists{
        height: 100%;
    }
    #client_list{
        padding-bottom: 10px;
        padding-top: 30px;
    }
    .search_add_filtre{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        min-height: 40px;
    }
    .add_filtre{
        display: flex;
        gap: 25px;
    }
    .client_info_list{
        display: flex;
        flex-direction: column;
        min-width: 300px;
        width: 100%;
        /* height: 100%; */
        margin-top: 10px;
    }
    .list_header{
        margin-bottom: 20px;
        height: 50px;
    }
    .list_body{
        height: 525px;
    }
    .pagination{
        height: 50px;
    }
    .list_header, .list_body_values{
        display: grid;
        grid-template-columns: repeat(7, 1fr);
    }
    .list_body_values{
        height: 55px;
        box-shadow: var(--shadow-light);
    }
    .list_body_values:hover{
        outline: 1px solid red;
    }
    .list_body_values .list_value{
        font-weight: 300;
    }
    .list_body{
        display: flex;
        align-items: center;
        justify-content: start;
        flex-direction: column;
        gap: 10px;
    }
    .list_body_values{
        width: 100%;
    }
    .list_value, .actions{
        align-content: center;
    }
    .list_value{
        word-break: break-all;
        word-wrap: break-word;
    }
    .actions{
        display: flex;
        align-items: center;
        justify-content: center;
        padding-right: 15px
    }
    .green{
        color: var(--green);
    }
    .yellow{
        color: var(--yellow);
    }
    .blue{
        color: var(--blue);
    }
    .red{
        color: var(--red);
    }
    .pagination{
        display: flex;
        align-items: center;
        justify-content: end;
    }
    .pagination_composant{
        display: flex;
        gap: 10px;
    }
    .pages{
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 15px;
        background-color: var(--grey-slim)
    }
    .active_link{
        background-color: var(--red);
        color: var(--white) !important;
    }
    .page_link{
        width: 30px;
        height: 30px;
        border-radius: 50px;
        align-content: center;
        text-align: center;
        color: var(--grey);
        cursor: pointer;
        transition: all .1s .1s ease-in-out;
    }
    .page_link:hover{
        background-color: var(--red);
        color: var(--white);
    }
    .actions{
        display: flex;
        align-items: center;
        gap: 20px;
    }
    .action_icons{
        cursor: pointer;
    }
    .filtre{
        position: relative;
    }
    .filter_form{
        position: absolute;
        background-color: var(--white);
        padding: 20px;
        width: 40%;
        min-width: 300px;
        min-height: 500px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 10px;
        z-index: 100;
    }
    .submit_cancel{
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 10px;
    }
    .close_filter_div{
        position: relative;
    }
    .close{
        position: absolute;
        top: -35px;
        right: -30px;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        box-shadow: var(--shadow);
        background-color: var(--white);
        cursor: pointer
    }
    .popup_title{
        font-weight: 300;
        color: var(--red);
    }
    @media screen and (max-width: 1000px) {
        .client_list{
            display: flex;
            flex-direction: column;
            overflow: hidden;
        }
        .search_add_filtre{
            flex-direction: column;
            gap: 10px;
            justify-content: start;
            align-items: start;
            width: 100%;
        }
        .search_div{
            width: 100%;
        }
        .client_info_list{
            overflow: scroll;
        }
        .list_header, .list_body{
            padding: 10px;
            width: 1000px;
            overflow-x: scroll
        }
        .add_filtre{
            display: flex;
            justify-content: space-between;
            width: 100%;
            gap: 10px;
        }
        .add_filtre .tools{
            font-size: .9rem;
            width: 100%;
        }
    }
</style>