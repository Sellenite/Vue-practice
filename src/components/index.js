import Vue from 'vue';
import vPage from './base/vPage';
import Confirm from './plugins/confirm/index.js';

Vue.component('vPage', vPage);
Vue.use(Confirm);