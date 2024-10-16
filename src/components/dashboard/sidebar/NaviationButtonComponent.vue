<script setup>
    const props = defineProps(
        {
            icon: String,
            path: String,
        }
    )
</script>

<template>
    <div>
        <li class="nav-item">
            <div class="button">
                <span class="icon">
                    <i :class="icon"></i>
                </span>
                <span class="text">
                    <slot name="text"></slot>
                </span>
            </div>
        </li>
    </div>
</template>

<style>
    
</style>