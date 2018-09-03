import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import home from './routers/home.vue'
import personal from './routers/personal.vue'
import show from './routers/show.vue'
import joinus from './routers/joinus.vue'

const routes =[
    {path:'/home', component:home},
    {path:'/personal', component:personal},
    {path:'/show', component:show},
    {path:'/joinus', component:joinus},
    {path:'/', component:home},
]

export default new VueRouter({
    routes
})