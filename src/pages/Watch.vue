<template>
  <div class="my-5 p-5 container-center mx-auto">
    <div class="d-flex">
      <span>{{ firstName }}</span>
      <span>{{ lastName }}</span>
    </div>
    <span> My pen model: {{myPen.model}} </span>
    <div class="d-grid">
      <span class="my-3"> {{fullName}} </span>
      <b-button variant="primary" @click="changeName()"> Change name </b-button>
      <b-button variant="success" class="mt-3" @click="changeModel()"> Change model </b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Watch',
  data () {
    return {
      firstName: 'Gold D.',
      lastName: 'Roger',
      myPen: {
        model: '2nd1',
        price: 200000
      }
    }
  },
  watch: {
    fullName (newVal, oldVal) { // Theo dõi sự thay đổi của biểu thức
      console.log('Giá trị mới của fullName:', newVal)
      console.log('Giá trị cũ của fullName:', oldVal)
    },
    firstName (newVal, oldVal) {
      console.log('Giá trị mới của firstName:', newVal)
      console.log('Giá trị cũ của firstName:', oldVal)
    },
    lastNmae: {
      handler (newVal, oldVal) {
        console.log('Giá trị mới của lastName:', newVal)
        console.log('Giá trị cũ của lastName:', oldVal)
      },
      immediate: true /* Eager watches */
    },
    myPen: {
      handler (newVal, oldVal) {
        // Lưu ý: khi dùng deep watches với 1 đối tượng thì newVal == oldVal
        console.log('Giá trị mới của myPen:', newVal)
        console.log('Giá trị cũ của myPen:', oldVal)
      },
      deep: true /* deep watches */
    },
    'myPen.model': {
      handler (newVal, oldVal) {
        // Lưu ý: nếu watch từng property của obj thì newVal != oldVal
        console.log('Giá trị mới của myPen.mode:', newVal)
        console.log('Giá trị cũ của myPen.mode:', oldVal)
      }
    }
  },
  methods: {
    changeName () {
      this.firstName = 'Monkey D.'
      this.lastName = 'Luffy'
    },
    changeModel () {
      this.myPen.model = '3n2d'
    }
  },
  computed: {
    fullName () {
      return this.firstName + this.lastName
    }
  }
}
</script>

<style scoped>

</style>
