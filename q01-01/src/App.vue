<template>
  <div id="app">
    <span id='message'>{{msg}}</span>
    <button id="btn">Hello</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data:{
    'msg':''
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
