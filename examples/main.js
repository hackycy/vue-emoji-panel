import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import 'emoji-panel/main.scss'
import EmojiPanel from '../lib'

import Popper from 'vue-popperjs'
import 'vue-popperjs/dist/vue-popper.css'

Vue.use(EmojiPanel)

Vue.component('popper', Popper)

import './emojis'

new Vue({
  render: (h) => h(App)
}).$mount('#app')
