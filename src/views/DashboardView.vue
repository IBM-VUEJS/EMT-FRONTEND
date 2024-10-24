<script setup>
    import SidebarComponent from '@/components/dashboard/navigationbar/SidebarComponent.vue';
    import buttons from '@/components/dashboard/navigationbar/DashboardButtonNavigationLinks';
    import NavigationButtonComponent from '@/components/dashboard/navigationbar/NavigationButtonComponent.vue';
    import TopbarComponent from '@/components/dashboard/topbar/TopbarComponent.vue';
    import ContainerComponent from '@/components/dashboard/container/ContainerComponent.vue';
    import DarkBackgroundModals from '@/components/modals/DarkBackgroundModals.vue';
    import DefineNewPasswordModal from '@/components/modals/DefineNewPasswordModal.vue';
    import { RouterLink } from 'vue-router';
    import { inject, provide, ref } from 'vue';
    import AddNewOpportunityForm from '@/components/form/opportunity/AddNewOpportunityForm.vue';
    import ShowOpportunityForm from '@/components/form/opportunity/ShowOpportunityForm.vue';
    import UpdateOpportunityForm from '@/components/form/opportunity/UpdateOpportunityForm.vue';
    import ShowProspectForm from '@/components/form/opportunity/prospect/ShowProspectForm.vue';


    const show = ref(true)
    const showAddOpportuinity = ref(false)
    const showDefinePasswordForm = ref(true)
    const showOpportunity  = ref(false)
    const showUpdateOpportunity  = ref(false)
    const showProspect = ref(false)
    const opportunity_to_show  = ref([])

    //Affichage du fond noir
    provide('show', show)

    //Affichage du formulaire d'ajout d'opportunité
    provide('showAddOpportuinity', showAddOpportuinity)

    //Affichage du formulaire de redefinition du mot de passe
    provide('showDefinePasswordForm', showDefinePasswordForm)

    //formulaire d'affichage d'une opportunité
    provide('showOpportunity', showOpportunity)

    //formulaire de mise à jour d'une opportunité
    provide('showUpdateOpportunity', showUpdateOpportunity)

    provide('showProspect', showProspect)

    provide('opportunity_to_show', opportunity_to_show)


</script>

<template>
    <div id="dashboard">
        <DarkBackgroundModals v-if="show">
            
        </DarkBackgroundModals>

        <div class="modals" v-if="showDefinePasswordForm">
            <DefineNewPasswordModal></DefineNewPasswordModal>
        </div>

        <div class="modals" v-if="showAddOpportuinity">
            <AddNewOpportunityForm></AddNewOpportunityForm>
        </div>

        <div class="modals" v-if="showOpportunity">
            <ShowOpportunityForm></ShowOpportunityForm>
        </div>

        <div class="modals" v-if="showUpdateOpportunity">
            <UpdateOpportunityForm></UpdateOpportunityForm>
        </div>

        <div class="modals" v-if="showProspect">
            <ShowProspectForm></ShowProspectForm>
        </div>

        <SidebarComponent>
            <template v-slot:content>
                <template v-for="button in buttons">
                    <RouterLink :to="{name: button['path']}">
                        <NavigationButtonComponent :path="button['path']" :svg="button['icon']">
                            <template v-slot:svg>
                                <span v-html="button['icon']" class="svg_icon"></span>
                            </template>
                            <template v-slot:text>
                                {{ button['libel'] }}
                            </template>
                        </NavigationButtonComponent>
                    </RouterLink>
                </template>
            </template>
        </SidebarComponent>
        <div class="section">
            <TopbarComponent></TopbarComponent>
            <ContainerComponent></ContainerComponent>
        </div>
    </div>
</template>

<style >
/* *{
    outline: 1px solid red;
} */
    #dashboard{
        display: grid;
        grid-template-columns: 240px 1fr;
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
    }
    .section{
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 60px calc(100vh - 60px);
        overflow: hidden;
    }
    .modals{
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 10;
    }
</style>