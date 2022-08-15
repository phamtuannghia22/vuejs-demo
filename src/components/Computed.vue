<template>
  <div>
    <div class="my-5 p-5 container-center mx-auto">
      <h1 class="fw-bold text-center text-danger">Computed</h1>
      <!-- Computed được tính toán dựa trên dữ liệu có sẵn -->
      <!-- Computed chỉ được chạy bất kì dữ liệu trong computed thay đổi -->
      <p>Count = 1, A = 5, B = 2</p>

      <!--When use function-->
      <!--<p>Count + A: {{changeNumberA()}}</p>-->
      <!--<p>Count + B: {{changeNumberB()}}</p>-->

      <!--When use compute-->
      <p>Count + A: {{changeNumberA}}</p>
      <p>Count + B: {{changeNumberB}}</p>

      <div class="d-flex justify-content-between0">
        <button class="me-3" v-on:click="numberB++">B++</button>
        <button class="me-3" v-on:click="numberA++">A++</button>
        <button v-on:click="count++">Count++</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'computed',
  data () {
    return {
      count: 1,
      numberA: 5,
      numberB: 2
    }
  },
  methods: {
    // changeNumberA () {
    //   console.log('A change')
    //   return this.numberA + this.count
    // },
    // changeNumberB () {
    //   console.log('B change')
    //   return this.numberB + this.count
    // }
  },
  computed: {
    changeNumberA () {
      console.log('A change')
      return this.numberA + this.count
    },
    changeNumberB () {
      console.log('B change')
      return this.numberB + this.count
    }
  }
}
</script>

<style scoped>

</style>
