import Vue from 'vue';
import './plugins/vuetify'
import router from './router';
import store from './store';
import { DateTime, Duration } from 'luxon';
import YmapPlugin from 'vue-yandex-maps'

import Vk from 'vue-material-design-icons/Vk.vue';
import Instagram from 'vue-material-design-icons/Instagram.vue';

import 'vue-material-design-icons/styles.css';

import App from './App.vue';

Vue.use(YmapPlugin, {
  apiKey: '3cbf9904-3d1f-419b-af36-787064e90502',
  lang: 'ru_RU',
  version: '2.1'
});
Vue.component("icon-vk", Vk);
Vue.component("icon-instagram", Instagram);

Vue.config.productionTip = false;
Vue.prototype.$DateTime = DateTime;
Vue.prototype.$Duration = Duration;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
