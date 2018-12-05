import Vue from 'vue'
import Router from 'vue-router'
import wxDetail from '@/components/wxDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'wxDetail',
      component: wxDetail
    }
  ]
})
