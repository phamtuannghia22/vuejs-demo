<template>
  <div>
    <div class="my-3 p-5 container-center mx-auto">
      <component-header>
        <template #default>
          <p>Hip hop never die</p>
        </template>
        <template #text1>
          <p>T Freak</p>
        </template>
      </component-header>
      <component-footer v-bind:titleFooter="titleFooter"
                        v-on:changeTitleFooter="changeTitleFromFooter"></component-footer>
    </div>
  </div>
</template>

<script>
import ComponentHeader from '../components/ComponentHeader'
import ComponentFooter from '../components/ComponentFooter'

export default {
  name: 'Props',
  data () {
    return {
      titleFooter: 'This is footer'
    }
  },
  components: {
    ComponentHeader,
    ComponentFooter
  },
  methods: {
    changeTitleFromFooter (data) {
      console.log(data)
      this.titleFooter = data
    }
  }
}
</script>

<style scoped>

</style>
