<script setup>
    import ButtonComponent from '@/components/auth/form/ButtonComponent.vue';
    import BlueChartsBarIcon from '@/components/icons/BlueChartsBarIcon';
    import LoseOpportunityIcon from '@/components/icons/LoseOpportunityIcon';
    import NewOpportunityIcon from '@/components/icons/NewOpportunityIcon';
    import QualifyOpportunityIcon from '@/components/icons/QualifyOpportunityIcon';
    import RocketIcon from '@/components/icons/RocketIcon';
    import WinOpportunityIcon from '@/components/icons/WinOpportunityIcon';
    import { ref, onMounted } from 'vue';
    import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, BarController, LineController, PieController, ArcElement, Title, Tooltip, Legend, plugins, PointElement } from 'chart.js';
    import SelectComponent from '@/components/auth/form/SelectComponent.vue';

    const options = [
        {
            libel: '2024',
            value: '2024'
        },
        {
            libel: '2023',
            value: '2023'
        },
        {
            libel: '2022',
            value: '2022'
        },
    ]
    const statuts = [
        {
            icon: NewOpportunityIcon,
            number: 15,
            libel: 'Nouveau',
        },
        {
            icon: QualifyOpportunityIcon,
            number: 8,
            libel: 'Qualifié',
        },
        {
            icon: WinOpportunityIcon,
            number: 12,
            libel: 'Gagné',
        },
        {
            icon: LoseOpportunityIcon,
            number: 5,
            libel: 'Perdu',
        },
    ]

    ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, ArcElement, LineController, PointElement, BarController, PieController, Title, Tooltip, Legend);

    const chartCanvasBar = ref(null);
    const chartCanvasLine = ref(null);
    const chartCanvasPie_1 = ref(null);
    const chartCanvasPie_2 = ref(null);

    const createChartBar = () => {
        const ctx = chartCanvasBar.value.getContext('2d');

        new ChartJS(ctx, {
            type: 'bar',
            data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            datasets: [
                {
                label: 'Opportunités',
                data: [300, 250, 200, 220, 250, 300, 280, 260, 120],
                backgroundColor: '#036DF8',
                borderRadius: 10,
                barThickness: 10,
                borderSkipped: false
                },
                {
                label: 'prospect',
                data: [-150, -120, -130, -110, -90, -60, -30, -40, -80],
                backgroundColor: '#B10000',
                borderRadius: 10,
                barThickness: 10,
                borderSkipped: false
                }
            ]
            },
            options: {
            responsive: true,
            scales: {
                y: {
                    grid: {
                        // display: false
                    },
                    beginAtZero: true 
                },
                x: {
                    grid: {
                        // display: false
                    },
                    stacked: true,
                }
            },
            plugins: {
                legend: {
                display: false 
                }
            }
            }
        });
    };

    const createChartLine = () => {
        const ctx = chartCanvasLine.value.getContext('2d');
            new ChartJS(ctx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                    datasets: [
                        {
                        label: 'Opportunités',
                        data: [1, 230, 4, 220, 4, 300, 50, 260, 120],
                        backgroundColor: 'red',
                        borderColor: 'red',
                        tension: 0.5,
                        borderJoinStyle: 'round',
                        },
                    ]
                    },
                options: {
                    scales: {
                        y: {
                            grid: {
                                display: false
                            },
                            ticks: {
                                display: false
                            },
                            drawBorder: false,
                            stacked: true
                        },
                        x: {
                            grid: {
                                display: false
                            },
                            ticks: {
                                display: false
                            },
                            drawBorder: false
                        }
                        
                    }
                },
                plugins: {
                    tooltip: {
                        enabled: false
                    }
                }
            });
        }

        const createChartPie_1 = () => {
        const ctx = chartCanvasPie_1.value.getContext('2d');
            new ChartJS(ctx, {
                type: 'pie', // Définir le type comme "pie"
                data: {
                    labels: ['Red', 'Blue', 'Yellow'], // Les étiquettes des segments
                    datasets: [{
                    label: 'My Dataset', // Légende
                    data: [180, 90, 100], // Les données à afficher
                    backgroundColor: ['#940000', '#2F80ED', '#9F9F9F'], // Couleurs des segments
                    borderColor: ['#940000', '#2F80ED', '#9F9F9F'], // Couleurs des bords des segments
                    borderWidth: 1, // Largeur du bord
                    }]
                },
                options: {
                    responsive: true, // Pour une meilleure adaptation de la taille
                    plugins: {
                    legend: {
                        position: 'bottom', // Position de la légende (en haut)
                    },
                    tooltip: {
                        enabled: true, // Les tooltips seront activés par défaut
                    }
                    }
                }
            });
        }

        const createChartPie_2 = () => {
        const ctx = chartCanvasPie_2.value.getContext('2d');
            new ChartJS(ctx, {
                type: 'pie', // Définir le type comme "pie"
                data: {
                    labels: ['Red', 'Blue', 'Yellow'], // Les étiquettes des segments
                    datasets: [{
                        label: 'My Dataset', // Légende
                        data: [300, 50, 100], // Les données à afficher
                        backgroundColor: ['#CD000A', '#FF9A0C', '#036DF8'], // Couleurs des segments
                        borderColor: ['#CD000A', '#FF9A0C', '#036DF8'], // Couleurs des bords des segments
                        borderWidth: 1, // Largeur du bord
                    }]
                },
                options: {
                    responsive: true, // Pour une meilleure adaptation de la taille
                    plugins: {
                        legend: {
                            position: 'bottom', // Position de la légende (en haut)
                        },
                        tooltip: {
                            enabled: true, // Les tooltips seront activés par défaut
                        },
                        labels: {
                            usePointStyle: true
                        }
                    }
                },
                
            });
        }



    onMounted(() => {
        createChartBar();
        createChartLine();
        createChartPie_1();        
        createChartPie_2();        
    });


</script>

<template>
    <div id="overviews">
        <div class="first_row_stat">
            <div class="opportunity_stat_printer">
                <div class="rising_hope box">
                    <div class="rising_hope_text">
                        <h5>Revenu total espéré</h5>
                        <div class="rising">
                            125.700.000 F CFA
                        </div>
                        <ButtonComponent :button_width="'120px'" :bottom="'10px'">Consulter</ButtonComponent>
                    </div>
                </div>

                <div class="box status_box">
                    <h5>Nombre d'opportunités par statut</h5>
                    <div class="statuts">
                        <template v-for="statut in statuts">
                            <div class="statuts_info">
                                <div class="icon">
                                    <span v-html="statut['icon']"></span>
                                </div>
                                <div class="number_libel">
                                    <div class="number">
                                        {{ statut['number'] }}
                                    </div>
                                    <div class="libel">
                                        {{ statut['libel'] }}
                                    </div>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
            <div class="opportunity_box box">
                <h5>Nombre total d'Opportunité</h5>
                <div class="opportunity_number_chart">
                    <div class="opportunity_number">
                        170
                    </div>
                </div>
            </div>
        </div>
        <div class="second_row_stat">
            <div class="box chart_zone1" style="padding: 0;">
                <div class="chart_zone1_opp_pros">
                    <div class="text" >
                        <div class="chart1_title">
                            Rapport
                        </div>
                        <div class="chart1_legend">
                            <div class="legend">
                                <div class="legend_blue"></div>
                                <div>Opportunités</div>
                            </div>
                            <div class="legend">
                                <div class="legend_red"></div>
                                <div>Prospects</div>
                            </div>
                        </div>
                    </div>
                    <div class="chart1">
                        <canvas ref="chartCanvasBar"></canvas>
                    </div>
                </div>
                <div class="stat_per_year">
                    <div class="number" style="align-items: end;" >
                        <SelectComponent :bottom="''" :options="options" :border="'2px solid var(--purple-)'" :width="'100px'" :bg-color="'var(--purple-light)'" :color="'var(--purple)'" :purple="true"></SelectComponent>
                    </div>
                    <div class="number" style="flex-direction: column; align-items: center; padding-left: 20px; gap: 10px">
                        <div>
                            <div><span style="font-weight: bold; font-size: 1.5rem; margin-right: 10px;">170</span> Opportunités</div>
                            <div><span style="font-weight: bold; font-size: 1.5rem; margin-right: 10px;">75</span> Prospects</div>
                        </div>
                    </div>
                    <div class="number">
                        <canvas ref="chartCanvasLine"></canvas>
                    </div>
                    <div class="number" style="align-items: start;">
                        <ButtonComponent :button_width="'100%'" :bottom="'0'" :slim="true">Consulter</ButtonComponent>
                    </div>
                </div>
            </div>
            <div class="circle_charts">
                <div class="circle_chart box">
                    <h6>Répartition par pays</h6>
                    <div >
                        <canvas ref="chartCanvasPie_1"></canvas>
                    </div>
                </div>
                <div class="circle_chart box">
                    <h6>Répartition par secteur d'activité</h6>
                    <div>
                        <canvas ref="chartCanvasPie_2"></canvas>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    #overviews{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    .first_row_stat, .second_row_stat{
        display: flex;
        align-items: start;
        justify-content: start;
        flex-direction: row;
        gap: 15px;
    }
    .opportunity_stat_printer{
        display: flex;
        width: 80%;
        height: 100%;
        gap: 15px; 
    }
    .rising_hope{
        width: 25%;
        display: flex;
        align-items: center;
        justify-content: start;
        flex-wrap: wrap;
    }
    .status_box{
        width: 75%;
    }
    .opportunity_box{
        width: 20%;
        height: 100%
    }
    .circle_charts{
        display: flex;
        align-items: center;
        justify-content: start;
        flex-direction: column;
        width: 20%;
        height: 100%;
        gap: 15px
    }
    .box{
        box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.296);
        border-radius: 6px;
        padding: 10px;
    }
    .rising_hope{
        display: flex;
        /* flex-wrap: wrap; */
    }
    .rising{
        font-size: 1.5rem;
        font-weight: bolder;
        margin-bottom: 10px;
        color: var(--red);
    }
    .rising_hope_text{
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        width: 100%;
        height: 100%
    }
    .rising_hope_icon{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20%;
    }
    .rising_hope_icon span svg{
        width: 100%;
    }
    h5{
        font-weight: normal;
        font-size: 1.15em;
    }
    .statuts_info{
        display: flex;
        align-items: center;
    }
    .statuts{
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        height: 80%;
    }
    .statuts_info{
        width: 100px;
    }
    .opportunity_number_chart{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 10px;
        height: calc(100% - 40px);
        width: 100%;
    }
    .chart_bar_icon{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80%;
        height: 100%;
    }
    .opportunity_number{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        font-size: 2rem;
        font-weight: bolder;
        color: var(--red);
    }
    .chart_zone1{
        display: flex;
        width: 80%;
        height: 100%;
    }
    .chart_zone1_opp_pros{
        display: flex;
        flex-direction: column;
        width: 70%;
        padding: 10px;
        border-right: 1px solid var(--grey-light);
    }
    .chart_zone1_opp_pros .chart1{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }
    .text, .chart1_legend{
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
    }
    .text{
        justify-content: space-between;
        width: 100%;
        height: 40px
    }
    .text .chart1_title{
        font-size: 1.2rem;
    }
    .chart1_legend{
        justify-content: end;
        gap: 15px;
    }
    .legend{
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .legend .legend_blue, .legend .legend_red{
        width: 10px;
        height: 10px;
        border-radius: 50%;
    }
    .legend .legend_red{
        background-color: var(--red);
    }
    .legend .legend_blue{
        background-color: var(--blue);
    }
    .stat_per_year{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 20%;
        gap: 20px;
    }
    .stat_per_year .number{
        width: 100%;
        height: 125px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .circle_chart{
        width: 100%;
        height: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 5px;
    }
    .circle_chart h6{
        text-align: center;
        font-size: 1rem;
        margin: 0;
    }
    .circle_chart div{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media screen and (max-width: 1200px) {
        .second_row_stat{
            flex-direction: column-reverse;
        }        
        .chart_zone1{
            height: 70%;
            width: 100%;
        }
        .circle_charts{
            display: flex;
            flex-direction: row;
            height: 30%;
            width: 100%;
        }
        .circle_chart{
            width: 50%;
            height: 100%;
        }
    }
</style>