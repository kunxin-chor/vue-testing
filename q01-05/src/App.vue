<template>
  <div id="app">
    <button v-on:click="setApple">Apple</button>
    <button v-on:click="setOrange">Orange</button>
    <div style='background-color:red'>Apple</div>
    <div style='background-color:orange'>Orange</div>
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


