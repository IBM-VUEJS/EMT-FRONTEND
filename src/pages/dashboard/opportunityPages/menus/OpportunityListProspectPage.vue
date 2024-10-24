<script setup>
import ButtonComponent from '@/components/auth/form/ButtonComponent.vue';
import SearchComponent from '@/components/auth/form/SearchComponent.vue';
import SelectComponent from '@/components/auth/form/SelectComponent.vue';
import BlueEyesIcon from '@/components/icons/BlueEyesIcon';
import CancelIcon from '@/components/icons/CancelIcon';
import DeleteIcon from '@/components/icons/DeleteIcon';
import FilterIcon from '@/components/icons/FilterIcon';
import PaginationLeftArrow from '@/components/icons/PaginationLeftArrow';
import PaginationRightArrow from '@/components/icons/PaginationRightArrow';
import YellowEditPenLine from '@/components/icons/YellowEditPenLine';
import Swal from 'sweetalert2';
import { inject, provide, ref } from 'vue';

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
    },
    {
        numero: 'PRO_2404',
        nom: 'UNIVERSITY OF LOME',
        type: 'Institution Publique',
        pays: 'TOGO'
    },
    {
        numero: 'PRO_2405',
        nom: 'CORIS BANK',
        type: 'Entreprise Privée',
        pays: 'BURKINA FASO'
    },
    {
        numero: 'PRO_2406',
        nom: 'ORANGE',
        type: 'Entreprise Privée',
        pays: 'COTE D\'IVOIRE'
    },
    {
        numero: 'PRO_2407',
        nom: 'MTN',
        type: 'Entreprise Privée',
        pays: 'GHANA'
    },
    {
        numero: 'PRO_2408',
        nom: 'NSIA',
        type: 'Entreprise Privée',
        pays: 'TOGO'
    }
];

const nom = [
    {
        libel: 'Choisir le nom',
        value: ''
    },
    {
        libel: 'KOKOU',
        value: 'KOKOU'
    }
]

const type = [
    {
        libel: 'Choisir le type',
        value: ''
    },
    {
        libel: 'Particulier',
        value: 'Particulier'
    }
]

const pays = [
    {
        libel: 'Choisir le pays',
        value: ''
    },
    {
        libel: 'TOGO',
        value: 'TOGO'
    }
]


const hideFilter = ref(false)
const show = inject('show')
const showDefinePasswordForm = inject('showDefinePasswordForm')
const showFilter = () => {
    show.value = true
    hideFilter.value = true
}

const closeFilter = () => {
    show.value = false
    hideFilter.value = false
}

const archiveProspect = () => {
    Swal.fire(
        {
            icon: 'warning',
            text: 'Êtes-vous sûr d\'archiver ce prospect',
            showConfirmButton: true,
            confirmButtonColor: 'var(--red)',
            confirmButtonText: 'Oui, archiver',
            showCancelButton: true,
            cancelButtonText: 'Annuler',
            customClass: {
                cancelButton: 'cancel-button'
            }
        }
    ).then(
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
}

</script>

<template>
    <div id="prospect_list">
        <div class="search_add_filtre">
            <div class="search_div">
                <form @submit.prevent="">
                    <SearchComponent :type="'search'" :width="''" :border="'none'" :search="true" :bottom="'0'"></SearchComponent>
                </form>
            </div>
            <div class="add_filtre">
                <div class="filtre">
                    <ButtonComponent :bgcolor="'var(--white)'" :bottom="'0'"  :slim="true"  :bordered="true" @click="showFilter">
                        <span v-html="FilterIcon"></span> Filtrer
                    </ButtonComponent>
                    <div class="filter_form" v-if="hideFilter">
                        <div class="close_filter_div">
                            <div class="close" @click="closeFilter">
                                <span v-html="CancelIcon"></span>
                            </div>
                        </div>
                        <h5 class="popup_title">Filtrer la liste des Prospects</h5>
                        <form action="" @submit.prevent="">
                            <SelectComponent :options="nom" :border="'1px solid var(--grey)'" :libel="'Nom'"></SelectComponent>
                            <SelectComponent :options="type" :border="'1px solid var(--grey)'" :libel="'Type'"></SelectComponent>
                            <SelectComponent :options="pays" :border="'1px solid var(--grey)'" :libel="'Pays'" :bottom="'10px'"></SelectComponent>
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
                </div>
            </div>
        </div>
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
                            <div class="action_icons">
                                <span v-html="YellowEditPenLine"></span>
                            </div>
                            <div class="action_icons" @click="archiveProspect(2)">
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
    </div>
</template>

<style scoped>
    #prospect_list{
        display: grid;
        grid-template-rows: 60px 1fr;
        padding-bottom: 10px;
        padding-top: 30px;
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
        width: 300px;
        right: 25px;
        top: 110%;
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
</style>