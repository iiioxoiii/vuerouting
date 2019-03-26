<template>
  <div class="columns">
    <div class="column">
      <ul>
        <h1>Esdeveniments de: {{nomCiutat}}</h1>
        <!--
         <li v-for="esdeveniment in esdeveniments">
            <h2 class="subtitle is-8">displayName: {{esdeveniment.displayName}}</h2>
          -->
      </ul>
      </div>
    </div>
  </div>

</template>



<script>

export default {
  name: 'concert-city',

  props: ['missatge'],

  data: function () {

    return {

      url: null,
      nomCiutat: "Cancun",
      idCiutat: null,
      esdeveniments: null,
      http:null,

      jsonResponse:{}

    }
  },

  methods: {

    created(){
    this.actualitza();
  },


    actualitza() {
      this.url = ("https://api.songkick.com/api/3.0/metro_areas/" + this.idCiutat + "&appid=2e84ec51d8f3a61dcc749f18638d5b30&lang=ca")
      this.getResults();
      }
    },

    getResults:function() {
      axios
      const axios = require('axios');
      // Make a request for a user with a given ID
      axios.get(this.url)
        .then(response => (this.jsonResponse = response.data))
      console.log(this.jsonResponse);
      this.esdeveniments = this.jsonResponse.resultsPage.results.event;
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

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
