<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
  import Home from './components/Home'

  export default {
  	components: {
  		Home
    }
  }
</script>

<style>
  html,body {
    width: 100%;
    height: 100%;
    border: 0;
    margin: 0;

    overflow: hidden;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

    width: 100%;
    height: 100%;
  }
</style>
