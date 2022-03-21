<template>
  <div id="app">
    <div id="counter">{{count}}</div>
    <button id="increment" v-on:click="increment">Increment</button>
    <button id="decrement" v-on:click="decrement">Decrement</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data:function(){
    return {
      'count':0
    }
  },
  methods:{
    'increment':function(){
      if (this.count <10) {
        this.count++;
      }
      
    },
    'decrement':function(){
      if (this.count > -10) {
              this.count--;
      }

    }
  },
  components: {
   
  }
}
</script>


