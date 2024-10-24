<script setup>

import PaginationLeftArrow from '@/components/icons/PaginationLeftArrow';
import PaginationRightArrow from '@/components/icons/PaginationRightArrow';
import BlueEyesIcon from '@/components/icons/BlueEyesIcon';
import DeleteIcon from '@/components/icons/DeleteIcon';
import { inject } from 'vue';
import Swal from 'sweetalert2';

    const opportunities = [
    {
        id: '0001',
        nom: 'Application web',
        contact: 'ECOBANK',
        revenu: '35.000$',
        probability: '92%',
        vendeur: 'Mme LOUISE',
        statut: 'Perdu',
        action: ''
    },
    {
        id: '0002',
        nom: 'Système de gestion',
        contact: 'TOGOCEL',
        revenu: '50.000$',
        probability: '85%',
        vendeur: 'M. BOKO',
        statut: 'Perdu',
        action: ''
    },
    {
        id: '0003',
        nom: 'CRM',
        contact: 'MOOV',
        revenu: '28.000$',
        probability: '77%',
        vendeur: 'Mme ADJO',
        statut: 'Perdu',
        action: ''
    },
];
const opportunity_to_show = inject('opportunity_to_show')


const show = inject('show')
const showOpportunity  = inject('showOpportunity')

const unarchiveOpportunity = () => {
    Swal.fire({
            title: '',
            showCancelButton: true,
            text: 'Êtes-vous sûr de vouloir désarchiver cette opportunité ?',
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
                            text: 'L\'opportunité a été désarchivé avec succès',
                            icon: 'success',
                            confirmButtonText: 'Retour',
                            confirmButtonColor: 'var(--green)'
                        }
                    )
                }
            }
        )
        show.value = false
}

const showOpportunityFunc = (id) => {
    showOpportunity.value = true
    show.value = true
    opportunity_to_show.value.push(opportunities.find((opportunity) => opportunity.id === id))
}

</script>

<template>
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
                            <div class="action_icons" @click="unarchiveOpportunity">
                                <span v-html="DeleteIcon"></span>
                            </div>
                        </div>
                    </div>
                </template>
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
</template>

<style scoped>
       .opportunity_info_list{
        display: grid;
        grid-template-rows: 50px 525px 50px;
        width: 100%;
        height: 100%;
        margin-top: 30px;
    }
    .list_header{
        margin-bottom: 20px;
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
        font-weight:300;
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
</style>