<template>
  <div>
    <h1 class="text-primary mt-3 mb-0 text-center">Ref</h1>
    <div class="my-5 p-5 container-center mx-auto">
      <input v-on:change="change()" class="d-none" ref="RefInput" type="file" />
      <button v-on:click="chooseFile()">Choose file</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ref',
  methods: {
    chooseFile () {
      this.$refs.RefInput.click()
      console.log(this.$refs.RefInput.files)
    },
    change () {
      console.log(this.$refs.RefInput.files)
    }
  }
}
</script>

<style scoped>

</style>
