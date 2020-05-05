import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'

Vue.config.productionTip = false

Vue.component('ServerStatus', Home);

new Vue({
  render: h => h(App),
}).$mount('#app')
