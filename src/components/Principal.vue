<template>
  <div>
    <capcalera></capcalera>
    <img alt="Vue logo" src="@/assets/logo.png">
    <h2>Aquesta pàquina mostra dades de les ciutats desplegades des del menu «Cities»</h2>
  </div>
</template>

<script>
import Capcalera from '@/components/Capcalera.vue'
export default {
  name:'Principal',

  components: {
    Capcalera
  }
}
</script>



<style lang="css" scoped>
</style>
