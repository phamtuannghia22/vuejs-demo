import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    result: 10
  },
  mutations: {
    increment1 (state) {
      state.result++
    },
    increment2 (state, n) {
      state.result += n
    }
  },
  actions: {
    increment1 (context) {
      context.commit('increment1')
    },
    increment2 (context, n) {
      context.commit('increment2', n)
    }
  },
  getters: {
    RESULT: state => {
      return state.result * 5
    }
  }
})
