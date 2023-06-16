<template>
  <div>
    <h1 class="text-primary mt-3 mb-0 text-center">Provide / Inject</h1>
    <div class="my-5 p-5 container-center mx-auto">
      <PJParentComponent></PJParentComponent>
    </div>
  </div>
</template>

<script>
import PJParentComponent from '../components/provide-inject-components/PJ-ParentComponent.vue'
export default {
  name: 'ProvideInject',
  components: {
    PJParentComponent
  },
  data () {
    return {
      name: 'T Freak',
      age: 25
    }
  },
  provide () {
    return {
      name: this.name,
      age: 25
    }
  }
}
</script>

<style scoped>

</style>
