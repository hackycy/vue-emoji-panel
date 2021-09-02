<template>
  <div id="app">
    <img
      alt="Vue logo"
      src="./assets/logo.png"
    >
    <br>
    <emoji-panel
      :visible="visible"
      :emojis="emojis"
      emoji-class="demo-emoji"
    />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      visible: false,
      emojis: []
    }
  },
  methods: {
    handleClick() {
      this.visible = !this.visible
    }
  }
}
</script>

<style lang="scss">
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
    margin: auto;
  }
}
</style>
