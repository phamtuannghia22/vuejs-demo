<template>
  <div class="page">
    <div class="position-relative">
      <canvas id="canvas" ref="canvasDraw"></canvas>
      <canvas class="canvas-container-rect position-absolute" style="top: 0; left: 0" ref="canvasCrop" @mousedown="startDrawingRectangle($event)" @mousemove="drawRectangle($event)" @mouseleave="stopDrawingRectangle" @mouseup="stopDrawingRectangle"></canvas>
    </div>
    <b-button size="sm" variant="primary" @click="crop()">Crop</b-button>
    <b-button size="sm" variant="primary" @click="convertImg()">convert</b-button>
    <b-button size="sm" variant="primary" @click="rotate()">rotate</b-button>
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
      contextCrop: null,
      contextDraw: null,
      canvasOffSetX: null,
      canvasOffSetY: null,
      size: 500,
      cropper: {
        width: 0,
        height: 0,
        sx: 0,
        sy: 0
      },
      imageUpload: {
        realWidth: 0,
        realHeight: 0,
        width: 0,
        height: 0,
        src: '',
        ratio: 0, /* tỉ lệ kích thước ảnh thật với kích thước show trên màn hình */
        isHeightGretterWidth: function () {
          return this.realHeight > this.realWidth
        }
      },
      rotateState: 0
    }
  },
  mounted () {
    const imgTest = document.getElementById('img')
    this.imageProcessing(imgTest.src)
  },
  methods: {
    imageProcessing (src) {
      const canvasDraw = this.$refs.canvasDraw
      const canvasCrop = this.$refs.canvasCrop
      this.url = src
      const image = new Image()
      image.src = src
      const self = this
      image.onload = function () {
        const size = self.size
        self.imageUpload.realWidth = image.width
        self.imageUpload.realHeight = image.height
        self.imageUpload.src = src
        self.imageUpload.ratio = self.imageUpload.isHeightGretterWidth() ? image.height / size : image.width / size
        self.imageUpload.width = self.imageUpload.isHeightGretterWidth() ? (image.width / self.imageUpload.ratio) : size
        self.imageUpload.height = self.imageUpload.isHeightGretterWidth() ? size : (image.height / self.imageUpload.ratio)

        self.contextCrop = canvasCrop.getContext('2d')
        self.contextCrop.lineCap = 'round'
        self.contextCrop.strokeStyle = 'black'
        self.contextCrop.lineWidth = 1
        self.contextDraw = canvasDraw.getContext('2d')
        canvasDraw.width = self.imageUpload.width
        canvasDraw.height = self.imageUpload.height
        canvasCrop.width = self.imageUpload.width
        canvasCrop.height = self.imageUpload.height

        self.contextDraw.drawImage(image, 0, 0, self.imageUpload.width, self.imageUpload.height)
      }
    },
    startDrawingRectangle  (nativeEvent) {
      console.log('start draw')
      const canvasCrop = this.$refs.canvasCrop
      const canvasOffSet = canvasCrop.getBoundingClientRect()
      this.canvasOffSetX = canvasOffSet.left
      this.canvasOffSetY = canvasOffSet.top
      nativeEvent.preventDefault()
      nativeEvent.stopPropagation()
      this.cropper.sx = nativeEvent.clientX - this.canvasOffSetX
      this.cropper.sy = nativeEvent.clientY - this.canvasOffSetY
      this.isDrawing = true
      this.imageProcessing(this.$refs.canvasDraw.toDataURL())
    },
    drawRectangle (nativeEvent) {
      if (!this.isDrawing) {
        return
      }

      nativeEvent.preventDefault()
      nativeEvent.stopPropagation()

      const newMouseX = nativeEvent.clientX - this.canvasOffSetX
      const newMouseY = nativeEvent.clientY - this.canvasOffSetY
      const rectWidht = newMouseX - this.cropper.sx
      const rectHeight = newMouseY - this.cropper.sy

      this.contextCrop.clearRect(0, 0, this.$refs.canvasCrop.width, this.$refs.canvasCrop.height)
      this.contextCrop.strokeRect(this.cropper.sx, this.cropper.sy, rectWidht, rectHeight)
      this.cropper.width = rectWidht
      this.cropper.height = rectHeight
    },
    crop () {
      const canvasDraw = this.$refs.canvasDraw
      const canvasCrop = this.$refs.canvasCrop
      // const canvas = document.createElement('canvas')
      // const ctx = canvas.getContext('2d')

      const image = new Image()
      image.src = this.url
      const self = this
      image.onload = function () {
        self.contextCrop.clearRect(0, 0, self.$refs.canvasCrop.width, self.$refs.canvasCrop.height)
        self.contextDraw.clearRect(0, 0, self.$refs.canvasDraw.width, self.$refs.canvasDraw.height)
        self.imageUpload.realWidth = self.cropper.width * self.imageUpload.ratio
        self.imageUpload.realHeight = self.cropper.height * self.imageUpload.ratio
        self.imageUpload.width = self.imageUpload.isHeightGretterWidth() ? self.imageUpload.realWidth * self.size / self.imageUpload.realHeight : self.size
        self.imageUpload.height = self.imageUpload.isHeightGretterWidth() ? self.size : self.cropper.height * self.size / self.cropper.width
        canvasDraw.width = self.imageUpload.width
        canvasDraw.height = self.imageUpload.height
        canvasCrop.width = self.imageUpload.width
        canvasCrop.height = self.imageUpload.height
        // canvas.width = self.imageUpload.realWidth
        // canvas.height = self.imageUpload.realHeight
        self.contextDraw.drawImage(image, self.cropper.sx * self.imageUpload.ratio, self.cropper.sy * self.imageUpload.ratio, self.cropper.width * self.imageUpload.ratio, self.cropper.height * self.imageUpload.ratio, 0, 0, self.imageUpload.width, self.imageUpload.height)
        self.imageUpload.src = canvasDraw.toDataURL()

        // ctx.drawImage(image, self.cropper.sx * self.imageUpload.ratio, self.cropper.sy * self.imageUpload.ratio, self.cropper.width * self.imageUpload.ratio, self.cropper.height * self.imageUpload.ratio, 0, 0, self.imageUpload.realWidth, self.imageUpload.realHeight)
        // self.imageUpload.src = canvas.toDataURL()
      }
    },
    convertImg () {
      console.log(this.imageUpload.src)
    },
    stopDrawingRectangle () {
      this.isDrawing = false
    },
    rotate () {
      const canvasDraw = this.$refs.canvasDraw
      const canvasCrop = this.$refs.canvasCrop
      this.rotateState = this.rotateState >= 3 ? 0 : this.rotateState + 1
      if (this.rotateState === 3 || this.rotateState === 1) {
        canvasDraw.width = this.imageUpload.height
        canvasDraw.height = this.imageUpload.width
        canvasCrop.width = this.imageUpload.height
        canvasCrop.height = this.imageUpload.width
      } else {
        canvasDraw.width = this.imageUpload.width
        canvasDraw.height = this.imageUpload.height
        canvasCrop.width = this.imageUpload.width
        canvasCrop.height = this.imageUpload.height
      }

      const image = new Image()
      image.src = this.imageUpload.src
      const self = this
      image.onload = function () {
        self.contextDraw.save() // save current state
        switch (self.rotateState) {
          case 0: {
            self.contextDraw.translate(self.$refs.canvasDraw.width, self.$refs.canvasDraw.height)
            break
          }
          case 1: {
            self.contextDraw.translate(0, self.$refs.canvasDraw.height)
            self.contextDraw.rotate(Math.PI / 2)
            break
          }
          case 2: {
            self.contextDraw.translate(0, 0)
            self.contextDraw.rotate(Math.PI)
            break
          }
          case 3: {
            self.contextDraw.translate(self.$refs.canvasDraw.width, 0)
            self.contextDraw.rotate(-Math.PI / 2)
            break
          }
        }
        self.contextDraw.drawImage(image, 0, 0, -self.imageUpload.width, -self.imageUpload.height)
        self.contextDraw.restore()
        // self.imageUpload.src = canvasDraw.toDataURL()
        console.log(self.rotateState)
      }
    }
  }
}
</script>

<style scoped>
.canvas-container-rect {
  //border: 1px solid #000;
  //margin-left: 100px;
  //margin-top: 100px;
}
</style>
