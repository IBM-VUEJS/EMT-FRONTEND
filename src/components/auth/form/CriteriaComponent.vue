<script setup>
    
</script>

<template>
    <div class="password_criteria">
        <div class="criteria">
            <span class="green_circle"></span>
            <span class="text">8 caractères au moins</span>
        </div>
        <div class="criteria">
            <span class="green_circle"></span>
            <span class="text">1 lettre majuscule au moins</span>
        </div>
        <div class="criteria">
            <span class="green_circle"></span>
            <span class="text">1 lettre minuscule au moins</span>
        </div>
        <div class="criteria">
            <span class="green_circle"></span>
            <span class="text">Catactère spécial (!,$,%,&,@,*,...)</span>
        </div>
    </div>
</template>

<style scoped>

.password_criteria{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 11fr;
        width: 100%;
        height: 70px;
    }
    .criteria{
        display: flex;
        align-items: center;
        gap: 15px;
    }
    .green_circle{
        width: 10px;
        height: 10px;
        background-color: var(--green);
        display: block;
        border-radius: 50%;
    }
    .text{
        font-size: .8rem;
    }
</style>