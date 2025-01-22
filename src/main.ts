import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/markdown.scss'

import BfoxUI from '../packages'
import Preview from './view/Preview.vue'

const app = createApp(App)

app.component('Preview', Preview)
app.use(BfoxUI).use(router).mount('#app')
