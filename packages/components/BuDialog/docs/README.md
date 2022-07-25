<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 弹框组件

封装了‘提交’‘取消’ 按钮

## 基础用法
<Preview comp-name="BuDialog" demo-name="demo">
  <demo />
</Preview>

<div class="prev_table">

## 属性
参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`closeOnClickModal` | 第一个参数 | string | - | `default` | 否 
`width` | 第二个参数 | string | - | `default` | 否
`title` | 第二个参数 | string | - | `default` | 否

## 事件
事件名 | 说明 | 参数列表 | 参数说明
:-: | :-: | :-: | :-:
`close` | 弹框关闭事件 | e | true or false 可以用于是否刷新父列表页

## 插槽

</div>



