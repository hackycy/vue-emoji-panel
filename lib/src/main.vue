<template>
  <div
    :class="[panelClass, 'emoji-panel']"
    :style="{ width: realWidth }"
  >
    <div class="emoji-panel__main">
      <span
        v-for="(item, index) in emojis"
        :key="'emoji-' + index"
        :class="[emojiClass, 'emoji-panel__main-item']"
        :style="{
          width: realSize,
          height: realSize,
          marginRight: calcMarginRight(index),
          marginBottom: calcMarginBottom(index)
        }"
        @click="handleItemClick(item, index)"
        @touchstart="onTouchStart"
        @touchmove="onTouchMove"
        @touchend="(e) => onTouchEnd(e, item, index)"
      >
        <img :src="item">
      </span>
    </div>
  </div>
</template>

<script>
import { isString, TAP_TIMESTAMP, SLIDE_OFFSET, preventDefault } from './util'

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
    },
    emojiClass: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      tapStartTime: 0,
      tapStartClientX: 0,
      tapStartClientY: 0,
      // 判断是否取消单击（手指按下偏移时）
      cancelTap: false
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
    },
    onTouchStart(e) {
      if (this.cancelTap) {
        // 重置状态
        this.cancelTap = false
      }
      this.tapStartTime = e.timeStamp
      const touch = e.changedTouches[0]
      this.tapStartClientX = touch.clientX
      this.tapStartClientY = touch.clientY
    },
    onTouchEnd(e, item, index) {
      const tapEndTime = e.timeStamp
      // 阻止冒泡 click事件
      preventDefault(e)
      if (!this.cancelTap && tapEndTime - this.tapStartTime <= TAP_TIMESTAMP) {
        this.handleItemClick(item, index)
      }
    },
    onTouchMove(e) {
      const touch = e.changedTouches[0]
      const tapEndClientX = touch.clientX
      const tapEndClientY = touch.clientY
      // 滑动偏移量 超出15时则取消
      if (
        Math.abs(this.tapStartClientX - tapEndClientX) > SLIDE_OFFSET ||
        Math.abs(this.tapStartClientY - tapEndClientY) > SLIDE_OFFSET
      ) {
        this.cancelTap = true
      }
    }
  }
}
</script>
