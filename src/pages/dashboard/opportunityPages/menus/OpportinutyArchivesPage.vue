<script setup>
import ButtonComponent from '@/components/auth/form/ButtonComponent.vue';
import SearchComponent from '@/components/auth/form/SearchComponent.vue';
import AddIcon from '@/components/icons/AddIcon';
import FilterIcon from '@/components/icons/FilterIcon';
import { RouterView, useRoute } from 'vue-router';

const routes = useRoute()

</script>

<template>
    <div id="opportunity_list">
        <div class="search_add_filtre">
            <div class="search_div">
                <form @submit.prevent="">
                    <SearchComponent :type="'search'" :width="''" :border="'none'" :search="true" :bottom="'0'"></SearchComponent>
                </form>
            </div>
            <div class="inner_page" :class="{active_archive_link: routes.path.includes('/opportunites-archive-list')}">
                <RouterLink :to="{name: 'opportunites-archive-list'}">Opportunités</RouterLink>
            </div>
            <div class="inner_page" :class="{active_archive_link: routes.path.includes('/prospects-archive-list')}">
                <RouterLink :to="{name: 'prospects-archive-list'}">Prospects</RouterLink>
            </div>
            <div class="add_filtre">
                <div class="filtre">
                    <ButtonComponent :bgcolor="'var(--white)'" :bottom="'0'"  :slim="true"  :bordered="true">
                        <span v-html="FilterIcon"></span> Filtrer
                    </ButtonComponent>
                </div>
            </div>
        </div>
        <RouterView></RouterView>
    </div>
</template>

<style scoped>
    #opportunity_list{
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
    .active_archive_link a{
        color: var(--red);
        border-bottom: 2px solid var(--red);
    }
</style>