import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
import routes from './routes';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '~@/assets/sass/main.scss';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

library.add(fas, fab);

Vue.component('Icon', FontAwesomeIcon);

const router = new VueRouter({ routes });

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
