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
      component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
    },
    {
      path: '/comminicate',
      name: 'Comminicate',
      component: () => import(/* webpackChunkName: "comminicate" */ '../views/Comminicate.vue')
    },
    {
      path: '/video',
      name: 'Video',
      component: () => import(/* webpackChunkName: "video" */ '../views/Video.vue')
    },
    {
      path: '/live',
      name: 'Live',
      component: () => import(/* webpackChunkName: "live" */ '../views/Live.vue')
    },
    {
      path: '/message',
      name: 'Message',
      component: () => import(/* webpackChunkName: "message" */ '../views/Message.vue')
    },
    {
      path: '/news',
      name: 'News',
      component: () => import(/* webpackChunkName: "news" */ '../views/News.vue')
    }
  ]
})
