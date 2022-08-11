<template>
  <div>
    <h1>{{ titleDataBinding }}</h1>
    <h4>{{ body.number }}</h4>
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
