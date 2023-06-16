<template>
  <div>
    <p>age: {{age}}</p>
  </div>
</template>

<script>
export default {
  name: 'PJ-ChildComponent2',
  inject: ['age', 'shareMethod']
}
</script>

<style scoped>

</style>
