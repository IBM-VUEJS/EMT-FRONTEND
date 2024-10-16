<script setup>
import UserOptionsModal from '@/components/modals/UserOptionsModal.vue';
    import { ref } from 'vue';
    const toggle = ref(false)
    const props = defineProps(
        {

        }
    )
</script>

<template>
    <div id="topbar">
        <div class="userInformations">
            <div class="bell_icon">
                <i class="bi bi-bell"></i>
                <div class="notifications">9+</div>
            </div>

            <div class="username_profil">
                <div class="username">
                    <div class="name">Michel SARDOU</div>
                    <div class="role">Administrateur</div>
                </div>
                <div class="profil" @click="toggle = !toggle">
                    <i class="bi bi-person"></i>
                    <div class="active_profil"></div>
                </div>
            </div>
        </div>
        <UserOptionsModal :toggle="toggle"></UserOptionsModal>
    </div>
</template>

<style scoped>
    #topbar{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: end;
        padding: 0 25px;
        box-shadow: 5px 4px 10px 1px rgba(0, 0, 0, 0.2);
        position: relative;
    }
    .userInformations, .username_profil{
        display: flex;
        align-items: center;
        justify-content: end;
    }
    .userInformations{
        gap: 25px;
        position: relative;
    }
    .bell_icon{
        font-size: 1.4rem;
        position: relative;
    }
    .notifications{
        font-size: .7rem;
        font-weight: 700;
        position: absolute;
        background-color: rgb(241, 28, 28);
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        color: white;
        top: -2px;
        right: -7px;
    }
    .name{
        font-size: 1rem;
    }
    .name, .role{
        text-align: end;
    }
    .role{
        font-size: .8rem;
        color: grey;
    }
    .username_profil{
        gap: 10px;
    }
    .profil{
        width: 45px;
        height: 45px;
        background-color: rgb(212, 212, 212);
        font-size: 1.4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        position: relative;
        cursor: pointer;
    }
    .active_profil{
        width: 10px;
        height: 10px;
        background-color: green;
        position: absolute;
        bottom: 0;
        right: 0;
        border-radius: 50%;
    }
</style>