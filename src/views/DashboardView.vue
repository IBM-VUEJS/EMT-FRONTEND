<script setup>
    import SidebarComponent from '@/components/dashboard/sidebar/SidebarComponent.vue';
    import buttons from '@/components/dashboard/sidebar/DashboardButtonNavigationLinks';
    import NavigationButtonComponent from '@/components/dashboard/sidebar/NavigationButtonComponent.vue';
    import TopbarComponent from '@/components/dashboard/topbar/TopbarComponent.vue';
    import ContainerComponent from '@/components/dashboard/container/ContainerComponent.vue';
    import { RouterLink } from 'vue-router';
</script>

<template>
    <div id="dashboard">
        <SidebarComponent>
            <template v-slot:content>
                <template v-for="button in buttons">
                    <RouterLink :to="button['path']">
                        <NavigationButtonComponent :path="button['path']" :icon="button['icon']">
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

<style>
/* *{
    outline: 1px solid red;
} */
    #dashboard{
        display: grid;
        grid-template-columns: 280px 1fr;
        width: 100%;
        height: 100%;
    }
    .section{
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 80px 1fr;
    }
</style>