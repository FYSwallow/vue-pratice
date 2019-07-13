// 入口文件
import Vue from 'vue'

// 导入路由的包
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//导入数据
import VueResource from 'vue-resource'
Vue.use(VueResource)
//按需导入根组件
import { Header, Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)


import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import app from './App.vue'

import router from './router.js'
var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router // 1.4 挂载路由对象到 VM 实例上
})

