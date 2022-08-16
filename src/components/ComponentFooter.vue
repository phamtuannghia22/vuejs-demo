<template>
  <footer>
    <h3>{{ titleFooter }}</h3>
    <button v-on:click="changeTitleFooter">Change title foooter</button>
  </footer>
</template>

<script>
export default {
  name: 'ComponentFooter',
  data () {
    return {
    }
  },
  props: {
    titleFooter: String
  },
  methods: {
    changeTitleFooter () {
      console.log('Emit event from footer')
      this.$emit('changeTitleFooter', 'hip hop never die')
    }
  }
}
</script>

<style scoped>

</style>
