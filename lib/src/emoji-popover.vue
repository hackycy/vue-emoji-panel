<template>
  <transition :name="transition">
    <!-- -->
  </transition>
</template>

<script>
export default {
  name: 'EmojiPopover',
  props: {
    emojis: {
      type: Array,
      required: true
    },
    width: {
      type: Number,
      default: 410
    },
    contentHeight: {
      type: Number,
      default: 270
    },
    size: {
      type: Number,
      default: 28
    },
    gutter: {
      type:  [Number, Array],
      default: 10
    },
    unit: {
      type: String,
      default: 'px'
    },
    recentlyUsed: {
      type: Boolean,
      default: true
    },
    visible: {
      type: Boolean,
      default: false
    },
    transition: {
      type: String,
      default: 'ep-fade-in-linear'
    },
    emojiClass: {
      type: String,
      default: null
    },
    placement: {
      type: String,
      default: 'top'
    },
    appendToBody: {
      type: Boolean,
      default: true
    },
    offset: {
      type: Number,
      default: 0
    },
    visibleArrow: {
      type: Boolean,
      default: true
    },
    arrowSize: {
      type: Number,
      default: 8
    }
  }
}
</script>