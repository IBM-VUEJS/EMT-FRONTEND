<script setup>
import ParamComponent from '@/components/dashboard/container/param/paramComponent.vue';
import ParamSidebarComponent from '@/components/dashboard/sidebar/param/ParamSidebarComponent.vue';
import InnerContainerTopbarComponent from '@/components/dashboard/topbar/InnerContainerTopbarComponent.vue';
import InnerContainerTopbarMenuComponent from '@/components/dashboard/topbar/InnerContainerTopbarMenuComponent.vue';

    
</script>

<template>
    <InnerContainerTopbarComponent>
        <InnerContainerTopbarMenuComponent :option="'Mon Profil'" :font_size="'1.6rem'">Paramètre</InnerContainerTopbarMenuComponent>
    </InnerContainerTopbarComponent>
    <ParamComponent>
        <ParamSidebarComponent>
            fffhhhh
        </ParamSidebarComponent>
    </ParamComponent>
</template>

<style scoped>
    .container_topbar_menu{

    }
</style>