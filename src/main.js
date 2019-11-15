import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import SuiVue from 'semantic-ui-vue'
import 'semantic-ui-css/semantic.min.css'
// import '../semantic/dist/semantic.min.css';

Vue.config.productionTip = false
Vue.use(SuiVue)
// Vue.use(SemanticUIVue);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
