<template>
  <div id="app">
    <float/>
    <router-view/>
  </div>
</template>

<script>
import Float from '../src/components/Float'
export default {
  components:{
    Float
  }
}
</script>

<style lang="scss">
  #app{
    height: 100vh;
  }
  
</style>
