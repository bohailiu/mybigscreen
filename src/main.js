import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import less from 'less'

import 'lib-flexible'

import * as echarts from 'echarts'

import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';

import VueAwesomeSwiper from 'vue-awesome-swiper'

import dayjs from "dayjs"

// require styles
import 'swiper/dist/css/swiper.css'

import dataV from '@jiaminghi/data-view'

Vue.config.productionTip = false

Vue.use(less)

Vue.use(VueAwesomeSwiper)

Vue.use(ElementUI);

Vue.use(dataV)

Vue.prototype.$dayjs = dayjs;//可以全局使用dayjs

Vue.prototype.$echarts = echarts



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
