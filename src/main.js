import Vue from 'vue'
import App from './App'
import store from './utils/store'
import {nextPage, Entrytel, backPage} from './utils/common'
import global from './utils/global'
Vue.prototype.$store = store
Vue.prototype.$nextPage = nextPage
Vue.prototype.$entryTel = Entrytel
Vue.prototype.$backPage = backPage
Vue.prototype.$global = global
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
