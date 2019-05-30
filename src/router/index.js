import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import HelloWorld from '@/components/HelloWorld'
import Container from '@/components/Container'
import Dashboard from '@/components/Dashboard'
import Panel1 from '@/components/Panel1'
import Panel2 from '@/components/Panel2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/data-center',
      name: 'Container',
      component: Container,
      children: [
        {
          path: 'dashboard',
          component: Dashboard,
          name: 'Dashboard',
        },
        {
          path: '',
          redirect: 'dashboard',
          name: 'Dashboard'
        },
        {
          path: 'panel1',
          component: Panel1,
          name: 'Panel1',
        },
        {
          path: 'panel2',
          component: Panel2,
          name: 'Panel2',
        },
      ]
    },
  ]
})
