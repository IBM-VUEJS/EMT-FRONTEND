<script setup>
import ButtonComponent from '@/components/auth/form/ButtonComponent.vue';
import InputComponent from '@/components/auth/form/InputComponent.vue';
import SearchComponent from '@/components/auth/form/SearchComponent.vue';
import SelectComponent from '@/components/auth/form/SelectComponent.vue';
import AddIcon from '@/assets/icons/AddIcon';
import BlueEyesIcon from '@/assets/icons/BlueEyesIcon';
import CancelIcon from '@/assets/icons/CancelIcon';
import DeleteIcon from '@/assets/icons/DeleteIcon';
import FilterIcon from '@/assets/icons/FilterIcon';
import PaginationLeftArrow from '@/assets/icons/PaginationLeftArrow';
import PaginationRightArrow from '@/assets/icons/PaginationRightArrow';
import PrintIcon from '@/assets/icons/PrintIcon';
import YellowEditPenLine from '@/assets/icons/YellowEditPenLine';
import Swal from 'sweetalert2';
import { inject, provide, ref } from 'vue';

const opportunities = [
    {
        id: '0001',
        nom: 'Application web',
        contact: 'ECOBANK',
        revenu: '35.000$',
        probability: '92%',
        vendeur: 'Mme LOUISE',
        statut: 'Nouveau',
        action: ''
    },
    {
        id: '0002',
        nom: 'Système de gestion',
        contact: 'TOGOCEL',
        revenu: '50.000$',
        probability: '85%',
        vendeur: 'M. BOKO',
        statut: 'Qualifié',
        action: ''
    },
    {
        id: '0003',
        nom: 'CRM',
        contact: 'MOOV',
        revenu: '28.000$',
        probability: '77%',
        vendeur: 'Mme ADJO',
        statut: 'Gagné',
        action: ''
    },
    {
        id: '0004',
        nom: 'ERP',
        contact: 'UNIVERSITY OF LOME',
        revenu: '60.000$',
        probability: '65%',
        vendeur: 'M. KODJO',
        statut: 'Perdu',
        action: ''
    },
    {
        id: '0005',
        nom: 'Intranet sécurisé',
        contact: 'CORIS BANK',
        revenu: '45.000$',
        probability: '80%',
        vendeur: 'Mme LOUISE',
        statut: 'Qualifié',
        action: ''
    },
    {
        id: '0006',
        nom: 'Application mobile',
        contact: 'ORANGE',
        revenu: '40.000$',
        probability: '90%',
        vendeur: 'M. KOUASSI',
        statut: 'Nouveau',
        action: ''
    },
    {
        id: '0007',
        nom: 'Plateforme e-commerce',
        contact: 'MTN',
        revenu: '25.000$',
        probability: '70%',
        vendeur: 'Mme SEWA',
        statut: 'Gagné',
        action: ''
    },
    {
        id: '0008',
        nom: 'Système de paie',
        contact: 'NSIA',
        revenu: '55.000$',
        probability: '88%',
        vendeur: 'M. AZIZ',
        statut: 'Perdu',
        action: ''
    }
];

const hideFilter = ref(false)
const opportunity_to_show = inject('opportunity_to_show')


const show = inject('show')
const showOpportunity  = inject('showOpportunity')
const showAddOpportuinity = inject('showAddOpportuinity')
const showUpdateOpportunity = inject('showUpdateOpportunity')
const showDefinePasswordForm = inject('showDefinePasswordForm')


const archiveOpportunity = () => {
    Swal.fire({
            title: '',
            showCancelButton: true,
            text: 'Êtes-vous sûr de vouloir archiver cette opportunité ?',
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
                            text: 'L\'opportunité a été archivé avec succès',
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

const showOpportunityFunc = (id) => {
    showOpportunity.value = true
    show.value = true
    opportunity_to_show.value.push(opportunities.find((opportunity) => opportunity.id === id))
    provide('opportunity_to_show', opportunity_to_show.value)
    
}

const UpdateOpportunityFunc = (id) => {
    showUpdateOpportunity.value = true
    show.value = true
    opportunity_to_show.value.push(opportunities.find((opportunity) => opportunity.id === id))
    provide('opportunity_to_show', opportunity_to_show.value)
    console.log(opportunity_to_show.value);
}

const addOpportunity = () => {
    show.value = true
    showAddOpportuinity.value = true
}

const showFilter = () => {
    show.value = true
    hideFilter.value = true
}

const closeFilter = () => {
    show.value = false
    hideFilter.value = false
    
}

//UPDAT FUNCTION
const updateOpportunity = () => {

}

const printOpportunities = () => {

}

</script>

<template>
    <div class="lists">
        <div class="search_add_filtre">
            <div class="search_div">
                <form @submit.prevent="updateOpportunity">
                    <SearchComponent :type="'search'" :width="''" :border="'none'" :search="true" :bottom="'0'"></SearchComponent>
                </form>
            </div>
            <div class="add_filtre">
                <div class="add tools">
                    <RouterLink :to="{name: 'opportunity-add'}">
                        <ButtonComponent :button_width="'100%'" :bgcolor="'white'" :bottom="'0'" :slim="true">
                            <span v-html="AddIcon"></span> Ajouter
                        </ButtonComponent>
                    </RouterLink>
                </div>
                <div class="add tools">
                    <ButtonComponent :button_width="'100%'" :bgcolor="'white'" :bottom="'0'" :slim="true" :bordered="true" @click="printOpportunities">
                         <span v-html="PrintIcon"></span> Imprimer
                    </ButtonComponent>
                </div>
                <div class="filtre tools">
                    <ButtonComponent :button_width="'100%'"  :bgcolor="'var(--white)'" :bottom="'0'"  :slim="true"  :bordered="true" @click="showFilter">
                        <span v-html="FilterIcon"></span> Filtrer
                    </ButtonComponent>
                    <Teleport to="body">
                        <div class="filter_form" v-if="hideFilter">
                            <div class="close_filter_div">
                                <div class="close" @click="closeFilter">
                                    <span v-html="CancelIcon"></span>
                                </div>
                            </div>
                            <h5 class="popup_title">Filtrer la liste</h5>
                                <form action="" @submit.prevent="">
                                    <SelectComponent :options="nom" :border="'1px solid var(--grey)'" :libel="'Type de Contact'"></SelectComponent>
                                    <SelectComponent :options="type" :border="'1px solid var(--grey)'" :libel="'Secteur d\'activité'"></SelectComponent>
                                    <SelectComponent :options="pays" :border="'1px solid var(--grey)'" :libel="'Pays'" :bottom="'10px'"></SelectComponent>
                                    <SelectComponent :options="pays" :border="'1px solid var(--grey)'" :libel="'Catégorie'" :bottom="'10px'"></SelectComponent>
                                    <SelectComponent :options="pays" :border="'1px solid var(--grey)'" :libel="'Statut'" :bottom="'10px'"></SelectComponent>
                                    <SelectComponent :options="pays" :border="'1px solid var(--grey)'" :libel="'Source'" :bottom="'10px'"></SelectComponent>
                                    <InputComponent :libel="'Periode'" :type="'date'" :border="'1px solid var(--grey)'" :bottom="'10px'"></InputComponent>
                                    <div class="submit_cancel">
                                        <ButtonComponent :button_height="'39px'" :bottom="'0'">
                                            Filter
                                        </ButtonComponent>

                                        <ButtonComponent :bordered="true" :slim="true" :bottom="'0'" @click="closeFilter">
                                            Annuler
                                        </ButtonComponent>
                                    </div>
                                </form>
                        </div>
                    </Teleport>
                </div>
            </div>
        </div>
    <div id="opportunity_list">
        <div class="opportunity_info_list">
            <div class="list_header">
                <div  class="list_value" style="padding-left: 15px;">ID</div>
                <div  class="list_value">NOM</div>
                <div  class="list_value">Nom du contact</div>
                <div  class="list_value">Revenu espéré</div>
                <div  class="list_value">% Probabilité</div>
                <div  class="list_value">Vendeur</div>
                <div  class="list_value">Statut</div>
                <div  class="actions">Action</div>
            </div>
            <div class="list_body">
                <template v-for="opportunity in opportunities">
                    <div class="list_body_values">
                        <div  class="list_value" style="padding-left: 15px;">{{ opportunity['id'] }}</div>
                        <div  class="list_value">{{opportunity['nom']}}</div>
                        <div  class="list_value">{{ opportunity['contact'] }}</div>
                        <div  class="list_value">{{opportunity['revenu']}}</div>
                        <div  class="list_value">{{ opportunity['probability'] }}</div>
                        <div  class="list_value">{{opportunity['vendeur']}}</div>
                        <div  class="list_value" :class="{green: opportunity['statut'] === 'Nouveau', yellow: opportunity['statut'] === 'Gagné', blue: opportunity['statut'] === 'Qualifié', red: opportunity['statut'] === 'Perdu'}">{{opportunity['statut']}}</div>
                        <div  class="actions">
                            <div class="action_icons" @click="showOpportunityFunc(opportunity['id'])">
                                <span v-html="BlueEyesIcon"></span>
                            </div>
                            <div class="action_icons" @click="UpdateOpportunityFunc(opportunity['id'])">
                                <span v-html="YellowEditPenLine"></span>
                            </div>
                            <div class="action_icons" @click="archiveOpportunity">
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
    #opportunity_list{
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
    .opportunity_info_list{
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
        grid-template-columns: repeat(8, 1fr);
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
        .opportunity_list{
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
        .opportunity_info_list{
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