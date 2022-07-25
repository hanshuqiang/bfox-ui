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
    component: () => import('./components/Index.vue'),
  },
  {
    title: '快速开始',
    name: 'Install',
    path: '/install',
    component: () => import('./components/Install.vue'),
  },
  {
    title: '按钮',
    name: 'Button',
    path: '/components/Button',
    component: () => import('packages/components/Button/docs/README.md'),
  },{
    title: '复制组件',
    name: 'BuClipboard',
    path: '/components/BuClipboard',
    component: () => import('packages/components/BuClipboard/docs/README.md'),
  },{
    title: '表格',
    name: 'BuTable',
    path: '/components/BuTable',
    component: () => import('packages/components/BuTable/docs/README.md'),
  },{
    title: '弹框',
    name: 'BuDialog',
    path: '/components/BuDialog',
    component: () => import('packages/components/BuDialog/docs/README.md'),
  }];
 
 const routerConfig = {
   history: createWebHashHistory(),
   routes,
   scrollBehavior(to: any, from: any) {
     if (to.path !== from.path) {
       return { top: 0 };
     }
   },
 };
 
 const router = createRouter(routerConfig as RouterOptions);
 
 export default router;
