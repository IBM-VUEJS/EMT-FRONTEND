<script setup>
import { useWindowSize } from '@vueuse/core';
import { ref, onMounted } from 'vue';
    const isMobile = ref(false)
    const showNavigation = ref(false)
    const props = defineProps(
        {
            option: String,
            font_size: String,
            navigation: Boolean
        }
    )
    
    onMounted(() => {
        const { width } = useWindowSize()
        if(width.value < 1000)
        {
            isMobile.value = true
        }
    })

</script>

<template>
    <div :class="navigation ? 'container_topbar_menu' : 'container_topbar_menu2'">
        <template v-if="navigation">
            <template v-if="isMobile">
                <div class="ismobile_option">
                    <div class="ismobile">
                        <div class="navigation" v-if="showNavigation">
                            <slot name="navigation"></slot>
                        </div>
                        <div class="current_page_option">
                            <div class="container_topbar_menu_text" :style="{fontSize: font_size}">
                                <slot name="current_page"></slot>
                            </div>
                            <div class="option" v-if="option !== null">
                                &gt;&gt; {{ option }}
                            </div>
                        </div>
                    </div>
                    <div class="options" v-if="isMobile" @click="showNavigation = !showNavigation">
                        <div>
                            <template v-if="showNavigation">
                                <i class="bi bi-chevron-bar-up"></i>
                            </template>
                            <template v-else>
                                <i class="bi bi-chevron-bar-down"></i>
                            </template>
                        </div>
                    </div>
                </div>
            </template>
            <template v-else>
                <div class="navigation">
                    <slot name="navigation"></slot>
                </div>
                <div class="current_page_option">
                    <div class="container_topbar_menu_text" :style="{fontSize: font_size}">
                        <slot name="current_page"></slot>
                    </div>
                    <div class="option" v-if="option !== null">
                        &gt;&gt; {{ option }}
                    </div>
                </div>
            </template>
        </template>
        <template v-else>
            <div class="current_page_option2">
                <div class="container_topbar_menu_text" :style="{fontSize: font_size}">
                    <slot name="current_page"></slot>
                </div>
                <div class="option2" v-if="option !== null">
                    &gt;&gt; {{ option }} 
                </div>
            </div>
        </template>
    </div>
</template>

<style scoped>
    .container_topbar_menu2{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        min-height: 40px;
    }
    .container_topbar_menu{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 40px;
    }
    .current_page_option{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .current_page_option2{
        display: flex;
        align-items: center;
        justify-content: end;
        width: 100%;
    }
    .container_topbar_menu_text{
        font-weight: 300;
        padding: 1px 5px 1px 0;
        border-right: 1px solid var(--black);
        letter-spacing: 1px;
    }
    .option{
        text-align: center;
        align-items: center;
    }
    .option2{
        text-align: center;
        align-items: center;
    }
    @media screen and (max-width: 1000px) {
        .container_topbar_menu2{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column-reverse;
        }
        .container_topbar_menu{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column-reverse;
        }
        .navigation{
            display: flex;
            align-items: center;
            justify-content: start;
            flex-direction: column;
        }
        .current_page_option{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            /* border-bottom: 1px solid var(--black); */
            margin-bottom: 5px;
        }
        .current_page_option2{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
        }
        .ismobile_option{
            display: flex;
            align-items: center;
            justify-content: start;
            flex-direction: column;
            gap: 10px;
        }
        .ismobile{
            width: 100%;
            border-radius: 5px;
            padding: 0 5px;
            cursor: pointer;
            box-shadow: var(--shadow-light);
            display: flex;
            flex-direction: column-reverse;
        }
        .options{
            position: relative;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }
        .options div{
            font-size: 1.2rem;
            animation: options_down_arrow 2s 3s ease-in-out infinite;
            position: absolute;
            height: 30px;
            width: 60px;
            text-align: center;
            align-content: center;
        }
        @keyframes options_down_arrow {
            0%{
                top: 0px;
                /* border-radius: 50%; */
            }
            50%{
                top: 0px;
                border-radius: 5px;
                box-shadow: var(--shadow-light);
            }
            100%{
                top: 0;
            }
        }
    }
</style>