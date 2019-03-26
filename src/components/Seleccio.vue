<template>
  <div>
    <h1>Clima</h1>
    <p>Link clima de la ciutat nom</p>
    <h1>Concerts</h1>
    <p>Link show de la ciutat nom</p>
    <p>Aquest component és el selector</p>

    <h1>{{nom}}</h1>
    <h2>{{clima}}</h2>
    <h3>{{show}}</h3>
    <li class="nav-item">
      <router-link class="nav-link" to="/blog">Link per triar el Clima de la ciutat</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/services">Exdeveniment</router-link>
    </li>

  </div>
</template>

<script>
export default {
  name:'seleccio',

  props: [
    'nom',
    'clima',
    'show'
    ]

}
</script>






<style lang="css" scoped>
</style>
