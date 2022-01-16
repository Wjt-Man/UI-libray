import Vue from 'vue'
import App from './App.vue'
import "hacker-fast-ui/dist/css/index.css";
import MUI from "hacker-fast-ui";
Vue.use(MUI);
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
