<template>
  <div class="markdown-body">
    <h1>安装</h1>
    <h2>环境支持</h2>
    <p>
      本项目是基于Element Plus再次封装，因此 和 Element Plus 的兼容性一致，可以在支持 ES2018 和 ResizeObserver 的浏览器上运行。 如果您确实需要支持旧版本的浏览器，请自行添加
      Babel 和相应的 Polyfill 。
      由于 Vue 3 不再支持 IE11，Element Plus 也不再支持 IE 浏览器。
    </p>
    <h2>版本</h2>
    <p>BFoxUI 目前还处于快速开发迭代中。</p>
    <h2>使用包管理器</h2>
    <p>
      我们建议您使用包管理器 (NPM, Yarn, pnpm) 安装 BFoxUI, 然后您就可以使用打包工具，例如 Vite 和 webpack
    </p>
    <pre class="language-html">
      <code class="language-bash">
      # 选择一个你喜欢的包管理器 
      # NPM 
      $ npm i bfox-ui --save 
      # Yarn 
      $ yarn add bfox-ui
      </code>
    </pre>
    <h2>Hello World</h2>
    <p>通过 CDN 的方式我们可以很容易地使用BFoxUI 写出一个 Hello world 页面。 <a href="">在线演示</a></p>
    <p>在 <a href="">Crowdin</a> 上编辑此页面 </p>

    <h1>用法</h1>
    <h2>完整引入</h2>
    <p>如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。</p>

    <pre class="language-html">
    <code class="language-bash">
    // main.ts 

    import { createApp } from 'vue'

    import ElementPlus from 'element-plus'
    import 'element-plus/dist/index.css'
    import App from './App.vue'

    const app = createApp(App)

    app.use(ElementPlus)
    app.mount('#app')
    </code>
         </pre>

    <h1>感谢</h1>
    <p>本项目是参考jrainlau 的 MY-Kit 项目，源码： https://github.com/jrainlau/MY-Kit</p>
  </div>
</template>

<script setup>
import Prism from 'prismjs'
import { onMounted } from 'vue';
import '../assets/prism.css'

onMounted(() => {
  Prism.highlightAll()
})
</script>