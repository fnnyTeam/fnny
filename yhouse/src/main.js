// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from './router/index'
import axios from 'axios'

Vue.prototype.axios = axios

let bus = new Vue({
	data:{
		currentIndex:{city:'北京'},
		cityId:1,
		routerId:1
	},
	created(){
		router.afterEach(router => {
		    switch(router.path){
            case '/food' :          
              this.routerId = 1;
              break;
            case '/play' :          
              this.routerId = 2;
              break;
            case '/life' :         
              this.routerId = 3;
              break;
            case '/spa' :          
              this.routerId = 4;
              break;
         	};
		});		
	}
})
Vue.prototype.bus = bus
axios.defaults.headers.get['YhouseSiteVersion'] = '4.3'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router, VueAwesomeSwiper, axios
})
