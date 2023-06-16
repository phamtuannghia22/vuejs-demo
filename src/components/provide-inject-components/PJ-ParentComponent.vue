<template>
  <div>
    <PJChildComponent1></PJChildComponent1>
  </div>
</template>

<script>
import PJChildComponent1 from './PJ-ChildComponent1.vue'
export default {
  name: 'PJ-ParentComponent',
  components: {
    PJChildComponent1
  }
}
</script>

<style scoped>

</style>
