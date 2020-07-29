import { createApp } from 'vue'
import App from './App.vue'
import COM from './components/COM.vue'
import './index.css'
import {createWebHashHistory,createRouter} from 'vue-router'

const history = createWebHashHistory()
const router = createRouter({history,
    routes:[
        {
            path:'/',
            component:COM
        }
    ]})

createApp(App).mount('#app')
