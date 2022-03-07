<template>
  <div id="app">
    <button id="apples" v-on:click="displayApple">A</button>
    <button id="bananas" v-on:click="displayBanana">B</button>
    <span id="fruit-display">{{fruit}}</span>
  </div>
</template>

<script>

export default {
  name: 'App',
  data:function(){
    return {
      'fruit':'oranges'
    }
  },
  methods:{
    'displayApple':function(){
      this.fruit = "apples";
    },
    'displayBanana':function(){
      this.fruit = "bananas"
    }
  },
  components: {
    
  }
}
</script>


