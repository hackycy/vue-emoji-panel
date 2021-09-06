<template>
  <div id="app">
    <img
      alt="Vue logo"
      src="./assets/logo.png"
    >
    <br>
    <div class="demo-emoji">
      <emoji-panel
        :emojis="emojis"
        :col-limit="9"
        :spacing="12"
        panel-class="panel"
        @emoji-click="handleEmojiClick"
      />
    </div>
    <popper
      trigger="clickToToggle"
      :options="{
        placement: 'bottom',
        modifiers: { offset: { offset: '0,10px' } }
      }"
    >
      <emoji-panel
        :emojis="emojis"
        :col-limit="9"
        :width="15"
        :size="1.2"
        :spacing="0.4"
        panel-class="panel2"
        unit="rem"
        @emoji-click="handleEmojiClick"
      />

      <div
        slot="reference"
        class="demo-emoji2"
      >
        <button>弹窗选择</button>
      </div>
    </popper>
  </div>
</template>

<script>
import { emojis } from '@/emojis'

export default {
  name: 'App',
  data() {
    return {
      emojis: Object.freeze(emojis),
      panel2Hidden: false
    }
  },
  methods: {
    handleEmojiClick(item, index) {
      console.log(item, index)
    }
  }
}
</script>

<style lang="scss">
$border-color: #070808;
// reset
html,
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  .demo-emoji {
    position: relative;
    margin: auto;
    width: 400px;
    display: flex;
    height: 150px;
    overflow-y: auto;

    padding: 20px;
    border: 1px solid #ccc;

    .panel {
      // display: inline-block;
      // margin: 10px;
      // min-height: 100%;
      margin: auto;
    }
  }

  .demo-emoji2 {
    margin-top: 20px;
  }

  .panel2 {
    border: 1px solid black;
    padding: 10px;
    border-radius: 10px;
  }
}
</style>
