<script setup>
    
</script>

<template>
    <section id="mon_profil">
        <div class="myprofil_navbar">
            <slot name="sidebar"></slot>
        </div>
        <div class="myprofil_container">
            <slot name="container"></slot>
        </div>
    </section>
</template>

<style scoped>
    #mon_profil{
        box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        padding: 20px;
        display: flex;
        width: 100%;
    }
    .myprofil_navbar{
        padding: 0 20px;
        width: 290px;
    }
    .myprofil_container{
        display: flex;
        flex-direction: column;
        width: calc(100% - 290px);
    }
    @media screen and (max-width: 1300px) {
        #mon_profil{
            box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.3);
            border-radius: 10px;
            padding: 20px;
            display: flex;
            flex-direction: column;
        }
        .myprofil_navbar{
            padding: 0 20px;
            width: 100%;
        }
        .myprofil_container{
            width: 100%;
            /* outline: 1px solid red; */
        }
        @media screen and (max-width: 600px) {
            #mon_profil{
                box-shadow: none;
                border-radius: 0;
                border-top: 1px solid var(--grey);
                padding: 0px;
                display: flex;
                width: 100%;
            }
        }
    }
</style>