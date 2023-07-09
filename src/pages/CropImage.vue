<template>
  <div class="page">
    <div class="position-relative">
      <canvas id="canvas" width="500" height="500" ref="canvasDraw"></canvas>
      <canvas class="canvas-container-rect position-absolute" width="500" height="500" style="top: 0; left: 0" ref="canvasRef" @mousedown="startDrawingRectangle($event)" @mousemove="drawRectangle($event)" @mouseleave="stopDrawingRectangle" @mouseup="stopDrawingRectangle"></canvas>
    </div>
    <b-button size="sm" variant="primary" @click="crop()">Crop</b-button>
    <b-button size="sm" variant="primary" @click="convertImg()">convert</b-button>
    <img id="img" src="../assets/images/img-cropper.jpeg" hidden />
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
      contextDraw: null,
      canvasOffSetX: null,
      canvasOffSetY: null,
      startX: null,
      startY: null,
      cropper: {
        width: 0,
        height: 0,
        sx: 0,
        sy: 0
      }
    }
  },
  mounted () {
    const canvasDraw = this.$refs.canvasDraw
    const ctx = canvasDraw.getContext('2d')
    const imgTest = document.getElementById('img')
    this.url = imgTest.src
    const image = new Image()
    image.src = this.url

    image.onload = function () {
      console.log(image.src)
      const ratio = image.width / 500
      const height = image.height / ratio
      ctx.drawImage(image, 0, 0, 500, height)
    }
  },
  methods: {
    startDrawingRectangle  (nativeEvent) {
      console.log('start draw')
      const canvas = this.$refs.canvasRef
      const canvasDraw = this.$refs.canvasDraw
      // canvas.width = 500
      // canvas.height = 500

      this.contextRef = canvas.getContext('2d')
      this.contextRef.lineCap = 'round'
      this.contextRef.strokeStyle = 'black'
      this.contextRef.lineWidth = 1
      this.contextDraw = canvasDraw.getContext('2d')
      const canvasOffSet = canvas.getBoundingClientRect()
      this.canvasOffSetX = canvasOffSet.left
      this.canvasOffSetY = canvasOffSet.top
      nativeEvent.preventDefault()
      nativeEvent.stopPropagation()

      this.startX = nativeEvent.clientX - this.canvasOffSetX
      this.startY = nativeEvent.clientY - this.canvasOffSetY

      this.isDrawing = true
    },
    crop () {
      const canvas = this.$refs.canvasDraw
      const ctx = canvas.getContext('2d')

      const image = new Image()
      image.src = this.url
      const self = this
      image.onload = function () {
        self.contextRef.clearRect(0, 0, self.$refs.canvasRef.width, self.$refs.canvasRef.height)
        self.contextDraw.clearRect(0, 0, self.$refs.canvasDraw.width, self.$refs.canvasDraw.height)
        const ratio = image.width / 500
        ctx.drawImage(image, self.cropper.sx * ratio, self.cropper.sy * ratio, self.cropper.width * ratio, self.cropper.height * ratio, 0, 0, 500, self.cropper.height * ratio / (self.cropper.width * ratio / 500))
      }
    },
    convertImg () {
      const canvas = document.getElementById('canvas')
      console.log(canvas)
      console.log(canvas.toDataURL())
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
      this.cropper.width = rectWidht
      this.cropper.height = rectHeight
      this.cropper.sx = this.startX
      this.cropper.sy = this.startY
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
  //margin-left: 100px;
  //margin-top: 100px;
}
</style>
