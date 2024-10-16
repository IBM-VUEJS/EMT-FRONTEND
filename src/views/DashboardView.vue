<script setup>
    import SidebarComponent from '@/components/dashboard/sidebar/SidebarComponent.vue';
    import buttons from '@/components/dashboard/sidebar/ButtonNavigationComponent';
    import NaviationButtonComponent from '@/components/dashboard/sidebar/NaviationButtonComponent.vue';
    import { RouterLink } from 'vue-router';
</script>

<template>
    <div id="dashboard">
        <SidebarComponent>
            <template v-slot:content>
                <template v-for="button in buttons">
                    <RouterLink :to="button['path']">
                        <NaviationButtonComponent >
                            <template v-slot:text>
                                {{ button['libel'] }}
                            </template>
                        </NaviationButtonComponent>
                    </RouterLink>
                </template>
            </template>
        </SidebarComponent>
    </div>
</template>

<style scoped>
    #dashboard{
        display: grid;
        grid-template-columns: 300px 1fr;
        width: 100%;
        height: 100%;
    }
</style>