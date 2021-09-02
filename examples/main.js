import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import 'emoji-panel/main.scss'
import EmojiPanel from '../lib'

Vue.use(EmojiPanel)

new Vue({
  render: (h) => h(App)
}).$mount('#app')
