<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
import demo2 from './demo2.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 表格

对element table 扩展了自定义列功能，分页功能，兼容原生用法，[官方DEMO](https://element-plus.org/zh-CN/component/table.html)

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


<div class="prev_table">

## 属性（除原始属性外新增的属性）
|       参数       |                       说明                        |   类型   | 可选值 |                                 默认值                                 | 是否必填 |
| :--------------: | :-----------------------------------------------: | :------: | :----: | :--------------------------------------------------------------------: | :------: |
|    `apiData`     | 数据源由外部传进来，apiData和apiUrl只能选一种方式 |  Array   |   -    |                                                                        |    否    |
|     `apiUrl`     | 数据请求AIP地址，此方式：apiParams，apiMethod必填 |  string  |   -    |                                                                        |    是    |
|   `apiParams`    |                   获取查询参数                    | Function |   -    |                                                                        |    是    |
|   `apiMethod`    |                     请求方式                      |  string  |   -    |                                 `get`                                  |    是    |
|   `apiFilter`    |             过滤、重组接口返回的数据              | Function |   -    |                                                                        |    否    |
|   `apiHeaders`   |                      请求头                       |  Object  |   -    | ```{ 'x-token': localStorage.getItem('token'),  'x-user-id': 1   } ``` |    否    |
|    `columns`     |                  js对象形式的列                   |  string  |   -    |                               `default`                                |    否    |
|  `customColumn`  |             是否启用自定义显示列功能              |  string  |   -    |                                `false`                                 |    否    |
| `headerTopfixed` |                     表头浮动                      |  string  |   -    |                                 `true`                                 |    否    |
|   `showHeader`   |                     显示表头                      |  string  |   -    |                                 `true`                                 |    否    |
|    `pageSize`    |                    每页N条数据                    |  Number  |   -    |                                   15                                   |    否    |
|   `pageSizes`    |                  每页可选N条数据                  |  Array   |   -    |                           [15, 30, 50, 100]                            |    否    |
|                  |

## 方法
|   方法名   |      说明      | 参数列表 |                      参数说明                      |
| :--------: | :------------: | :------: | :------------------------------------------------: |
| `reload` | 重新加载数据 |    reload    | :从第一页加载数据,如重置按钮 调用此方法时需要传true |
| `reloadSync` | 更新一条数据，更新停留在原位置 |    row ={}, key = 'id'    | row:格式需和列表一条的格式一致，key：主键，默认id，使用场景：编辑弹框中提交数据后关闭弹框，列表数据动态改变，并且列表位置不变|
## 事件
|   事件名   |      说明      | 参数列表 |                      参数说明                      |
| :--------: | :------------: | :------: | :------------------------------------------------: |
| `response` | 接口返回的数据 |    e     | 接口原始数据，可将接收到的数据在其他地方自定义显示 |
| `request`  |    请求参数    |    e     |   Object,所有的查询参数，可用于外部组件导出使用    |

更多事件请查阅[官方地址](https://element-plus.org/zh-CN/component/table.html#table-%E4%BA%8B%E4%BB%B6)

</div>




## 问题

当一个页面有多个表格时，自定义显示列功能可能会有问题，表头浮动功能也可能有问题，就是因为这些功能在查表格中某些元素时，表格没有id属性，从而在整个页面查找，以后应该优化成：表头浮动功能只针对当前表格