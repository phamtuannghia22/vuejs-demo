<template>
  <div>
    <h1 id="lifecycle" class="text-primary mt-3 mb-0 text-center">{{content}}</h1>
    <div class="d-flex justify-content-center mt-5">
      <button v-on:click="changeText()" class="mx-auto">Change text</button>
    </div>
  </div>
</template>

<script>
import {logBB} from '../helper/helper'
export default {
  name: 'lifecycle-hooks',
  data () {
    return {
      content: 'Lifecycle Hook'
    }
  },
  methods: {
    changeText () {
      document.getElementById('lifecycle').classList.remove('text-primary')
      this.content = 'Debug'
    }
  },

  // Giai đoạn khởi tạo
  beforeCreate () { // hook chạy mỗi khi khởi tạo một instance. Tại thời điểm này, data, event chưa được thiết lập.
    logBB('Before create:', this.content)
  },
  created () { // hook được chạy khi data, event đã thiết lập thành công.
    logBB('Created:', this.content)
  },

  // Giai đoạn gắn kết DOM
  beforeMount () { // hook sẽ chạy sau khi data, event được thiết lập và trước khi gắn kết vào DOM. Trong hook này chúng ta vẫn chưa - truy cập được phần tử trong DOM.
    logBB('Before mount:', document.getElementById('lifecycle'))
  },
  mounted () { // giai đoạn này, mounted hook sẽ cho phép chúng ta có thể truy cập vào phẩn tử trong DOM. Tức là khi này, DOM đã được gắn kết.
    logBB('Mounted:', document.getElementById('lifecycle'))
  },

  // Giai đoạn cập nhật DOM
  beforeUpdate () { // Sau khi đối tượng đã được gắn vào DOM, khi dữ liệu thay đổi, và trước khi render, patch lại và hiển thị ra cho người dùng.
    logBB('Before update:', this.content)
  },
  updated () { // Chạy ngay sau khi beforeUpdate . Sử dụng khi bạn cần truy cập DOM sau khi thay đổi thuộc tính. dữ liệu ở beforeUpdate và updated là như nhau
    logBB('Update:', this.content)
  },

  // Giai đoạn hủy instance
  beforeDestroy () { // Là giai đoạn trước khi instance bị hủy. Đây là nơi để quản lý tài nguyên xóa tài nguyên, dọn dẹp các component.
    logBB('Before destroy:', '')
    this.content = null
    delete this.content
  },
  destroyed () { // Thời điểm này , mọi thành phần đã được hủy bỏ hết. Khi console.log() đối tượng này thì sẽ không nhận được thuộc tính hay dữ liệu gì.
    logBB('Destroy:', this)
  }
}
</script>

<style scoped>

</style>
