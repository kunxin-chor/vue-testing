<template>
  <div id="app">
    <button id="btn" v-on:click="click">Click me</button>
    <span id="msg">{{msg}}</span>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
   
  },
  data:function(){
    return {
      'msg':''
    }
  },
  methods:{
    click:function() {
      this.msg = "rainbows and sunshine"
    }
  }
}
</script>


