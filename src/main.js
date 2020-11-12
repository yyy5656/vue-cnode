// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import './assets/styles/reset.css'
import './assets/styles/border.css'
// 在配置移动端的时候，在不同的像素点下，设置为1px的border，可能对应宽度不一样，引入这个文件，可以是在不同的终端下，border宽度一样
// fastClick:因为在移动端是，点击事件会在300毫秒后反应，这个会让点击后立即响应

Vue.config.productionTip = false
fastClick.attach(document.body)

// 路由就是根据地址的不同，返回不同的内容
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
