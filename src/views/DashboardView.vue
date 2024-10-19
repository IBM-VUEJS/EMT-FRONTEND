<script setup>
    import SidebarComponent from '@/components/dashboard/sidebar/SidebarComponent.vue';
    import buttons from '@/components/dashboard/sidebar/DashboardButtonNavigationLinks';
    import NavigationButtonComponent from '@/components/dashboard/sidebar/NavigationButtonComponent.vue';
    import TopbarComponent from '@/components/dashboard/topbar/TopbarComponent.vue';
    import ContainerComponent from '@/components/dashboard/container/ContainerComponent.vue';
    import DarkBackgroundModals from '@/components/modals/DarkBackgroundModals.vue';
    import DefineNewPasswordModal from '@/components/modals/DefineNewPasswordModal.vue';
    import { RouterLink } from 'vue-router';
    import { inject, provide, ref } from 'vue';
    let show = ref(true)
    provide('show', show)
</script>

<template>
    <div id="dashboard">
        <DarkBackgroundModals v-if="show">
            <DefineNewPasswordModal></DefineNewPasswordModal>
        </DarkBackgroundModals>
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
        grid-template-columns: 280px 1fr;
        width: 100%;
        height: 100%;
        position: relative
    }
    .section{
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 80px 1fr;
    }

</style>