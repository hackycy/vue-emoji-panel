import EmojiPanel from 'emoji-panel/main.vue'
import 'emoji-panel/main.scss'

/**
 * expose vue plugin
 * @param {*} Vue 
 */
 EmojiPanel.install = function(Vue) {
  // register component
  Vue.component(EmojiPanel.name, EmojiPanel)
}

export default EmojiPanel