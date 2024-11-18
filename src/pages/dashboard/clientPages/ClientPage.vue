<script setup>
    import OpportunityContainerNavigationComponent from '@/components/dashboard/container/opportunity/OpportunityContainerNavigationComponent.vue';
    import clientButtons from '@/components/dashboard/navigationbar/client/ClientButtonNavigationLinks';
    import OpportunityComponent from '@/components/dashboard/container/opportunity/OpportunityComponent.vue';
    import InnerContainerTopbarComponent from '@/components/dashboard/topbar/InnerContainerTopbarComponent.vue';
    import InnerContainerTopbarMenuComponent from '@/components/dashboard/topbar/InnerContainerTopbarMenuComponent.vue';
    import OpportunityNavigationLinks from '@/components/dashboard/container/opportunity/OpportunityNavigationLinks.vue';
    import { provide, ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';

    const dynamic_option = ref("Vue d'ensemble")
    const show_inner_top_bar = ref(true)
    const route = useRoute();
    const route_name = route.name
    const routes_names = clientButtons.filter((client) => {
        return client.path
    })

    onMounted(() => {
        routes_names.forEach((name) => {
            if (name === route_name) {
                show_inner_top_bar.value = false
            }
        })
    })

    const changeOption = (option) => {
        dynamic_option.value = option
        console.log(dynamic_option.value);
        provide('dynamic_option', dynamic_option.value)
    }
</script>

<template>
    <template v-if="show_inner_top_bar">
        <InnerContainerTopbarComponent>
            <InnerContainerTopbarMenuComponent :option="dynamic_option" :font_size="'1.4rem'" :navigation="true">
                <template v-slot:navigation>
                    <OpportunityContainerNavigationComponent>
                        <template v-for="link in clientButtons">
                            <RouterLink :to="{name: link['path']}">
                                <OpportunityNavigationLinks :path="link['path']" @click="changeOption(link['libel'])">
                                    {{ link['libel'] }}
                                </OpportunityNavigationLinks>
                            </RouterLink>
                        </template>
                    </OpportunityContainerNavigationComponent>
                </template>
                <template v-slot:current_page>
                    Clients
                </template>
            </InnerContainerTopbarMenuComponent>
        </InnerContainerTopbarComponent>
    </template>
    <OpportunityComponent>
        <template v-slot:container>
            <RouterView></RouterView>
        </template>
    </OpportunityComponent>
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
        height: 525px;
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