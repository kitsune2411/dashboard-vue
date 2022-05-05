import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import LoggedIn from '../views/LoggedIn'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'home',
    component: LoginView
  },{
    path: "",
    component: LoggedIn,
    children: [
      {
        path: '/',
        name: 'data',
        component: () => import('../views/DataView.vue')
      },
      {
        path: '/report',
        name: 'report',
        component: () => import('../views/ReportView.vue')
      },
    ]
  },




  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
