<template>
  <div id="directive">
    <h1 class="text-primary mt-3 mb-0 text-center">Directive</h1>
    <div class="row container">

      <!--v-on-->
      <div id="v-on" class="m-auto p-5 container-center mx-auto">
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
      <div id="v-bind" class="m-auto p-5 container-center mx-auto">
        <h2 class="text-danger fw-bold my-3 text-center">V-bind</h2>
        <a class="p-5" v-bind:href="url">Wuyi Art</a>
        <h4 class="text-danger fw-bold my-3 text-center">Ràng buộc class</h4>
        <div class="d-flex justify-content-between">
          <div id="vbind-div" v-bind:class="{'bg-red': isBackgroundRed}"></div>
          <button class="ms-3 my-auto" v-on:click="changeBackground()">Change background</button>
        </div>
      </div>
      <!--end v-bind-->

      <!-- V model -->
      <div class="m-auto p-5 container-center mx-auto">
        <h2 class="text-danger fw-bold text-center">V-model (Two-way binding)</h2>
        <p>{{userName}}</p>
        <input v-model="userName" type="text" placeholder="user name" />
      </div>

      <!-- End v-model -->
    </div>

  </div>
</template>

<script>
export default {
  name: 'Directive',
  data () {
    return {
      count: 0, // dùng trong v-on
      position: 'x = 0  y = 0', // dùng trong v-on

      url: 'https://phamtuannghia22.github.io/wuyi-art/', // dùng trong v-bind
      isBackgroundRed: true, // dùng trong v-bind

      userName: '' // dùng trong v-model
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
    },
    changeBackground () {
      this.isBackgroundRed = !this.isBackgroundRed
    }

  }
}
</script>

<style scoped>

</style>
