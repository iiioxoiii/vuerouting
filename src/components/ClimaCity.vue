<template>
  <div>
      <div class="columns">
        <div class="column">
          <h1>Clima de: {{ciutatriada}}</h1>
          </br>
          <h2 class="subtitle is-8">Temperatura: {{jsonResponse.main.temp}}°F</h2>
          <h2 class="subtitle is-8">Pressió: {{jsonResponse.main.pressure}} mbars</h2>
          <h2 class="subtitle is-8">Humitat: {{jsonResponse.main.humidity}}%</h2>
          <h2 class="subtitle is-8">Cel: {{jsonResponse.weather[0].description}}</h2>
      </div>
    </div>
  </div>

</template>



<script>

export default {

  name: 'clima-city',
  
  props: ['idClima'],


  data: function () {

    return {
      url: null,
      http:null,
      jsonResponse:{},
      apiValues: {
                "coord": {
                  "lon":145.77,
                  "lat":-16.92},
                "weather":[{
                  "id":803,
                  "main":"Clouds",
                  "description":"broken clouds",
                  "icon":"04n"}],
                "base":"cmc stations",
                "main":{
                  "temp":293.25,
                  "pressure":1019,
                  "humidity":83,
                  "temp_min":289.82,
                  "temp_max":295.37
                },
                "wind":{
                  "speed":5.1,
                  "deg":150},
                "clouds":{
                  "all":75},
                "rain":{
                  "3h":3},
                "dt":1435658272,
                "sys":{
                  "type":1,
                  "id":8166,
                  "message":0.0166,
                  "country":"AU",
                  "sunrise":1435610796,
                  "sunset":1435650870
                },
                "id":2172797,
                "name":"Cairns",
                "cod":200
      },

    }
  },

  methods: {

    created(){
    this.actualitza()
  },

    actualitza() {
      this.url = ("https://api.openweathermap.org/data/2.5/weather?q=" + this.ciutatTriada + "&appid=2e84ec51d8f3a61dcc749f18638d5b30&lang=ca")
      this.getResults();
      this.desplega = true
    },

    getResults:function() {
      axios
        //.get(this.apiGetCiutat)
        //.then(response => (this.jsonResponse = response))

      //this.$http.get(this.apiGetCiutat).then(function (response) {
      //this.jsonResponse = response.data.main;
      //});

      const axios = require('axios');

      // Make a request for a user with a given ID
      axios.get(this.url)
        .then(response => (this.jsonResponse = response.data))
      console.log(this.jsonResponse)
    },
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
