import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'makeInfo',
      component: _import("makeInfo")
    },
    {
      path: '/wxDetail',
      name: 'wxDetail',
      component: _import("wxDetail")
    }
  ]
})
