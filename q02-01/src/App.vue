<template>
  <div id="app">
    <button id="apple-btn" v-on:click="setApple">Apple</button>
    <button id="orange-btn" v-on:click="setOrange">Orange</button>
    <div id="apple-display" style='background-color:red' v-if="selected==1">Apple</div>
    <div id="orange-display" style='background-color:orange' v-if="selected==2">Orange</div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data:function(){
    return {
      'selected':''
    }
  },
  components: {
    
  },
  methods:{
    'setApple':function(){
      this.selected = 1;
    },
    'setOrange':function(){
      this.selected = 2;
    }
  }
}
</script>


