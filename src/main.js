import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/styles/styles.sass';
import { vfmPlugin } from 'vue-final-modal';
import mdiVue from 'mdi-vue/v3';
import * as mdijs from '@mdi/js';
import VueLazyload from 'vue-lazyload';
const loadimage = require('./assets/images/loading.gif');
const clickOutside = {
  beforeMount: (el, binding) => {
    el.clickOutsideEvent = (event) => {
      // here I check that click was outside the el and his children
      if (!(el == event.target || el.contains(event.target))) {
        // and if it did, call method provided in attribute value
        binding.value(event.target);
      }
    };
    document.addEventListener('click', el.clickOutsideEvent);
  },
  unmounted: (el) => {
    document.removeEventListener('click', el.clickOutsideEvent);
  },
};

createApp(App)
  .directive('click-outside', clickOutside)
  .use(store)
  .use(router)
  .use(VueLazyload, {
    preLoad: 1.3,
    error: 'dist/no_image.jpg',
    loading: loadimage,
    attempt: 1,
  })
  .use(mdiVue, {
    icons: mdijs,
  })

  .use(vfmPlugin)
  .mount('#app');
