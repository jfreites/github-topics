import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Topics from '@/components/Topics'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/topics',
      name: 'Topics',
      component: Topics
    }
  ]
})
