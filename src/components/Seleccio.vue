<template>
      <div class = "columns is-mobile is-centered">

    <div v-on:click="onClickClima">
      <div class = "column is-half is-offset-one-quarter" >
        <h2 class="title is-2">
          <router-link :to="{path: this.nom + '/clima'}">Clima de {{nom}}</router-link>
        </h2>

    </div>
    </div>

    <div v-on:click="onClickEsdeveniment">
      <div class="column is-half is-offset-one-quarter">
          <h2 class="title is-2">
            <router-link  :to="{ path: this.nom + '/esdeveniments'}">Esdeveniments de {{nom}}</router-link>
          </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  name:'seleccio',

  props: [
    'nom',
    'clima',
    'show'
  ],

  data: function() {
      return{

      }
  },

  methods: {
      onClickClima(){
        alert('nom: ' + this.nom + '\n' + 'clima: ' + this.clima + '\n' + 'show: ' + this.show);

      },
      onClickEsdeveniment(){
        alert('BBBBBB');
        alert('carrega component Esdeveniment')
      }
    }

}
</script>






<style lang="css" scoped>

</style>
