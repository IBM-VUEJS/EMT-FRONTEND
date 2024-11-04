import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueSweetalert2 from 'vue-sweetalert2'
import {install} from 'vue3-recaptcha-v2';


import App from './App.vue'
import router from './router'
import 'sweetalert2/dist/sweetalert2'
import VueApexCharts from "vue3-apexcharts";

const app = createApp(App);
app.use(VueApexCharts);

app.use(
    install, 
    {
        sitekey: '6LdLR28qAAAAADu5naOBjbnLd5-MNYUWXVTkRt1b',
        version: 2
    });
app.use(VueSweetalert2)
app.use(createPinia())
app.use(router)

app.mount('#app')
