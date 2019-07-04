// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routers from './router'
import routeManager from './router/routeManager'
import Vuex from 'vuex'
import stores from './store'
import client from './client/client.js'
import waves from '@/directive/waves/waves.js';
require('./components')

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.directive('waves', waves);

window.client = client;

const router = new VueRouter(routers)
const store = new Vuex.Store(stores)
const routersManager = new routeManager(router, store)

/* eslint-disable no-new */
window.__Vue__ = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
