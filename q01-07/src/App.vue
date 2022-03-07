<template>
  <div id="app">
    <div id="hello" v-if="show==1">Hello there</div>
    <div id="goodbye" v-else>Goodbye for now!</div>
    <button id="btn" v-on:click="toggle">Click me</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
   
  },
  data:function(){
    return {
      'show':false
    }
  },
  methods:{
    toggle() {
      this.show = !this.show;
    }
  }
}
</script>


