import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Navbar from '@/components/Navbar'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/home',
      name: 'Home',
      component: () => import(/* webpackChunkName: "comminicate" */ '../views/Home.vue')
    },
    {
      path: '/comminicate',
      name: 'Comminicate',
      component: () => import(/* webpackChunkName: "comminicate" */ '../views/Comminicate.vue')
    }
  ]
})
