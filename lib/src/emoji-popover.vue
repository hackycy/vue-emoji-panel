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
      return `${this.width}${this.unit}`
    },
    realContentHeight() {
      return `${this.contentHeight}${this.unit}`
    },
    realSize() {
      return `${this.size}${this.unit}`
    },
    realGutter() {
      return `${this.gutter}${this.unit}`
    },
    realOffset() {
      return `${this.offset}${this.unit}`
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
