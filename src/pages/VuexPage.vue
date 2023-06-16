<template>
  <div>
    <h1 class="text-primary mt-3 mb-0 text-center">Vuex</h1>
    <div class="my-5 p-5 container-center mx-auto">
      <result></result>
      <counter></counter>
    </div>
  </div>
</template>

<script>
import Result from '../components/vuex-components/Result.vue'
import Counter from '../components/vuex-components/Counter.vue'
export default {
  name: 'VuexPage',
  components: {
    Result,
    Counter
  }
}
</script>

<style scoped>

</style>
