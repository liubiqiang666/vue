import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
Vue.use(Vuex)
Vue.use(router)
Vue.config.productionTip = false
const store = new Vuex.Store({
  state: {
    products: [
      { name: '鼠标', price: 20 },
      { name: '键盘', price: 40 },
      { name: '耳机', price: 60 },
      { name: '显示屏', price: 80 }
    ]
  }
})

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
