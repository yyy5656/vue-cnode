import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
import Detail from '@/pages/detail/Detail.vue'
import Userdetail from '@/pages/user/userdetail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }, {
      path: '/user/:loginname',
      name: 'Userdetail',
      component: Userdetail
    }]
})
