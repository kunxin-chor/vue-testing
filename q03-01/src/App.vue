<template>
  <div id="app">
    <h1>Hello</h1>
    <span id="msg" v-bind:style='{fontSize:textSize}'>Hello World</span>
    <button id="btn" v-on:click="makeLarger">Make Larger</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: function(){
    return {
      'textSize':24
    }
  },
  methods:{
    'makeLarger':function(){
      this.data.textSize = 36;
    }
  },
  components: {
   
  }
}
</script>


