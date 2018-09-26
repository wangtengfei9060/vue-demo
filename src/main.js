import Vue from 'vue'
import App from './App'
import router from './router'

import 'styles/base/reset.css'
import 'styles/base/border.css'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
