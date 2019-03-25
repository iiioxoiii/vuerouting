<template>
  <div id="app">
    <capcalera></capcalera>
    <peu></peu>
  </div>
</template>

<script>
import capcalera from '@/components/Capcalera.vue';
import peu from '@/components/Peu.vue';



export default {
  name: 'app',

  components: {
    capcalera,
    peu
  }
}


</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul{
   list-style-type: none;
   margin: 0;
   padding: 0;
 }
</style>
