<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
import demo2 from './demo2.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 表格

对element table 扩展了自定义列功能，分页功能

## 基础用法

基础用法中不含自定义列表功能

<Preview comp-name="BuTable" demo-name="demo">
  <demo />
</Preview>

## 自定义列用法

自定义列需要将原来的html标签的列代码转写成js对象，才能使用程序动态控制是否展示

<Preview comp-name="BuTable" demo-name="demo2">
  <demo2 />
</Preview>

## 属性
参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`arg1` | 第一个参数 | string | - | `default` | 否 
`arg2` | 第二个参数 | string | - | `default` | 否

## 事件
事件名 | 说明 | 参数列表 | 参数说明
:-: | :-: | :-: | :-:
`click` | 点击事件 | $event | 原生的 dom event
`customEvent` | 自定义事件 | [a, b, c] | a：参数一；b：参数二；c：参数三
