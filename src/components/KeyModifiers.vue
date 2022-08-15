<template>
  <div>
    <h1 class="text-primary mt-3 mb-0 text-center">Key Modifiers</h1>
    <div class="my-5 p-5 container-center mx-auto">
      <h2 class="text-danger fw-bold text-center">Key Default (Enter, space)</h2>
      <input type="text" placeholder="Key Modifiers"
             v-on:keyup.enter="onEnter()"
             v-on:keyup.32="onSpace()"
      />
    </div>

    <h1 class="text-primary mt-3 mb-0 text-center">Exact Modifiers</h1>
    <!-- Giữ phím ctrl và click chuột -->
    <div class="my-5 p-5 container-center mx-auto">
      <!-- onClick vẫn sẽ được gọi nếu người dùng nhấn thêm phím Alt hoặc Shift -->
      <button @click.ctrl="clickMe">Ctrl</button>
      <!-- onClick chỉ được gọi nếu chỉ phím Ctrl được nhấn -->
      <button @click.ctrl.exact="clickMe">Only Ctrl</button>
      <!-- điều này sẽ chỉ kích hoạt khi không có công cụ sửa đổi hệ thống nào được nhấn -->
      <button @click.exact="clickMe">A</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KeyModifiers',
  methods: {
    /* url to search key code: https://www.toptal.com/developers/keycode/for/Space */
    onEnter () {
      // v-on:keyup.13="onEnter()"
      alert('On Enter')
    },
    onSpace () {
      // v-on:keyup.32="onEnter()"
      alert('On Space')
    },
    clickMe () {
      alert('Click me')
    }
  }
}
</script>

<style scoped>

</style>
