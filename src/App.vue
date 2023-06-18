<template>
  <div id="app">
    <ul>
      <li v-for="(router,index) in routersSortByTitle" v-bind:key="index">
        <router-link v-bind:to="router.url">{{ router.title }}</router-link>
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      routers: [
        {title: 'Directive', url: '/Directive'},
        {title: 'DataBinding', url: '/DataBinding'},
        {title: 'Event Modifiers', url: '/Event-Modifiers'},
        {title: 'Key Modifiers', url: '/Key-Modifiers'},
        {title: 'Computed', url: '/Computed'},
        {title: 'Lifecycle Hooks', url: '/Lifecycle-Hooks'},
        {title: 'Props', url: '/Props'},
        {title: 'Ref', url: '/Ref'},
        {title: 'Watch', url: '/Watch'},
        {title: 'Vuex', url: '/Vuex'},
        {title: 'Provide / Inject', url: '/Provide-Inject'},
        {title: 'Custom Directive', url: '/Custom-Directive'}
      ]
    }
  },
  computed: {
    routersSortByTitle () {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.routers.sort(function (a, b) {
        if (a.title < b.title) { return -1 }
        if (a.title > b.title) { return 1 }
        return 0
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
