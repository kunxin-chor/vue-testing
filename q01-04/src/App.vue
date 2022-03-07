<template>
  <div id="app">
    <button id="apple-btn" v-on:click="setApple">Apple</button>
    <div id="apple-display" style='background-color:red' v-if="selected==1">Apple</div>
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
   
  }
}
</script>


