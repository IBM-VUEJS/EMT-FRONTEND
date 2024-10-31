<script setup>
import ButtonComponent from '@/components/auth/form/ButtonComponent.vue';
import InputComponent from '@/components/auth/form/InputComponent.vue';
import SearchComponent from '@/components/auth/form/SearchComponent.vue';
import SelectComponent from '@/components/auth/form/SelectComponent.vue';
import FilterIcon from '@/components/icons/FilterIcon';
import { RouterView, useRoute } from 'vue-router';
import { ref, inject } from 'vue';
import CancelIcon from '@/components/icons/CancelIcon';

const routes = useRoute()
const hideFilter = ref(false)
const show = inject('show')

const showFilter = () => {
    if (routes.path.includes('/opportunites-archive-list') || routes.path.includes('/prospects-archive-list')) {
        show.value = true
        hideFilter.value = true
    }
}

const closeFilter = () => {
    show.value = false
    hideFilter.value = false
}
</script>

<template>
    <div id="opportunity_list">
        <div class="search_add_filtre">
            <div class="search_div">
                <form @submit.prevent="">
                    <SearchComponent :type="'search'" :width="''" :border="'none'" :search="true" :bottom="'0'"></SearchComponent>
                </form>
            </div>
            <div class="links">
                <div class="inner_page" :class="{active_archive_link: routes.path.includes('/opportunites-archive-list')}">
                    <RouterLink :to="{name: 'opportunites-archive-list'}">Opportunités</RouterLink>
                </div>
                <div class="inner_page" :class="{active_archive_link: routes.path.includes('/prospects-archive-list')}">
                    <RouterLink :to="{name: 'prospects-archive-list'}">Prospects</RouterLink>
                </div>
            </div>
            <div class="add_filtre">
                <div class="filtre">
                    <ButtonComponent :bgcolor="'var(--white)'" :bottom="'0'"  :slim="true"  :bordered="true" @click="showFilter">
                        <span v-html="FilterIcon"></span> Filtrer
                    </ButtonComponent>

                    <div class="filter_form" v-if="hideFilter && routes.path.includes('/prospects-archive-list')">
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
                            <InputComponent :type="'date'"  :border="'1px solid var(--grey)'" :libel="'Date'" :bottom="'10px'"></InputComponent>
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

                    <div class="filter_form" v-if="hideFilter && routes.path.includes('/opportunites-archive-list')">
                        <Teleport to="body">
                            <div class="close_filter_div">
                                <div class="close" @click="closeFilter">
                                    <span v-html="CancelIcon"></span>
                                </div>
                            </div>
                            <h5 class="popup_title">Filtrer la liste des Prospects</h5>
                            <form action="" @submit.prevent="">
                                <SelectComponent :options="nom" :border="'1px solid var(--grey)'" :libel="'Type de Contact'"></SelectComponent>
                                <SelectComponent :options="type" :border="'1px solid var(--grey)'" :libel="'Secteur d\'activité'"></SelectComponent>
                                <SelectComponent :options="pays" :border="'1px solid var(--grey)'" :libel="'Pays'" :bottom="'10px'"></SelectComponent>
                                <SelectComponent :options="pays" :border="'1px solid var(--grey)'" :libel="'Catégorie'" :bottom="'10px'"></SelectComponent>
                                <SelectComponent :options="pays" :border="'1px solid var(--grey)'" :libel="'Statut'" :bottom="'10px'"></SelectComponent>
                                <SelectComponent :options="pays" :border="'1px solid var(--grey)'" :libel="'Source'" :bottom="'10px'"></SelectComponent>
                                <InputComponent :type="'date'"  :border="'1px solid var(--grey)'" :libel="'Date'" :bottom="'10px'"></InputComponent>
                                <div class="submit_cancel">
                                    <ButtonComponent :button_height="'39px'" :bottom="'0'">
                                        Filter
                                    </ButtonComponent>

                                    <ButtonComponent :bordered="true" :slim="true" :bottom="'0'" @click="closeFilter">
                                        Annuler
                                    </ButtonComponent>
                                </div>
                            </form>
                        </Teleport>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <RouterView></RouterView>
</template>

<style scoped>
    #opportunity_list{
        display: flex;
        flex-direction: column;
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
    .links{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 30%;
    }
    .add_filtre{
        display: flex;
        gap: 25px;
    }
    .active_archive_link a{
        color: var(--red);
        border-bottom: 2px solid var(--red);
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
    @media screen and (max-width: 1000px) {
        .search_add_filtre{
            flex-direction: column;
            /* height: 200px; */
        }
        .search_div{
            width: 100%;
        }
        .links{
            width: 100%;
            justify-content: space-evenly;
            height: 50px;
        }
        .add_filtre{
            margin-top: 10px;
            width: 100%;
        }
        .add_filtre .filtre{
            width: 100%;
        }
    }
</style>