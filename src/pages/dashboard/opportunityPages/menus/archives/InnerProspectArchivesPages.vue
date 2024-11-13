<script setup>
import ButtonComponent from '@/components/auth/form/ButtonComponent.vue';
import SearchComponent from '@/components/auth/form/SearchComponent.vue';
import BlueEyesIcon from '@/assets/icons/BlueEyesIcon';
import DeleteIcon from '@/assets/icons/DeleteIcon';
import FilterIcon from '@/assets/icons/FilterIcon';
import PaginationLeftArrow from '@/assets/icons/PaginationLeftArrow';
import PaginationRightArrow from '@/assets/icons/PaginationRightArrow';
import YellowEditPenLine from '@/assets/icons/YellowEditPenLine';
import Swal from 'sweetalert2';

const prospects = [
    {
        numero: 'PRO_2401',
        nom: 'ECOBANK',
        type: 'Entreprise Privée',
        pays: 'TOGO'
    },
    {
        numero: 'PRO_2402',
        nom: 'TOGOCEL',
        type: 'Entreprise Privée',
        pays: 'TOGO'
    },
    {
        numero: 'PRO_2403',
        nom: 'MOOV',
        type: 'Entreprise Privée',
        pays: 'BENIN'
    }
];

const unarchiveProspect = () => {
    Swal.fire(
        {
            text: 'Êtes-vous sûr de vouloir désarchiver cet prospect ?',
            icon: 'warning',
            confirmButtonText: 'Oui, désarchiver',
            confirmButtonColor: 'var(--red)',
            cancelButtonText: 'Annuler',
            showCancelButton: true,
            customClass: {
                cancelButton: 'cancel-button'
            }
        }
    ).then(
        (result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    {
                        text: 'Le prospect a été désarchiver avec succès.',
                        icon: 'success',
                        confirmButtonText: 'Retour',
                        confirmButtonColor: 'var(--green)',
                    }
                )
            }
        }
    )
}

const showProspectFunc = () => {
    
}

</script>

<template>
<div id="prospect_list">
        <div class="prospect_info_list">
            <div class="list_header">
                <div  class="list_value" style="padding-left: 15px;">Numéro</div>
                <div  class="list_value">Nom</div>
                <div  class="list_value">Type</div>
                <div  class="list_value">Pays</div>
                <div  class="list_value">Actions</div>
            </div>
            <div class="list_body">
                <template v-for="prospect in prospects">
                    <div class="list_body_values">
                        <div  class="list_value" style="padding-left: 15px;">{{ prospect['numero'] }}</div>
                        <div  class="list_value">{{prospect['nom']}}</div>
                        <div  class="list_value">{{ prospect['type'] }}</div>
                        <div  class="list_value">{{prospect['pays']}}</div>
                        <div  class="actions">
                            <div class="action_icons">
                                <span v-html="BlueEyesIcon"></span>
                            </div>
                            <div class="action_icons" @click="archiveProspect(2)">
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
</template>

<style scoped>
        .lists{
        height: 100%;
    }
    #prospect_list{
        padding-bottom: 10px;
        /* padding-top: 30px; */
    }
    .search_add_filtre{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 100%;
    }
    .add_filtre{
        display: flex;
        gap: 25px;
    }
    .prospect_info_list{
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
        grid-template-columns: repeat(5, 1fr);
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
    .list_value{
        word-break: break-all;
        word-wrap: break-word;
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
    .filtre{
        position: relative;
    }
    .filter_form{
        position: absolute;
        background-color: var(--white);
        padding: 20px;
        width: 40%;
        min-width: 300px;
        min-height: 300px;
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
        .prospect_info_list{
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