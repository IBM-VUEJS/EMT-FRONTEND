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
                <RouterLink :to="''">
                    <div class="manage">
                        <i class="bi bi-person-circle"></i>
                        <span class="text">Mon Profil</span>
                    </div>
                </RouterLink>
            </div>
            <div class="logout">
                <RouterLink :to="''">
                    <div class="manage">
                        <i class="bi bi-person-circle"></i>
                        <span class="text">Mon Profil</span>
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
        width: 150px;
        height: 80px;
        background-color: white;
        box-shadow: 2px 5px 10px 1px rgba(0, 0, 0, 0.25);
        border-radius: 0 0 6px 6px;
        position: absolute;
    }  
    .manage{
        display: flex;
        gap: 15px;
    }

    .my_profil a:hover{
        color: red;
    }

</style>