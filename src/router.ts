import {createRouter, createWebHashHistory} from "vue-router";
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'

const history = createWebHashHistory()

const router = createRouter({
    history,
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/doc',
            component: Doc,
            children: [
                {
                    'path': 'switchDoc',
                    component: import('./components/SwitchDoc.vue')
                },
                {
                    'path': 'buttonDoc',
                    component: import('./components/ButtonDoc.vue')
                }
            ]
        }
    ]
})

export default router