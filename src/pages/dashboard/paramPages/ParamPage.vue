<script setup>
import ParamComponent from '@/components/dashboard/container/param/paramComponent.vue';
import NavigationButtonComponent from '@/components/dashboard/navigationbar/NavigationButtonComponent.vue';
import ParamContainerComponent from '@/components/dashboard/navigationbar/param/ParamContainerComponent.vue';
import paramsButtons from '@/components/dashboard/navigationbar/param/ParamSidebarButtonNavigationLinks';
import ParamSidebarComponent from '@/components/dashboard/navigationbar/param/ParamSidebarComponent.vue';
import InnerContainerTopbarComponent from '@/components/dashboard/topbar/InnerContainerTopbarComponent.vue';
import InnerContainerTopbarMenuComponent from '@/components/dashboard/topbar/InnerContainerTopbarMenuComponent.vue';

</script>

<template>
    <InnerContainerTopbarComponent>
        <InnerContainerTopbarMenuComponent :option="'Mon Profil'" :font_size="'1.4rem'" :navigation="false">
            <template v-slot:current_page>
                Paramètre
            </template>
        </InnerContainerTopbarMenuComponent>
    </InnerContainerTopbarComponent>
    <ParamComponent>
        <template v-slot:sidebar>
            <ParamSidebarComponent>
                <div class="myprofile_div_image">
                    <div class="myprofile_div_image_container">
                        <img src="" alt="">
                    </div>
                    <div class="camera">
                        <i class="bi bi-camera-fill" ></i>
                    </div>
                    <div class="container_topbar_menu">
                    </div>
                </div>
                <div class="param_container_sidebar_links">
                    <ul class="nav nav-pills flex-column">
                        <template v-for="link in paramsButtons">
                            <RouterLink :to="{name: link['path']}">
                                <NavigationButtonComponent :size="'.92rem'" :weight="'500'" :color="'var(--grey)'" :path="link['path']">
                                    <template v-slot:text>
                                        {{ link['libel'] }}
                                    </template>
                                </NavigationButtonComponent>
                            </RouterLink>
                        </template>
                    </ul>
                </div>
            </ParamSidebarComponent>
        </template>
        <template v-slot:container>
            <div class="username_text">
                <div class="username">MOHAMED Saphira</div>
                <p class="text">Vous pouvez mettre à jour vos informations en saisissant de nouvelles données</p>
            </div>
            <ParamContainerComponent>
                
            </ParamContainerComponent>
        </template>
    </ParamComponent>
</template>

<style scoped>
/* *{
    outline: 1px solid red;
} */
    .myprofile_div_image{
        width: 220px;
        height: 220px;
        background-color: var(--red);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        margin: 0 auto;
    }
    .myprofile_div_image_container{
        width: 205px;
        height: 205px;
        background-color: aliceblue;
        border-radius: 50%;
    }
    .param_container_sidebar_links{
        padding: 50px 20px 0 0;
        height: 80%;
        border-right: 1px solid var(--grey-light);
    }
    .camera{
        color: var(--white);
        background-color: var(--red);
        font-size: 1.4rem;
        position: absolute;
        bottom: 0;
        right: 30px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        text-align: center;
        align-content: center;
    }
    ul a{
        padding: 0px;
        margin-bottom: 5px;
    }
    .username_text{
        display: grid;
        grid-template-rows: 140px 1fr;
        width: 100%;
        height: 100%;
        padding-left: 100px;
    }
    .username{
        font-size: 1.4rem;
        font-weight: 500;
        align-content: end;
    }
</style>