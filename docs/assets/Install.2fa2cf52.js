import{v as e,P as n,o as l,c as p,M as s}from"./vendor.0d7c6d71.js";import"./index.98c947cd.js";const t={class:"markdown-body"},a=s(`<h1>\u5B89\u88C5</h1><h2>\u73AF\u5883\u652F\u6301</h2><p> Element Plus \u53EF\u4EE5\u5728\u652F\u6301 ES2018 \u548C ResizeObserver \u7684\u6D4F\u89C8\u5668\u4E0A\u8FD0\u884C\u3002 \u5982\u679C\u60A8\u786E\u5B9E\u9700\u8981\u652F\u6301\u65E7\u7248\u672C\u7684\u6D4F\u89C8\u5668\uFF0C\u8BF7\u81EA\u884C\u6DFB\u52A0 Babel \u548C\u76F8\u5E94\u7684 Polyfill \u3002 \u7531\u4E8E Vue 3 \u4E0D\u518D\u652F\u6301 IE11\uFF0CElement Plus \u4E5F\u4E0D\u518D\u652F\u6301 IE \u6D4F\u89C8\u5668\u3002 </p><h2>\u7248\u672C</h2><p>Element Plus \u76EE\u524D\u8FD8\u5904\u4E8E\u5FEB\u901F\u5F00\u53D1\u8FED\u4EE3\u4E2D\u3002</p><h2>\u4F7F\u7528\u5305\u7BA1\u7406\u5668</h2><p> \u6211\u4EEC\u5EFA\u8BAE\u60A8\u4F7F\u7528\u5305\u7BA1\u7406\u5668 (NPM, Yarn, pnpm) \u5B89\u88C5 Element Plus, \u7136\u540E\u60A8\u5C31\u53EF\u4EE5\u4F7F\u7528\u6253\u5305\u5DE5\u5177\uFF0C\u4F8B\u5982 Vite \u548C webpack </p><pre class="language-html"><code class="language-bash">
# \u9009\u62E9\u4E00\u4E2A\u4F60\u559C\u6B22\u7684\u5305\u7BA1\u7406\u5668 
# NPM 
$ npm install element-plus --save 
# Yarn 
$ yarn add element-plus
</code>
         </pre><h2>Hello World</h2><p>\u901A\u8FC7 CDN \u7684\u65B9\u5F0F\u6211\u4EEC\u53EF\u4EE5\u5F88\u5BB9\u6613\u5730\u4F7F\u7528 Element Plus \u5199\u51FA\u4E00\u4E2A Hello world \u9875\u9762\u3002 \u5728\u7EBF\u6F14\u793A</p><p>\u5728 Crowdin \u4E0A\u7F16\u8F91\u6B64\u9875\u9762 </p><h1>\u7528\u6CD5</h1><h2>\u5B8C\u6574\u5F15\u5165</h2><p>\u5982\u679C\u4F60\u5BF9\u6253\u5305\u540E\u7684\u6587\u4EF6\u5927\u5C0F\u4E0D\u662F\u5F88\u5728\u4E4E\uFF0C\u90A3\u4E48\u4F7F\u7528\u5B8C\u6574\u5BFC\u5165\u4F1A\u66F4\u65B9\u4FBF\u3002</p><pre class="language-html">    <code class="language-bash">
    // main.ts 

    import { createApp } from &#39;vue&#39;

    import ElementPlus from &#39;element-plus&#39;
    import &#39;element-plus/dist/index.css&#39;
    import App from &#39;./App.vue&#39;

    const app = createApp(App)

    app.use(ElementPlus)
    app.mount(&#39;#app&#39;)
    </code>
         </pre><h1>\u611F\u8C22</h1><p>\u672C\u9879\u76EE\u662F\u53C2\u8003jrainlau \u7684 MY-Kit \u9879\u76EE\uFF0C\u6E90\u7801\uFF1A https://github.com/jrainlau/MY-Kit</p>`,17),o=[a],u={name:"Install",setup(r){return e(()=>{n.highlightAll()}),(m,c)=>(l(),p("div",t,o))}};export{u as default};
