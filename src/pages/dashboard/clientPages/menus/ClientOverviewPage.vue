<script setup>
import ButtonComponent from '@/components/form/ButtonComponent.vue';
import SearchComponent from '@/components/form/SearchComponent.vue';
import ActifClientIcon from '@/assets/icons/ActifClientIcon';
import ActivityViewMoreRightIcon from '@/assets/icons/ActivityViewMoreRightIcon';
import InactifClientIcon from '@/assets/icons/InactifClientIcon';
import PaginationLeftArrow from '@/assets/icons/PaginationLeftArrow';
import PaginationRightArrow from '@/assets/icons/PaginationRightArrow';
import RightArrowIcon from '@/assets/icons/RightArrowIcon';
import { ref, onMounted } from 'vue';

    const current_year = ref(2024)
    const total_client_money = ref(428900000)
    const selected_year = ref(current_year)
    const first_list = ref(true)
    const activities = ref([
        {
            id: 'banqueFinance',
            percent: 72,
            libel: 'Banque Finance',
            price: '156.000.000F CFA',
            color: 'red'
        },
        {
            id: 'assurance',
            percent: 48,
            libel: 'Assurance',
            price: '100.000.000F CFA',
            color: 'red'
        },
        {
            id: 'it',
            percent: 28,
            libel: 'IT',
            price: '92.000.000F CFA',
            color: 'red'
        },
        {
            id: 'ia',
            percent: 15,
            libel: 'IA',
            price: '56.000.000F CFA',
            color: 'red'
        },
    ])

    const countries = ref([
        {
            code: 'BJ',
            name: 'BENIN',
            price: '120.000.000F CFA',
            number: 15
        },
        {
            code: 'FR',
            name: 'FRANCE',
            price: '100.000.000F CFA',
            number: 9
        },
        {
            code: 'TG',
            name: 'TOGO',
            price: '78.000.000F CFA',
            number: 8
        },
        {
            code: 'CA',
            name: 'CANADA',
            price: '50.000.000F CFA',
            number: 5
        },
        {
            code: 'BF',
            name: 'BURKINA FASO',
            price: '25.000.000F CFA',
            number: 7
        },
    ])

    const createProgressbarByActivity = () => {
            activities.value.forEach((activity) => {
                var options = {
                    chart: {
                        type: "radialBar"
                    },
                    
                    series: [activity.percent],
                    
                    plotOptions: {
                        radialBar: {
                        hollow: {
                            margin: 0,
                            size: "100%"
                        },
                        track: {
                            background: activity.color,
                        },
                        dataLabels: {
                            showOn: "always",
                            name: {
                                offsetY: 0,
                                show: false,
                                color: "#888",
                                fontSize: "13px"
                            },
                            value: {
                                color: "#111",
                                fontSize: "1rem",
                                show: true,
                                offsetY: 6,
                            }
                        }
                        }
                    },

                    stroke: {
                        lineCap: "round",
                    },
                    labels: [""]
                };

                var chart = new ApexCharts(document.querySelector(`#${activity.id}`), options);

                chart.render();
            })
    }

    const topTenClients = ref(
        [
           [
           {
                name: 'MTN',
                money: '92.000.000 FCFA',
                project: '05'
            },
            {
                name: 'MTN',
                money: '92.000.000 FCFA',
                project: '05'
            },
            {
                name: 'MTN',
                money: '92.000.000 FCFA',
                project: '05'
            },
            {
                name: 'MTN',
                money: '92.000.000 FCFA',
                project: '05'
            },
            {
                name: 'MTN',
                money: '92.000.000 FCFA',
                project: '05'
            },
           ],
           [
           {
                name: 'SBIN',
                money: '44900.000 FCFA',
                project: '03'
            },
            {
                name: 'SBIN',
                money: '2.000.000 FCFA',
                project: '15'
            },
            {
                name: 'SBIN',
                money: '765.000.000 FCFA',
                project: '11'
            },
            {
                name: 'SBIN',
                money: '92.000.000 FCFA',
                project: '21'
            },
            {
                name: 'SBIN',
                money: '654.000.000 FCFA',
                project: '08'
            },
           ]
        ]
    )

    onMounted(() => {
        createProgressbarByActivity();
    })
</script>

<template>
    <div class="client_container">
        <div class="left_client_container">
            <div class="statistics">
                <div class="stats1 box money_stats">
                    <h4>Total chiffre d'affaires</h4>
                    <small>{{ current_year }}</small>
                    <div class="total_currency">{{ total_client_money.toLocaleString()}} F CFA</div>
                    <ButtonComponent :slim="true">
                        Consulter
                        <span v-html="RightArrowIcon"></span>
                    </ButtonComponent>
                </div>
                <div class="stats2 box">
                    <div class="text_select_year">
                        <div class="text_statut">Nombre de clients par statut</div>
                        <div class="select_year">
                            <span class="selected_year_span">
                                {{ selected_year }}
                            </span>
                            <select name="" class="select" v-model="selected_year">
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                            </select>
                        </div>
                    </div>
                    <div class="number_client_by_activity">
                        <div class="number_client_by_activity_child">
                            <div class="icon_number_text">
                            <div class="icon">
                                <span v-html="ActifClientIcon"></span>
                            </div>
                            <div class="number_text">
                                <div class="number">142</div>
                                <div class="text_number">Actif</div>
                            </div>
                        </div>
                        <div class="icon_number_text">
                            <div class="icon">
                                <span v-html="InactifClientIcon"></span>
                            </div>
                            <div class="number_text">
                                <div class="number">21</div>
                                <div class="text_number">Inactif</div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="search_top_client">
                <div class="search_top_client_child">
                    <div class="text_search">
                        <div class="text">Top 10 clients</div>
                    </div>
                    <div class="search">
                        <input type="search" name="" id="" placeholder="Recherche">
                    </div>
                </div>

                <div class="top_client_child">
                    <div class="top_client_child_header">
                        <div class="client_name">CLIENT</div>
                        <div class="client_generated_money">CHIFFRE D'AFFAIRE</div>
                        <div class="client_project_number">NOMBRE DE PROJET</div>
                    </div>
                    <div class="top_client_child_body">
                       <template v-if="first_list">
                            <template v-for="client in topTenClients[0]">
                                <div class="client">
                                    <div class="image_name">
                                        <div class="image"></div>
                                        <div class="name">
                                            {{ client.name }}
                                        </div>
                                    </div>
                                    <div class="money_generated">{{ client.money }}</div>
                                    <div class="project_number">{{ client.project }}</div>
                                </div>
                            </template>
                       </template>
                       <template v-else>
                            <template v-for="client in topTenClients[1]">
                                <div class="client">
                                    <div class="image_name">
                                        <div class="image"></div>
                                        <div class="name">
                                            {{ client.name }}
                                        </div>
                                    </div>
                                    <div class="money_generated">{{ client.money }}</div>
                                    <div class="project_number">{{ client.project }}</div>
                                </div>
                            </template>
                       </template>
                    </div>
                    <div class="top_client_child_footer">
                        <div class="current_page">
                            Page <span v-if="first_list">1</span> <span v-else>2</span>/2
                        </div>
                        <div class="pagination">
                            <div class="pagination_composant">
                                <div class="left_arrow"  @click="first_list = !first_list">
                                    <span v-html="PaginationLeftArrow"></span>
                                </div>
                                <div class="pages">
                                    <div class="page_link" :class="{active_link: first_list === true}" @click="first_list = !first_list">1</div>
                                    <div class="page_link"  :class="{active_link: first_list === false}" @click="first_list = !first_list">2</div>
                                </div>
                                <div class="right_arrow"  @click="first_list = !first_list">
                                    <span v-html="PaginationRightArrow"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="right_client_container">
            <div class="class_by_activity right_client_container_child box">
                <h4 class="class_by_activity_title">Répartition par Secteur d'activités</h4>
                <div class="class_by_activity_content">
                    <template v-for="activity in activities">
                        <div class="class_by_activity_content_child">
                            <div class="circle_libel_price">
                                <div :id="activity.id" class="circular_progress_bar"></div>
                                <div class="libel_price">
                                    <div class="libel">{{ activity.libel }}</div>
                                    <div class="price">{{ activity.price }}</div>
                                </div>
                            </div>
                            <div class="view_more">
                                <RouterLink to="">
                                    <span v-html="ActivityViewMoreRightIcon"></span>
                                </RouterLink>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
            <div class="class_by_country right_client_container_child box">
                <h4 class="class_by_activity_title">Répartition par pays</h4>
                <div class="class_by_country_child2">
                    <template v-for="country in countries">
                        <div class="flag_libel_price_number">
                            <div class="flag_libel_price">
                                <div class="flag">
                                    <img :src="'https://flagsapi.com/'+country.code+'/flat/32.png'" class="country_flags">
                                </div>
                                <div class="libel_price">
                                    <div class="libel">{{ country.name }}</div>
                                    <div class="price">{{ country.price }}</div>
                                </div>
                            </div>
                            <div class="number">{{ country.number }}</div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* *{
    outline: 1px solid red;
} */
    h4{
        margin: 0;
        font-weight: 400;
        font-size: 1.125rem;
    }
    small{
        font-size: 0.9375rem;
    }
    .client_container{
        display: grid;
        grid-template-columns: 3fr 1fr;
        width: 100%;
        height: calc(100% - 40px);
        gap: 15px;
    }
    .left_client_container{
        display: flex;
        flex-direction: column;
        gap: 15px;
        width: 100%;
        height: 100%;
    }
    .statistics{
        width: 100%;
        height: 25%;
        /* min-height: 200px; */
        display: flex;
        gap: 15px;
    }
    .stats1{
        width: 50%;
    }
    .stats2{
        width: 50%;
    }
    .money_stats{
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
    }
    .total_currency{
        font-size: 1.5rem;
        color: var(--text-purple);
    }
    .search_top_client{
        width: 100%;
        height: 75%;
    }
    .right_client_container{
        display: flex;
        flex-direction: column;
        gap: 15px;
        width: 100%;
        height: 100%;
    }
    .right_client_container_child{
        width: 100%;
        height: 50%;
        overflow-x: hidden;
        overflow-y: scroll
    }
    .text_select_year{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .text_statut{
        font-size: 1.125rem;
    }
    .selected_year{
        width: 100px;
        outline: 1px solid red;
    }
    .selected_year_span{
        border-radius: 4px 0 0 4px;
        padding: 2.5px 10px;
        background-color: lightgrey;
    }
    .selected_year:focus-within{
        outline: 1px solid grey;
    }
    .select{
        width: 20px;
        height: 25px;
        border: none;
        background-color: lightgrey;
        border-left: 1px solid grey;
    }
    .select:focus{
        border: none;
        outline: none;
    }
    .number_client_by_activity{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 130px;
        padding: 0 10px;
    }
    .number_client_by_activity_child{
        width: 80%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .icon_number_text{
        display: flex;
        width: 100px;
    }
    .search_top_client{
        display: flex;
        flex-direction: column;
        box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        background-color: var(--white);
    }
    .search_top_client_child{
        border-bottom: 1px solid lightgrey;
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .text{
        font-size: 1.25rem;
        font-weight: 500;

    }
    .search input[type="search"] {
        padding: 5px 10px;
        border: 1px solid lightgrey;
        border-radius: 5px;
    }
    .search input[type="search"]:focus{
        border: 1px solid grey;
        outline: none;
    }
    .top_client_child{
        height: auto;
    }
    .top_client_child_header{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        padding: 15px 20px;
        border-bottom: 1px solid lightgrey;
    }
    .client_name{
        display: flex;
        align-items: center;
        justify-content: start;
    }
    .client_generated_money{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .client_project_number{
        display: flex;
        align-items: center;
        justify-content: end;
    }
    .client{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        padding: 15px 20px;
        border-bottom: 1px solid lightgrey;
    }
    .image_name{
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .image{
        width: 30px;
        height: 30px;
        background-color: rgb(213, 211, 211);
        border-radius: 50%;
    }
    .money_generated{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .project_number{
        display: flex;
        align-items: center;
        justify-content: end;
    }
    .top_client_child_footer{
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .current_page{
        color: var(--grey);
    }
    .pagination{
        display: flex;
        align-items: center;
        justify-content: end;
    }
    .pagination_composant{
        display: flex;
        gap: 10px;
    }
    .pages{
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 15px;
        gap: 10px
    }
    .active_link{
        background-color: var(--red) !important;
        color: var(--white) !important;
    }
    .page_link{
        width: 30px;
        height: 30px;
        border-radius: 50px;
        align-content: center;
        text-align: center;
        color: var(--black);
        background-color: lightgrey;
        cursor: pointer;
        transition: all .1s .1s ease-in-out;
    }
    .page_link:hover{
        background-color: var(--red);
        color: var(--white);
    }
    .right_arrow, .left_arrow{
        cursor: pointer;
    }
    .class_by_activity_content{
        display: flex;
        flex-direction: column;
        padding-top: 10px;
        gap: 10px;
    }
    .class_by_activity_content_child{
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        /* outline: 1px solid red; */
    }
    .circular_progress_bar{
        width: 75px !important;
    }
    .circle_libel_price{
        display: flex;
        align-items: center;
        gap: 0px;
    }
    .libel{
        font-size: 1rem;
    }
    .price{
        font-size: .85rem;
    }
    .class_by_country_child2{
        padding-top: 2px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .flag_libel_price_number{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
    .flag_libel_price{
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .country_flags{
        border-radius: 5px;
    }
    @media screen and (max-width: 1100px) {
        .left_client_container{
            display: grid;
            grid-template-rows: 1fr 2fr;
        }
        .client_container{
            display: grid;
            grid-template-columns: 1fr;
            width: 100%;
            gap: 15px;
        }
        .statistics{
            width: 100%;
            min-height: 200px;
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
        .search_top_client{
            height: 500px;
        }
        .stats1, .stats2{
            width: 100%;
        }
    }
</style>