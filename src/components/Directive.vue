<template>
  <div id="directive">
    <h1 class="text-primary my-3 text-center">Directive</h1>
    <!--v-on-->
    <div id="v-on" class="my-5 p-5 container-center mx-auto">
      <h2 class="fw-bold text-danger">V-on</h2>
      <!--Click-->
      <p>Count: {{ count }}</p>
      <div class="d-flex w-100 justify-content-between">
        <button class="me-3" v-on:click="increaseCount()">Increase</button>
        <button v-on:click="reduceCount()">Reduce</button>
      </div>
      <!--Hover-->
      <div class="d-flex mt-5 justify-content-between">
        <div id="hover-me" v-on:mousemove="hover($event)">
          <span class="m-auto text-white"> Hover me </span>
          <p class="mt-4 text-white">{{ position }}</p>
        </div>
      </div>
    </div>
    <!--end v-on-->
    <!--V-bind-->
    <div class="my-5 p-5 container-center mx-auto">
      <h1 class="text-danger my-3 text-center">V-bind</h1>
      <a class="p-5" v-bind:href="url">Wuyi Art</a>
    </div>
    <!--end v-bind-->
  </div>
</template>

<script>
export default {
  name: 'Directive',
  data () {
    return {
      count: 0,
      position: 'x = 0  y = 0',
      url: 'https://phamtuannghia22.github.io/wuyi-art/'
    }
  },
  methods: {
    increaseCount () {
      this.count++
    },
    reduceCount () {
      this.count--
    },
    hover (e) {
      console.log(e)
      this.position = `x = ${e.offsetX}  y = ${e.offsetY}`
    }
  }
}
</script>

<style scoped>

</style>
