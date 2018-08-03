import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloWorld1 from '@/components/HelloWorld1'
import Test from '@/components/test/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'HelloWorld1',
      component: HelloWorld1
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
