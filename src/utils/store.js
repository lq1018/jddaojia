import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    isLogin: false,
    userInfo: {
      nickName: '',
      avatarUrl: '',
      gender: '',
      city: '',
      province: ''
    },
    historyItem: []
  },
  mutations: {
    updateIsLogin: function (state, isLogin) {
      state.isLogin = isLogin
    },
    updateUser: function (state, userInfo) {
      userInfo.gender = userInfo.gender === 1 ? '男' : '女'
      state.userInfo = userInfo
    },
    cleanUserInfo: function () {
      const state = store.state
      state.userInfo = {
        nickName: '',
        avatarUrl: '',
        gender: '',
        city: '',
        province: ''
      }
    },
    clearAllHistory: (state) => {
      state.historyItem = []
    },
    addHistoryItem: (state, item) => {
      if (state.historyItem.indexOf(item) === -1) {
        state.historyItem.push(item)
      }
    }

  }
})
export default store
