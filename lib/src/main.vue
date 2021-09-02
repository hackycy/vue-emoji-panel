<template>
  <div
    ref="panel"
    class="emoji-panel"
    :class="[emojiClass]"
    :style="{ width: realWidth }"
  >
    <div
      class="emoji-panel__main"
      :style="{ height: realContentHeight }"
    />
  </div>
</template>

<script>
export default {
  name: 'EmojiPanel',
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
    emojiClass: {
      type: String,
      default: null
    },
    unit: {
      type: String,
      default: 'px'
    }
  },
  data() {
    return {
      instance: null
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
  }
}
</script>
