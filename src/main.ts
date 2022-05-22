import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/markdown.css';

import Bfox from '../packages';
import Preview from './components/Preview.vue';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App)
app.component('Preview', Preview)
app
    .use(Bfox)
    .use(ElementPlus)
    .use(router)
    .mount('#app')
