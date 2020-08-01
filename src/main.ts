import {createApp} from 'vue'
import App from './App.vue'
import COM from './components/COM.vue'
import './index.css'
import {createWebHashHistory, createRouter} from 'vue-router'

const history = createWebHashHistory()
const router = createRouter({
    history,
    routes: [
        {
            path: '/index',
            component: COM
        }
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')

