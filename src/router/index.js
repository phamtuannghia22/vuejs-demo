import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DataBinding from '@/pages/DataBinding'
import Directive from '@/pages/Directive'
import EventModifiers from '@/pages/EventModifiers'
import KeyModifiers from '@/pages/KeyModifiers'
import Computed from '@/pages/Computed'
import LifecycleHooks from '@/pages/LifecycleHooks'

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
    },
    {
      path: '/Key-Modifiers',
      name: 'Key-Modifiers',
      component: KeyModifiers
    },
    {
      path: '/Computed',
      name: 'Computed',
      component: Computed
    },
    {
      path: '/Lifecycle-Hooks',
      name: 'LifecycleHooks',
      component: LifecycleHooks
    }
  ]
})
