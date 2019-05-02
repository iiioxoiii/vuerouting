<template>
  <div>
    <div>
      <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="http://virtual.ecaib.org/mod/assign/view.php?id=89440">
            <img src="https://pbs.twimg.com/profile_images/875996174305472512/upM71pVR_400x400.jpg">
            <img src="https://assets.sk-static.com/assets/nw/static-pages/styleguide/by_songkick_black-20a2d8c.png" width="100" height="200">
          </a>
        </div>
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                Ciutats
              </a>
              <div class="navbar-dropdown">

                <!--Menu de ciutats-->
                <router-link v-for="parametre in parametres" :to="parametre.ruta" :nomPare="parametre.nom" :climaPare="parametre.clima" :showPare="parametre.show">

                  <!-- Passar les props a seguent component-->
                    <a v-on:click="onClickCiutat(parametre.ruta, parametre.nom , parametre.clima, parametre.show)" class="navbar-item">
                      <!--Pinta el nom de la ciutat-->
                      {{parametre.nom}}
                      <!--Guarda el id de la ciutat triada per la generacio de tota la logica de la pagina-->
                    </a>

                </router-link>



              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div class="container">

    <!--Component inicial-->
    <div v-show="compini">
      <!--Pasar parametres al component-->
      <contingut></contingut>
    </div>

    <!--Component de selecció intermig-->
    <div v-show="compselect">
      <seleccio :nom="nomPare" :clima="climaPare" :show="showPare"></seleccio>
    </div>

    <!--Component de clima-->
    <div v-show="compclima">
      <climacity :nomCiutat="nomPare" :clima="climaPare"></climacity>
    </div>

    <!--Component de concert-->
    <div v-show="compconcert">
      <concertcity :nomCiutat="nomPare" :clima="climaPare"></concertcity>
    </div>
  </div>

  </div>
</template>


<script>
import contingut from '@/components/Contingut.vue';
import seleccio from '@/components/Seleccio.vue';
import climacity from '@/components/ClimaCity.vue';
import concertcity from '@/components/ConcertCity.vue';


export default {

    name:'Capcalera',

    components: {
      contingut,
      seleccio,
      climacity,
      concertcity
    },


    data: function(){
      return{
        parametres: [
            {id:'ciutat-1', ruta:'/ciutat/Barcelona', nom:'Barcelona', clima: 'barcelona', show: '28714'},
            {id:'ciutat-2', ruta:'/ciutat/Berlin', nom:'Berlin', clima: 'berlin', show: '28443'},
            {id:'ciutat-3', ruta:'/ciutat/Madrid', nom:'Madrid', clima: 'madrid', show: '28755'},
            {id:'ciutat-4', ruta:'/ciutat/Paris', nom:'Paris', clima: 'paris', show: '28909'},
            {id:'ciutat-5', ruta:'/ciutat/Valencia', nom:'Valencia', clima: 'valencia', show: '28802'},
            {id:'ciutat-6', ruta:'/ciutat/NewYork', nom:'New York', clima: 'new+york', show: '7644'},
            {id:'ciutat-7', ruta:'/ciutat/Brusseles', nom:'Brusseles', clima: 'bruselas', show: '26854'},
            {id:'ciutat-8', ruta:'/ciutat/Oslo', nom:'Oslo', clima: 'oslo', show: '31422'},
            {id:'ciutat-9', ruta:'/ciutat/Pequin', nom:'Pequín', clima: 'pekin',show: '57927'},
            {id:'ciutat-10', ruta:'/ciutat/Washinton,DC', nom:'Washinton,DC', clima: 'washington', show: '1409'}
        ],

        compini: false,
        compselect: false,
        compclima: false,
        compconcert: false,

        rutaPare: null,
        nomPare: null,
        climaPare: 'tempestes',
        showPare: 'concertillo',

      }
    },

    created() {
      this.compini = true
    },


    methods: {
      //Mètode de pass a props
      onClickCiutat(a, b, c, d) {
        this.compini = false,
        this.compselect = true,
        this.compclima = false,
        this.compconcert = false,

        this.rutaPare = a,
        this.nomPare = b,
        this.climaPare = c,
        this.showPare = d

      }
    }
}
</script>



<style lang="css" scoped>
</style>
