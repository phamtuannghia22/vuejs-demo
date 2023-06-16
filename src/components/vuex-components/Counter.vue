<template>
  <div class="count">
    <b-button size="sm" variant="success" @click="increament1">Increment 1</b-button>
    <b-button size="sm" variant="success" @click="increament2">Increment 2</b-button>
    <b-button size="sm" variant="danger" @click="decrement">Decrement</b-button>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  methods: {
    increament1 () {
      // this.$store.state.result++
      // this.$store.commit('increment1')
      this.$store.dispatch('increment1')
    },
    increament2 () {
      // this.$store.commit('increment2', 10)
      this.$store.dispatch('increment2', 10)
    },
    decrement () {
      this.$store.state.result--
    }
  }
}
</script>

<style scoped>

</style>
