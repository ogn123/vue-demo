import Vue from 'vue'
import Router from 'vue-router'
import vue from '@/components/vue'
import transitioner from '@/components/transition'
import counter from '@/components/counter/couter'
import shopcart from '@/components/shop'
import corrent from '@/components/parent'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'vue',
      component: vue
    },
    {
      path: '/transitioner',
      name: 'transitioner',
      component: transitioner
    },
    {
      path: '/vue',
      name: 'vue',
      component: vue
    },
    {
      path: '/counter',
      name: 'counter',
      component: counter
    },
    {
      path: '/shopcart',
      name: 'shopcart',
      component: shopcart
    },
    {
      path: '/corrent',
      name: 'corrent',
      component: corrent
    }
  ]
})
