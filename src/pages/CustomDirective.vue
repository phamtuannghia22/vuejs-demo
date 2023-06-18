<template>
  <div>
    <h1 class="text-primary mt-3 mb-0 text-center">Custom Directive</h1>
    <div class="my-5 p-5 container-center mx-auto">
      <p v-text-color="color" >Hip hop never die</p>
      <b-button variant="primary" @click="changeTextColor()">Change text color</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomDirective',
  data () {
    return {
      color: 'pink'
    }
  },
  directives: {
    'text-color': {
      bind: function (el, binding, vnode) {
        // Hành động khi directive được gắn vào phần
        el.style.color = binding.value
      },
      inserted: function (el, binding, vnode) {
        // Hành động khi phần tử chứa directive được chèn vào DOM
      },
      update: function (el, binding, vnode) {
        // Hành động khi giá trị của binding được cập nhật
        el.style.color = binding.value
        console.log(vnode)
        console.log(el)
      },
      unbind: function (el, binding, vnode) {
        // Hành động khi directive bị gỡ bỏ từ phần tử
      }
    }
  },
  methods: {
    changeTextColor () {
      this.color = 'red'
    }
  }
}
</script>

<style scoped>

</style>
