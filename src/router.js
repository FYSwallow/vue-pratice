import VueRouter from 'vue-router'

import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopCarContainer from './components/tabbar/ShopCarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/newsinfo.vue'

// 3. 创建路由对象
var router = new VueRouter({
  routes: [
      { path: '/', redirect: '/home' },
      { path: '/home', component: HomeContainer },
      { path: '/member', component: MemberContainer },
      { path: '/shopcar', component: ShopCarContainer },
      { path: '/search', component: SearchContainer },
      { path: '/home/newslist', component: NewsList },
      { path: '/home/newsInfo/:id', component: NewsInfo },

  ],
    linkActiveClass: 'mui-active'
})

// 把路由对象暴露出去
export default router