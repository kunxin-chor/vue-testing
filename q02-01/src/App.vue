<template>
  <div id="app">
    <input type="text" v-model="input"/>
    <div>
      <span id="display">{{input}}</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },
  data:function(){
    return {
      'input':""
    }
  },
}
</script>


