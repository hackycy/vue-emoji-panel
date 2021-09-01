import EmojiPopover from 'emoji-popover/emoji-popover.vue'
import 'emoji-popover/emoji-popover.scss'

/**
 * expose vue plugin
 * @param {*} Vue 
 */
EmojiPopover.install = function(Vue) {
  // register component
  Vue.component(EmojiPopover.name, EmojiPopover)
}

export default EmojiPopover