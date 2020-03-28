import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashindo from '../views/Dashindo.vue'
import Dashglobal from '../views/Dashglobal.vue'
import Dashlampung from '../views/Dashlampung.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path : '/dashlpg',
    name : 'Dashlampung',
    component : Dashlampung
  },
  {
    path : '/dashindo',
    name : 'Dashindo',
    component : Dashindo
  },
  {
    path : '/dashglobal',
    name : 'Dashglobal',
    component : Dashglobal
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
