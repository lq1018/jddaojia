import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    historyItem: []
  },
  mutations: {
    clearAllHistory: (state) => {
      const obj = state
      obj.historyItem = []
    },
    addHistoryItem: (state, item) => {
      const obj = state
      if (obj.historyItem.indexOf(item) === -1) {
        obj.historyItem.push(item)
      }
    }
  }
})

export default store
