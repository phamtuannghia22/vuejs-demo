<template>
  <div>
    <h1 class="text-primary mt-3 mb-0 text-center">Event Modifiers</h1>
    <!--Prevent Default-->
    <div class="my-5 p-5 container-center mx-auto">
      <!--ngăn chặn sự kiện mặc định của thẻ HTML-->
      <h2 class="text-danger fw-bold my-3 text-center">Prevent Default</h2>
      <a class="p-5" v-on:click.prevent="onClickTagA()" v-bind:href="url">Wuyi Art</a>
    </div>
    <!--Stop Propagation-->
    <div class="my-5 p-5 container-center mx-auto">
      <!--ngăn chặn sự kiện lan tỏa ra phần tử cha-->
      <h2 class="text-danger fw-bold my-3 text-center">Stop Propagation</h2>
      <div id="father-div" v-on:click="onFatherDiv()">
        <div id="child-div" class="m-auto" v-on:click.stop="onChildDiv()"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'event-modifiers',
  data () {
    return {
      url: 'https://phamtuannghia22.github.io/wuyi-art/'
    }
  },
  methods: {
    onClickTagA () {
      console.log('Đã hủy bỏ sự chuyển trang của thẻ a')
    },
    onFatherDiv () {
      alert('on click father div')
      console.log('Father div')
    },
    onChildDiv () {
      alert('on click child div')
      console.log('Child div')
    }
  }
}
</script>

<style scoped>

</style>
