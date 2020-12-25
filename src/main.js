import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// ElementUI 全局安装
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 指定主题颜色
import '@/assets/style/theme/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
