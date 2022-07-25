<template>
  <div :id="'box-' + tableUUID" class="bu-table">
    <div class="bu-tools">
      <slot name="tools"></slot>
      <dialogTools v-if="props.customColumn" title="自定义显示列" :colunmVisible="colunmVisible" :columns="props.columns" />
    </div>
    <el-table :id="tableUUID" :fit="fit" :size="props.size" :show-header="props.showHeader" v-loading="loading"
      :data="tableData" style="width: 100%" :row-class-name="rowClassName" :border="border" :span-method="spanMethod"
      :row-key="rowKey" :default-expand-all="defaultExpandAll" @sort-change="sortChange"
      @selection-change="handleSelectionChange">
      <slot></slot>

      <!-- 如果启用多选，显示该列 -->
      <el-table-column v-if="props.selection" type="selection" width="55" fixed="left" />

      <template v-for="(val, key, ind) in appColumns" :key="ind">

        <el-table-column v-if="val.show" :label="val.label" :prop="key" :align="val.align" :width="val.width" :minWidth="val.minWidth?val.minWidth:val.width"
           :sortable="val.sortable" :fixed="val.fixed" :type="val.type">

          <template v-if="val.renderHeader" #header="scope">
            <component :is="val.renderHeader"></component>
          </template>
          <template #default="scope">

            <div v-if="val.show && val.type == 'datetime'">
              <span>{{
                  scope.row[scope.column.property] ?
                    moment(scope.row[scope.column.property]).format('YYYY-MM-DD HH:mm:ss') : ''
              }} </span>
            </div>

            <div v-else-if="val.show && val.type == 'date'">
              <span>{{
                  scope.row[scope.column.property] ?
                    moment(scope.row[scope.column.property]).format('YYYY-MM-DD') : ''
              }} </span>
            </div>

            <div v-else-if="val.show && val.type == 'slot'">
              <slot :name="scope.column.property" :row="scope.row" :$index="scope.$index" />
            </div>

            <div v-else-if="val.show && val.type == 'action'">
              <slot :name="scope.column.property" :row="scope.row" :$index="scope.$index" />
            </div>

            <div v-else-if="val.show && val.type == 'expand'">
              <slot :name="scope.column.property" :row="scope.row" :$index="scope.$index" />
            </div>

            <div v-else>
              <span>{{ val.render ? val.render(scope.row[scope.column.property], scope.row) :
                  scope.row[scope.column.property]
              }}
              </span>
            </div>



          </template>

        </el-table-column>


      </template>



    </el-table>
    <div class="gva-pagination" v-if="isPaging">
      <el-pagination :small="props.size == 'small'" layout="total, sizes, prev, pager, next, jumper"
        :current-page="paginationOpt.page" :page-size="paginationOpt.pageSize" :page-sizes="pageSizes"
        :total="paginationOpt.total" @current-change="handleCurrentChange" @size-change="handleSizeChange" />
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted, h, markRaw, reactive } from 'vue'
import axios from 'axios'
import moment from 'moment'
import { initScoll } from './tableHeadScoll.js'
import { propsObj } from './props'
import { useRouter, useRoute } from 'vue-router'
import dialogTools from './dialogTools.vue'
import md5 from 'md5'
import { v4 as uuidv4 } from 'uuid'
defineOptions({
  name: 'BuTable',
})
const tableUUID = ref('tid_' + uuidv4())
// props
const props = defineProps(propsObj)
//emits
const emits = defineEmits(['sort-change', 'selection-change', 'response', 'request'])


const appColumns = ref({})
const colunmVisible = ref([])
//route在其他项目安装的时候获取不到，所以当前页面标识用url取md5 和bu-table-column_ 拼接
// const route = useRoute()
if (props.customColumn) {
  //缓存中的列名
  // let lsCol = localStorage.getItem('bu-table-column_' + route.name.toLowerCase()) 
  let routeName = md5(location.href)

  let lsCol = localStorage.getItem('bu-table-column_' + routeName)

  try {
    lsCol = lsCol ? JSON.parse(lsCol) : []
  } catch (error) {
    lsCol = Object.keys(props.columns)
  }
  console.log('lsCol',routeName,lsCol);
  colunmVisible.value = lsCol
  //取出当前路由下，展示的table 列，如果没有，就使用props 传过来的列
  let t = Object.assign({}, props.columns)


  for (const key in t) {

    if (Object.hasOwnProperty.call(t, key) && Array.isArray(lsCol) && lsCol.length > 0) {
      t[key].show = lsCol.indexOf(key) != -1
    } else {
      t[key].show = true
    }

  }
  appColumns.value = t

  //如果缓存中显示得字段为空 默认全选，因为是页面第一次使用，未设置过缓存
  if (lsCol.length == 0) colunmVisible.value = Object.keys(appColumns.value)


}



const sortChange = (e) => {
  if (e.column && e.column.sortable && e.column.sortable !== true) {
    //如果是前段排序，就不用调下面这个
    emits('sort-change', e)
  }

}


//data
const loading = ref(false)
const tableData = ref([])
const paginationOpt = ref({
  page: 1,
  pageSize: props.pageSize ? props.pageSize : 15,
  total: 0
})
const pageSizes = ref([...props.pageSizes])

/**
 * 当前页码改变
 */
const handleCurrentChange = (val) => {
  paginationOpt.value.page = val
  reload()
}

/**
 * 每页条数改变
 */
const handleSizeChange = (val) => {
  paginationOpt.value.pageSize = val
  reload()
}
/**
 * 多选改变
 * @param {Array} e
 */
const handleSelectionChange = (e) => {
  emits('selection-change', e)
}

/**
 * 获取table数据, reload:从第一页加载数据,如重置按钮 调用此方法时需要传true
 */
const reload = async (reload = false) => {
  if (
    props.apiData &&
    Array.isArray(props.apiData) &&
    props.apiData.length > 0
  ) {
    tableData.value = props.apiData
    return
  }
  let requestConfig = {
    url: props.apiUrl,
    method: props.apiMethod,
    headers: props.apiHeaders
  }
  let tempP = {
    ...props.apiParams()
  }
  if (props.isPaging) {
    tempP.page = reload ? 1 : paginationOpt.value.page
    tempP.pageSize = reload ? 10 : paginationOpt.value.pageSize
  }
  if (props.apiMethod.toLowerCase() == 'get') {
    requestConfig.params = tempP
  } else {
    requestConfig.data = tempP
  }
  loading.value = true
  let res = await axios(requestConfig)

  loading.value = false

  if (props.apiFilter) {
    res = {}
    res = props.apiFilter(res.data)
  }
  tableData.value = res.data.data.list || [] //这里要求一定是数组，但后端接口在未查到数据时有可能返回null

  paginationOpt.value.total = res.data.data.total
  paginationOpt.value.page = res.data.data.page
  paginationOpt.value.pageSize = res.data.data.pageSize
  emits('response', res.data)
  emits('request', tempP)
}
//对外暴露，使父组件可以用refs的方式调取到
defineExpose({
  reload
})

//生命周期
onMounted(async () => {
  if (props.headerTopfixed) {
    initScoll(tableUUID.value)
  }

  reload()
})

// const exportToExcel = () => {

//     // 设置导出的内容是否只做解析，不进行格式转换     false：要解析， true:不解析
//     const xlsxParam = { raw: true }
//     const wb = XLSX.utils.table_to_book(document.querySelector('#oIncomTable'), xlsxParam)
//     // 导出excel文件名
//     let fileName = '价格缺货报表_' + moment(searchInfo.value.date).format('YYYY-MM-DD') + '.xlsx'

//     const wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'array' })
//     try {
//         // 下载保存文件
//         FileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), fileName)
//     } catch (e) {
//         if (typeof console !== 'undefined') {
//             console.log(e, wbout)
//         }
//     }
// }
</script>

<style lang="scss" scoped>
.bu-table {
  padding: 15px 15px 0 15px;
  background: white;
  border-radius: 5px;

  .bu-tools {
    margin: 0 0 10px 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
}

:deep(.el-table) {
  .danger-row {
    background: #F56C6C;
  }

  .success-row {
    background: #67C23A;
  }

  .warning-row {
    background: #E6A23C;
  }

}
</style>
