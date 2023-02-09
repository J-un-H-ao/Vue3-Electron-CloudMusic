import { createRouter, createWebHashHistory } from 'vue-router'

// 主页
import index from '../views/index.vue'
// 子页面
import musicList from '../views/musicList/musicList.vue'
import fourZeroFour from '../views/404/404.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: index,
    redirect: '/404',
    children: [
      {
        path: '/musicList',
        name: 'musicList',
        component: musicList,
      },
      {
        path: '/404',
        name: '404',
        component: fourZeroFour,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
