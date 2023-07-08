<template>
  <div class="page">
    <div >
      <canvas class="position-relative" id="canvas"  width="500" height="500"></canvas>
      <canvas class="canvas-container-rect position-absolute" style="top: 0; left: 0" ref="canvasRef" @mousedown="startDrawingRectangle($event)" @mousemove="drawRectangle($event)" @mouseleave="stopDrawingRectangle" @mouseup="stopDrawingRectangle"></canvas>
    </div>
    <b-button size="sm" variant="primary" @click="crop()">Crop</b-button>
  </div>
</template>

<script>
export default {
  name: 'CropImage',
  data () {
    return {
      url: 'https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=725&q=80',
      isDrawing: false,
      contextRef: null,
      canvasOffSetX: null,
      canvasOffSetY: null,
      startX: null,
      startY: null
    }
  },
  mounted () {
    const canvas = this.$refs.canvasRef
    canvas.width = 500
    canvas.height = 500

    const context = canvas.getContext('2d')
    context.lineCap = 'round'
    context.strokeStyle = 'black'
    context.lineWidth = 5
    this.contextRef = context
    const canvasOffSet = canvas.getBoundingClientRect()
    this.canvasOffSetX = canvasOffSet.top
    this.canvasOffSetY = canvasOffSet.left
  },
  methods: {
    crop () {
      const canvas = document.getElementById('canvas')
      const ctx = canvas.getContext('2d')

      const image = new Image()
      image.src = this.url

      image.onload = function () {
        ctx.drawImage(image, 150, 200, 500, 300, 60, 60, 600, 400)
      }
    },
    drawRectangle (nativeEvent) {
      if (!this.isDrawing) {
        return
      }

      nativeEvent.preventDefault()
      nativeEvent.stopPropagation()

      const newMouseX = nativeEvent.clientX - this.canvasOffSetX
      const newMouseY = nativeEvent.clientY - this.canvasOffSetY
      const rectWidht = newMouseX - this.startX
      const rectHeight = newMouseY - this.startY

      this.contextRef.clearRect(0, 0, this.$refs.canvasRef.width, this.$refs.canvasRef.height)
      this.contextRef.strokeRect(this.startX, this.startY, rectWidht, rectHeight)
    },
    startDrawingRectangle  (nativeEvent) {
      nativeEvent.preventDefault()
      nativeEvent.stopPropagation()

      this.startX = nativeEvent.clientX - this.canvasOffSetX
      this.startY = nativeEvent.clientY - this.canvasOffSetY

      this.isDrawing = true
    },
    stopDrawingRectangle () {
      this.isDrawing = false
    }
  }
}
</script>

<style scoped>
.canvas-container-rect {
  height: 500px;
  width: 500px;
  border: 2px solid #000;
  margin-left: 100px;
  margin-top: 100px;
}
</style>
