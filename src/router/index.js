import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DataBinding from '@/components/DataBinding'
import Directive from '@/components/Directive'
import EventModifiers from '@/components/EventModifiers'
import KeyModifiers from '@/components/KeyModifiers'
import Computed from '@/components/Computed'
import LifecycleHooks from '@/components/LifecycleHooks'

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
