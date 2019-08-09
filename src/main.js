import Vue from 'vue'
import App from './App'
import store from './utils/store'
import {nextPage, Entrytel} from './utils/common'
Vue.prototype.$store = store
Vue.prototype.$nextPage = nextPage
Vue.prototype.$entryTel = Entrytel
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
