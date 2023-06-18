<template>
  <header>
    <slot></slot>
    <slot name="text1"></slot>
    <h3>{{ titleHeader }}</h3>
  </header>
</template>

<script>
export default {
  name: 'ComponentHeader',
  data () {
    return {
    }
  },
  props: {
    titleHeader: {
      type: String,
      default: 'Vue js demo'
    }
  }
}
</script>

<style scoped>

</style>
