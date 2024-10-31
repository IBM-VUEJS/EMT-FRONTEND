<script setup>
import InputComponent from '@/components/auth/form/InputComponent.vue';
import SelectComponent from '@/components/auth/form/SelectComponent.vue';
import TextareaComponent from '@/components/auth/form/TextareaComponent.vue';
import RedCircleArrowIcon from '@/components/icons/RedCircleArrowIcon';


</script>

<template>
    <div class="title_text">
        <div class="arrow_title">
            <div class="arrow">
                <RouterLink :to="{name: 'opportunity-list'}">
                    <span v-html="RedCircleArrowIcon"></span>
                </RouterLink>
            </div>
            <div class="title">
                <h3>Créer une nouvelle opportunité</h3>
            </div>
        </div>
        <div class="text">
            Opportunités  » Liste Prospets » Créer une opportunités
        </div>
    </div>
    <div class="form_red_descript_text">
        <div class="container">
            <div class="red_descript_text">
                <h4>Créer une opportunité</h4>
                <small>Remplissez ce formulaire pour créer une opportunité</small>
            </div>

            <div class="form">
                <div class="form_details_opportunity">
                    <h5>Détails de l'opportunité</h5>
                </div>
                <form class="inputs">
                    <div class="input">
                        <InputComponent :libel="'Nom de l\'opportunité'" :border="'1px solid var(--grey)'"></InputComponent>
                    </div>
                    <div class="double_inputs">
                        <div class="double_input">
                            <InputComponent :width="'100%'" :libel="'Nom de l\'opportunité'"  :border="'1px solid var(--grey)'"></InputComponent>
                        </div>
                        <div class="double_input">
                            <SelectComponent :bottom="'0'" :width="'100%'" :libel="'Nom de l\'opportunité'"  :border="'1px solid var(--grey)'"></SelectComponent>
                        </div>
                    </div>
                    <div class="input">
                        <InputComponent :width="'100%'" :libel="'Nom de l\'opportunité'"  :border="'1px solid var(--grey)'"></InputComponent>
                    </div>
                    <div class="input">
                        <InputComponent :width="'100%'" :libel="'Nom de l\'opportunité'"  :border="'1px solid var(--grey)'"></InputComponent>
                    </div>
                    <div class="input">
                        <InputComponent :width="'100%'" :libel="'Nom de l\'opportunité'"  :border="'1px solid var(--grey)'"></InputComponent>
                    </div>
                    <div class="input">
                        <InputComponent :width="'100%'" :libel="'Nom de l\'opportunité'"  :border="'1px solid var(--grey)'"></InputComponent>
                    </div>
                    <div class="input">
                        <InputComponent :width="'100%'" :libel="'Nom de l\'opportunité'"  :border="'1px solid var(--grey)'"></InputComponent>
                    </div>
                    <div class="input">
                        <InputComponent :width="'100%'" :libel="'Nom de l\'opportunité'"  :border="'1px solid var(--grey)'"></InputComponent>
                    </div>
                    <div class="input">
                        <InputComponent :width="'100%'" :libel="'Nom de l\'opportunité'"  :border="'1px solid var(--grey)'"></InputComponent>
                    </div>
                    <div class="textarea">
                        <TextareaComponent :width="'100%'" :libel="'Nom de l\'opportunité'"  :border="'1px solid var(--grey)'"></TextareaComponent>
                    </div>
                </form>
            </div>
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
    .inputs{
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        /* outline: 1px solid red; */
    }
    .input{
        min-height: 50px;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        /* outline: 1px solid red; */
    }
    .double_inputs{
        display: grid;
        grid-template-columns: 1fr 1fr;
        min-height: 50px;
        width: 100%;
    }
    .textarea{
        padding: 0 10px;
        display: grid;
        grid-template-columns: 1fr;
    }
</style>