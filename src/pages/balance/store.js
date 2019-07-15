import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store1 = new Vuex.Store({
  state: {
    balance: 0
  },
  mutations: {
    add: (state) => {
      const obj = state
      obj.balance += 1
    },
    red: (state) => {
      const obj = state
      obj.balance -= 1
    }
  }
})

export default store1
