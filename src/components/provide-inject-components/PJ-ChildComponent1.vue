<template>
  <div>
    <p>name: {{name}}</p>
    <PJChildComponent2></PJChildComponent2>
  </div>
</template>

<script>
import PJChildComponent2 from './PJ-ChildComponent2.vue'

export default {
  name: 'PJ-ChildComponent1',
  components: {
    PJChildComponent2
  },
  inject: ['name'],
  computed: {
    returnNameUser () {
      return this.name
    }
  }
}
</script>

<style scoped>

</style>
