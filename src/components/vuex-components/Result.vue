<template>
  <div>
    <p>Kết quả là {{result}}</p>
  </div>
</template>

<script>
export default {
  name: 'Result',
  computed: {
    result () {
      return this.$store.state.result
    }
  }
}
</script>

<style scoped>

</style>
