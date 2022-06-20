import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/markdown.scss';

import BfoxUI from '../packages';
import Preview from './components/Preview.vue';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 统一导入el-icon图标
import * as ElIconModules from '@element-plus/icons-vue'

const app = createApp(App)


app.component('Preview', Preview)
app
    .use(BfoxUI)
    .use(ElementPlus)
    .use(router)
    .mount('#app')

Object.keys(ElIconModules).forEach(key => {
    app.component(key, ElIconModules[key as keyof typeof ElIconModules])
})