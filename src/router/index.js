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
      component: () => import('../views/Home.vue')
    },
    {
      path: '/comminicate',
      name: 'Comminicate',
      component: () => import('../views/Comminicate.vue')
    },
    {
      path: 'video',
      name: 'Video',
      component: () => import('../views/Video.vue')
    },
    {
      path: 'live',
      name: 'Live',
      component: () => import('../views/Live.vue')
    },
    {
      path: '/message',
      name: 'Message',
      component: () => import('../views/Message.vue')
    },
    {
      path: '/news',
      name: 'News',
      component: () => import('../views/News.vue')
    },
    {
      path: '/bookstore',
      name: 'Bookstore',
      component: () => import('../views/Bookstore.vue')
    }
  ]
})
