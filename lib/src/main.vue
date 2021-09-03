<template>
  <div
    class="emoji-panel"
    :class="[panelClass]"
    :style="{ width: realWidth }"
  >
    <div class="emoji-panel__main">
      <span
        v-for="(item, index) in emojis"
        :key="'emoji-' + index"
        class="emoji-panel__main-item"
        :style="{
          width: realSize,
          height: realSize,
          marginRight: calcMarginRight(index),
          marginBottom: calcMarginBottom(index)
        }"
        @click="handleItemClick(item, index)"
      >
        <img :src="item">
      </span>
    </div>
  </div>
</template>

<script>
import { isString } from './util'

export default {
  name: 'EmojiPanel',
  props: {
    emojis: {
      type: Array,
      required: true
    },
    width: {
      type: Number,
      default: 350
    },
    size: {
      type: Number,
      default: 28
    },
    colLimit: {
      type: Number,
      default: 9
    },
    spacing: {
      type: Number,
      default: 8
    },
    recentlyUsed: {
      type: Boolean,
      default: true
    },
    unit: {
      type: String,
      default: 'px'
    },
    panelClass: {
      type: String,
      default: null
    }
  },
  computed: {
    emojiCount() {
      return this.emojis.length
    },
    realWidth() {
      return `${this.width}${this.unit}`
    },
    realContentHeight() {
      return `${this.contentHeight}${this.unit}`
    },
    realSize() {
      return `${this.size}${this.unit}`
    },
    maxRowCount() {
      return Math.ceil(this.emojiCount / this.colLimit)
    },
    realGutter() {
      // 单行表情宽度
      const emojiSingleLineWidth = this.size * this.colLimit
      if (this.width <= emojiSingleLineWidth) {
        return 0
      }
      const gutter = (this.width - emojiSingleLineWidth) / (this.colLimit - 1)
      return `${gutter}${this.unit}`
    },
    realSpacing() {
      return `${this.spacing}${this.unit}`
    },
    remainItemCount() {
      // 计算最后一行需要补位的个数
      const total = this.emojis.length
      if (total <= 0) {
        return
      }
      return this.colLimit - (total % this.colLimit)
    }
  },
  methods: {
    parseItem(item) {
      if (isString(item)) {
        return item
      }
      return item.src
    },
    calcMarginRight(index) {
      if ((index + 1) % this.colLimit === 0) {
        return 0
      }
      return this.realGutter
    },
    calcMarginBottom(index) {
      const curRow = (index + 1) / this.colLimit
      if (Math.ceil(curRow) === this.maxRowCount) {
        return 0
      } else {
        return this.realSpacing
      }
    },
    handleItemClick(item, index) {
      this.$emit('emoji-click', item, index)
    }
  }
}
</script>
