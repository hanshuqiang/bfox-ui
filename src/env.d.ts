// 声明 .vue 文件模块：
// 允许 TypeScript 正确识别和处理 Vue 单文件组件（.vue 文件）
// 定义了这些组件是 Vue 的 DefineComponent 类型
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
// 声明 .md 文件模块：
// 允许在项目中直接导入 Markdown 文件
// 将 Markdown 文件视为 Vue 组件来处理
declare module '*.md' {
  import { ComponentOptions } from 'vue'
  const Component: ComponentOptions
  export default Component
}
