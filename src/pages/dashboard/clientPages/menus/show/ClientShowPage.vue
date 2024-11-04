<script setup>
import InputComponent from '@/components/auth/form/InputComponent.vue';
import SelectComponent from '@/components/auth/form/SelectComponent.vue';
import ButtonComponent from '@/components/auth/form/ButtonComponent.vue';
import TextareaComponent from '@/components/auth/form/TextareaComponent.vue';
import RedCircleArrowIcon from '@/components/icons/RedCircleArrowIcon';
import DownloadIcon from '@/components/icons/DownloadIcon';
import ResourcePersonIcon from '@/components/icons/ResourcePersonIcon';


</script>

<template>
    <div class="title_text">
        <div class="arrow_title">
            <div class="arrow">
                <RouterLink :to="{name: 'client-list'}">
                    <span v-html="RedCircleArrowIcon"></span>
                </RouterLink>
            </div>
            <div class="title">
                <h3>Ajouter un nouveau Client</h3>
            </div>
        </div>
        <div class="text">
            Clients  » Liste des clients » Détails Client
        </div>
    </div>
</template>

<style scoped>
    .arrow_title{
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .title h3{
        font-weight: 300;
    }
    .text{
        padding-left: 40px;
    }
    .form_red_descript_text{
        width: 100%;
        display: flex;
        align-items: start;
        justify-content: center;
    }
    .container{
        width: 65%;
    }
    .red_descript_text{
        width: 100%;
        height: 100px;
        background: rgba(177, 0, 0, 1);
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 12px;
    }
    .form{
        margin-top: 20px;
        border: 1px solid rgba(237, 237, 237, 1);
        background-color: var(--white);
        border-radius: 12px;
        padding: 25px  10px 10px 10px;
    }
    .clients{
        padding: 15px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        /* outline: 1px solid red; */
    }
    .input_client_info{
        min-height: 50px;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        /* outline: 1px solid red; */
    }
    .double_clients_inputs{
        display: grid;
        grid-template-columns: 60px 1fr;
        min-height: 50px;
        width: 100%;
        gap: 10px;
    }
    .textarea{
        /* padding: 0 10px; */
        display: grid;
        grid-template-columns: 1fr;
    }
    .resource_person{
        padding: 15px 0;
        display: flex;
        align-items: center;
    }
    .cancel_save{
        display: flex;
        align-items: center;
        justify-content: end;
        gap: 20px;
        padding: 25px 10px 0px 10px;
    }
</style>