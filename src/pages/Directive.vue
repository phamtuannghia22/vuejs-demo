<template>
  <div id="directive">
    <h1 class="text-primary mt-3 mb-0 text-center">Directive</h1>
    <div class="row container">

      <!--v-on-->
      <div id="v-on" class="my-3 p-5 container-center mx-auto">
        <h2 class="fw-bold text-danger">V-on</h2>
        <!--Click-->
        <p>Count: {{ count }}</p>
        <div class="d-flex w-100 justify-content-between">
          <button class="me-3" v-on:click="increaseCount()">Increase</button>
          <button v-on:click="reduceCount()">Reduce</button>
        </div>
        <!--Hover-->
        <div class="d-flex mt-5 justify-content-between">
          <div id="hover-me" v-on:mousemove="hover($event)">
            <span class="m-auto text-white"> Hover me </span>
            <p class="mt-4 text-white">{{ position }}</p>
          </div>
        </div>
      </div>
      <!--end v-on-->

      <!--V-bind-->
      <div id="v-bind" class="my-3 p-5 container-center mx-auto">
        <h2 class="text-danger fw-bold my-3 text-center">V-bind</h2>
        <a class="p-5" v-bind:href="url">Wuyi Art</a>
        <h4 class="text-danger fw-bold my-3 text-center">Ràng buộc class</h4>
        <div class="d-flex justify-content-between">
          <div id="vbind-div" v-bind:class="{'bg-red': isBackgroundRed}"></div>
          <button class="ms-3 my-auto" v-on:click="changeBackground()">Change background</button>
        </div>
        <div class="d-flex justify-content-between">
          <div
            v-bind:style="{'backgroundColor': 'green', 'width': '100px', 'height':'100px', 'marginTop':'20px'}"></div>
        </div>
      </div>
      <!--end v-bind-->

      <!-- V-model -->
      <div class="my-3 p-5 container-center mx-auto">
        <h2 class="text-danger fw-bold text-center">V-model (Two-way binding)</h2>
        <p>{{ userName }}</p>
        <input v-model="userName" type="text" placeholder="user name"/>
      </div>
      <!-- End v-model -->

      <!-- V-if -->
      <div class=" my-3 p-5 container-center mx-auto">
        <h2 class="text-danger fw-bold text-center">V-if</h2>
        <p>Check : {{ check }}</p>
        <p v-if="check">If check = true, Hello World</p>
        <p v-if="!check">If check = false, Destroy World</p>
        <!-- <p v-else-if="!check">If check = false, Destroy World</p> -->
        <!-- <p v-else>If check = false, Destroy World</p> -->
        <button @click="changeCheck()">Change check</button>
      </div>
      <!-- End v-if -->

      <!-- V-show -->
      <div class=" my-3 p-5 container-center mx-auto">
        <h2 class="text-danger fw-bold text-center">V-show</h2>
        <p>Check : {{ check }}</p>
        <p v-show="check">If check = true, Hello World</p>
        <p v-show="!check">If check = false, Destroy World</p>
        <button @click="changeCheck()">Change check</button>
      </div>
<!--        Những method thao tác với mảng sẽ update lại DOM-->
<!--            push()                                      -->
<!--            pop()                                       -->
<!--            shift()                                      -->
<!--            unshift()                                    -->
<!--            splice()                                     -->
<!--            sort()                                       -->
<!--            reverse()                                    -->
      <!-- End v-show -->

      <!-- V-for -->
      <div class=" my-3 p-5 container-center mx-auto">
        <h2 class="text-danger fw-bold text-center">V-for</h2>
        <h3 class="text-primary m-3">For array</h3>
        <div class="d-flex mb-3">
          <div class="border p-3 mx-2" v-for="(user,index) in listUser" v-bind:key="index">
            <p>User name: {{user.name}}</p>
            <p>Age: {{user.age}}</p>
            <p>User id: {{user.id}}</p>
          </div>
        </div>
        <h3 class="text-primary m-3">For Obj</h3>
        <div class="d-flex border mb-3">
          <div class="p-3 mx-2" v-for="(value,key ,index) in userA" v-bind:key="index">
            <p>{{key}} : {{value}}</p>
          </div>
        </div>
        <h3 class="text-primary m-3">For with computed</h3>
        <div class="d-flex mb-3">
          <div class="border p-3 mx-2" v-for="(user,index) in listUserActive" v-bind:key="index">
            <p>User name: {{user.name}}</p>
            <p>Age: {{user.age}}</p>
            <p>User id: {{user.id}}</p>
          </div>
        </div>
        <button v-on:click="changeData()">Change data</button>
      </div>
      <!-- End v-for -->

      <!-- V-HTML -->
      <div class=" my-3 p-5 container-center mx-auto">
        <h2 class="text-danger fw-bold text-center">V-html</h2>
        <div v-html="dataForVHTML"></div>
      </div>
      <!-- End v-show -->

    </div>

  </div>
</template>

<script>
export default {
  name: 'Directive',
  data () {
    return {
      count: 0, // dùng trong v-on
      position: 'x = 0  y = 0', // dùng trong v-on

      url: 'https://phamtuannghia22.github.io/wuyi-art/', // dùng trong v-bind
      isBackgroundRed: true, // dùng trong v-bind

      userName: '', // dùng trong v-model

      check: true, // dùng trong v-if và v-show

      listUser: [ // dung trong v-for
        {id: 1, name: 'A', age: 25, isActive: true},
        {id: 2, name: 'B', age: 22, isActive: false},
        {id: 3, name: 'C', age: 26, isActive: true},
        {id: 4, name: 'D', age: 19, isActive: false}
      ],
      userA: { // dung trong v-for
        age: 23,
        name: 'A'
      },

      dataForVHTML: '<p>Đấu gi&aacute; t&agrave;i sản l&agrave; h&igrave;nh <em>thức b&aacute;n t&agrave;' +
        'i sản c&oacute;' + ' từ hai người trở l&ecirc;n tham gia đấu gi&aacute; theo nguy&ecirc;n tắc, tr&igrave;nh ' +
        'tự v&agrave; thủ tục được quy định tại Luật Đấu gi&aacute; t&agrave;i sản.&nbsp;</em></p><p>Vậy tr&igrave;nh tự,' +
        ' thủ tụ<strong>c đăng k&yacute; b&aacute;n đấu gi&aacute; t&agrave;i sản được t' +
        '</strong>hực hiện như thế n&agrave;o? C&ugrave;ng t&igrave;m hiểu b&agrave;' +
        'i viết dưới đ&acirc;y để hiểu th&ecirc;m về vấn đề n&agrave;y.</p>' // dung trong v-html
    }
  },
  methods: {
    increaseCount () {
      this.count++
    },
    reduceCount () {
      this.count--
    },
    hover (e) {
      console.log(e)
      this.position = `x = ${e.offsetX}  y = ${e.offsetY}`
    },
    changeBackground () {
      this.isBackgroundRed = !this.isBackgroundRed
    },
    changeCheck () {
      this.check = !this.check
    },
    changeData () {
      // Thay doi phan tu trong mang (gan thong thong UI se khong render lai)
      this.$set(this.listUser, 3, {id: 5, name: 'E', age: 29, isActive: false})
      // Them key value trong obj
      this.$set(this.userA, 'id', 8)
      console.log(this.listUser)
    }

  },
  computed: {
    listUserActive () {
      return this.listUser.filter((user) => user.isActive)
    }
  }
}
</script>

<style scoped>

</style>
