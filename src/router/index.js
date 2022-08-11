import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DataBinding from '@/components/DataBinding'
import Directive from '@/components/Directive'
import EventModifiers from '@/components/EventModifiers'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/DataBinding',
      name: 'DataBinding',
      component: DataBinding
    },
    {
      path: '/Directive',
      name: 'Directive',
      component: Directive
    },
    {
      path: '/Event-Modifiers',
      name: 'Event-Modifiers',
      component: EventModifiers
    }
  ]
})
