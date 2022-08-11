<template>
  <div>
    <!--v-on-->
    <div>
      <h2>V-on</h2>
      <p>Count: {{ count }}</p>
      <button v-on:click="increaseCount()">Click</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Directive',
  data () {
    return {
      count: 0
    }
  },
  methods: {
    increaseCount () {
      this.count++
    }
  }
}
</script>

<style scoped>

</style>
