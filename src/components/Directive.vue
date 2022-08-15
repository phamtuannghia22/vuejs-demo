<template>
  <div id="directive">
    <h1 class="text-primary mt-3 mb-0 text-center">Directive</h1>
    <div class="row container">

      <!--v-on-->
      <div id="v-on" class="my-3 p-5 container-center mx-auto">
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
      <div id="v-bind" class="my-3 p-5 container-center mx-auto">
        <h2 class="text-danger fw-bold my-3 text-center">V-bind</h2>
        <a class="p-5" v-bind:href="url">Wuyi Art</a>
        <h4 class="text-danger fw-bold my-3 text-center">Ràng buộc class</h4>
        <div class="d-flex justify-content-between">
          <div id="vbind-div" v-bind:class="{'bg-red': isBackgroundRed}"></div>
          <button class="ms-3 my-auto" v-on:click="changeBackground()">Change background</button>
        </div>
        <div class="d-flex justify-content-between">
          <div
            v-bind:style="{'backgroundColor': 'green', 'width': '100px', 'height':'100px', 'marginTop':'20px'}"></div>
        </div>
      </div>
      <!--end v-bind-->

      <!-- V-model -->
      <div class="my-3 p-5 container-center mx-auto">
        <h2 class="text-danger fw-bold text-center">V-model (Two-way binding)</h2>
        <p>{{ userName }}</p>
        <input v-model="userName" type="text" placeholder="user name"/>
      </div>
      <!-- End v-model -->

      <!-- V-if -->
      <div class=" my-3 p-5 container-center mx-auto">
        <h2 class="text-danger fw-bold text-center">V-if</h2>
        <p>Check : {{ check }}</p>
        <p v-if="check">If check = true, Hello World</p>
        <p v-if="!check">If check = false, Destroy World</p>
        <!-- <p v-else-if="!check">If check = false, Destroy World</p> -->
        <!-- <p v-else>If check = false, Destroy World</p> -->
        <button @click="changeCheck()">Change check</button>
      </div>
      <!-- End v-if -->

      <!-- V-show -->
      <div class=" my-3 p-5 container-center mx-auto">
        <h2 class="text-danger fw-bold text-center">V-show</h2>
        <p>Check : {{ check }}</p>
        <p v-show="check">If check = true, Hello World</p>
        <p v-show="!check">If check = false, Destroy World</p>
        <button @click="changeCheck()">Change check</button>
      </div>
      <!-- End v-show -->

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

      userName: '', // dùng trong v-model

      check: true // dùng trong v-if và v-show
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
    },
    changeCheck () {
      this.check = !this.check
    }

  }
}
</script>

<style scoped>

</style>
