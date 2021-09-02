<template>
  <span>
    <transition :name="transition">
      <div
        class="emoji-popover"
        :class="[emojiClass]"
        :style="{ width: realWidth }"
      >
        <!-- emoji pane -->
      </div>
    </transition>
    <span
      ref="wrapper"
      class="emoji-popover__reference-wrapper"
    >
      <slot name="reference" />
    </span>
  </span>
</template>

<script>
import { isString, DEFAULT_UNIT } from 'emoji-popover/utils'

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
      type: Number,
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
      default: 'top',
      validator: (value) =>
        [
          'top',
          'bottom'
        ].indexOf(value) > -1
    },
    appendToBody: {
      type: Boolean,
      default: true
    },
    offset: {
      type: Number,
      default: 0
    },
    unit: {
      type: String,
      default: 'px'
    }
  },
  computed: {
    realWidth() {
      if (isString(this.width)) {
        return this.width
      }
      return `${this.width}${DEFAULT_UNIT}`
    },
    realContentHeight() {
      if (isString(this.contentHeight)) {
        return this.contentHeight
      }
      return `${this.contentHeight}${DEFAULT_UNIT}`
    },
    realSize() {
      if (isString(this.size)) {
        return this.size
      }
      return `${this.size}${DEFAULT_UNIT}`
    },
    realGutter() {
      if (isString(this.gutter)) {
        return this.gutter
      }
      return `${this.gutter}${DEFAULT_UNIT}`
    },
    realOffset() {
      if (isString(this.offset)) {
        return this.offset
      }
      return `${this.offset}${DEFAULT_UNIT}`
    }
  },
  mounted() {
    let reference = this.referenceElm
    if (!reference && this.$refs.wrapper.children) {
      reference = this.referenceElm = this.$refs.wrapper.children[0]
    }

    // 是否可以访问
    if (!reference) {
      return
    }
  }
}
</script>
