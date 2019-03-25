import Vue from 'vue';
import Router from 'vue-router';

import App from '@/components/App.vue';
import Contingut from '@/components/Contingut.vue';



Vue.use(Router);

export default new Router({

  routes:[{
   path:'/',
   name:'App',
   component: App
  },{
    path:'/lol',
    component: Contingut
  }]
});
