<script setup>
    const props = defineProps(
        {
            toggle: Boolean
        }
    )
</script>

<template>
    <Transition name="option">
        <div class="user_options" v-if="toggle">
            <div class="my_profil">
                <!-- PAGE GESTION DE PROFIL -->
                <RouterLink :to="{name: 'principal'}">
                    <div class="manage">
                        <i class="bi bi-person-circle"></i>
                        <span class="text">Mon Profil</span>
                    </div>
                </RouterLink>
            </div>
            <div class="logout">
                <!-- DECONNEXION RETOUR SUR LA PAGE DE CONNEXION -->
                <RouterLink :to="{name: 'login'}"> 
                    <div class="manage">
                        <i class="bi bi-door-open"></i>
                        <span class="text">Déconnexion</span>
                    </div>
                </RouterLink>
            </div>
        </div>
    </Transition>
</template>

<style>
    .option-enter-active,
    .option-leave-active {
        transition: opacity 0.8s ease;
    }

    .option-enter-from,
    .option-leave-to {
        opacity: 0;
    }
    .user_options{
        top: 100%;
        right: 5px;
        padding: 10px 20px;
        width: 180px;
        height: 80px;
        background-color: white;
        box-shadow: 2px 5px 10px 1px rgba(0, 0, 0, 0.25);
        border-radius: 0 0 6px 6px;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 15px;
        z-index: 100;
    }  
    .user_options div, .user_options div a{
        width: 100%;
    }
    .manage{
        display: flex;
        gap: 15px;
    }

    .my_profil a:hover, .logout a:hover{
        color: red;
    }

</style>