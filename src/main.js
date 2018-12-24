import Vue from 'vue'
import App from './App.vue'

import Dialog from './components/dialog'

Vue.prototype.$dialog = Vue.$dialog = Dialog

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
