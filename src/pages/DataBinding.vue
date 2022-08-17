<template>
  <div>
    <h1 class="text-primary mt-3 mb-0 text-center">Data binding</h1>
    <div class="my-5 p-5 container-center mx-auto">
      <h1>{{ titleDataBinding }}</h1>
      <h4>{{ body.number }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'data-binding',
  data () {
    return {
      titleDataBinding: 'Hello World',
      body: {
        number: 22
      }
    }
  }
}
</script>

<style scoped>

</style>
