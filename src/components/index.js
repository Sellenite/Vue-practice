import Vue from 'vue';
import vPage from './base/vPage';
import Confirm from './plugins/confirm/index.js';

/* 全局组件 */
Vue.component('vPage', vPage);
/* 有了install才能use，具体看官网api */
Vue.use(Confirm);