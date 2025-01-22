/* eslint-disable prettier/prettier */

/**
 * !--------- FBI WARNING ----------!
 *
 * 根据 /packages 目录下的组件所生成的组件类侧边导航栏配置，请勿手动修改
 */

import { createRouter, createWebHashHistory, RouterOptions } from 'vue-router'

const routes = [
  {
    title: '首页',
    name: 'Home',
    path: '/',
    component: () => import('./view/Index.vue'),
  },
  {
    title: '快速开始',
    name: 'Install',
    path: '/install',
    component: () => import('./view/Install.vue'),
  },
  {
    title: '按钮',
    name: 'Button',
    path: '/view/Button',
    component: () => import('packages/components/Button/docs/README.md'),
  },
]
const routesStatic = [
  {
    title: '常见问题',
    name: 'Blog',
    path: '/blog',
    component: () => import('./view/Blog.vue'),
  },
]
const routerConfig = {
  history: createWebHashHistory(),
  routes: routes.concat(routesStatic),
  scrollBehavior(to: any, from: any) {
    if (to.path !== from.path) {
      return { top: 0 }
    }
  },
}

const router = createRouter(routerConfig as RouterOptions)

export default router
