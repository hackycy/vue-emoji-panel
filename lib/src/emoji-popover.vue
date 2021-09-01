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
      type: [Number, String],
      default: 410
    },
    contentHeight: {
      type: [Number, String],
      default: 270
    },
    size: {
      type: [Number, String],
      default: 28
    },
    gutter: {
      type: [Number, String],
      default: 10
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
      type: [Number, String],
      default: 0
    },
    visibleArrow: {
      type: Boolean,
      default: true
    },
    arrowSize: {
      type: [Number, String],
      default: 8
    }
  }
}
</script>