import {createApp} from 'vue'
import App from './App.vue'
import router from './router.ts'
import './assets/defaultTheme.scss'
import './assets/css/reset.css'
import './index.css'
const app = createApp(App)
app.use(router)
app.mount('#app')

