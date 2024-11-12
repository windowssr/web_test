import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/pages/Home.vue'
import Header from '@/components/Header.vue'
import About from '@/pages/About.vue'
import Activatity from '@/pages/Activatity.vue'
import Scenic from '@/pages/Scenic.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            name:'Header',
            path:'/',
            component:Header
        },
        {
            name:'Home',
            path:'/home',
            component:Home
        },
        {
            name:'Scenic',
            path:'/scenic',
            component:Scenic
        },
        {
            name:'Activatity',
            path:'/activaty',
            component:Activatity
        },
        {
            name:'About',
            path:'/about',
            component:About
        }
    ]
})

export default router