import Vue from 'vue'
import Router from 'vue-router'
import vue from '@/components/vue'
import abc from '@/components/transition'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'vue',
      component: vue
    },
    {
      path: '/abc',
      name: 'abc',
      component: abc
    }
  ]
})
