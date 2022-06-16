const { createApp } = require('vue');
import App from './App.vue';
import createRouter from './router';
import store from './store/index';
import Vue from 'vue';
// import Vue from 'vue';
// import Vuex from 'vuex';
// Vue.use(Vuex);
import { dragDropMixin } from './mixins/drag-drop';

createApp(App)
  .use(createRouter())
  // .use(store)
  .mixin(dragDropMixin)
  .mount('#app');
