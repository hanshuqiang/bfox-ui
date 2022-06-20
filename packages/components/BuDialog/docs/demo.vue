<template>
  <div>
    <bu-button @click="dialogModal.open(null, MyDialog)">弹框</bu-button>
    <component :is="dialogModal.name" :options="dialogModal.options" @close="dialogModal.close" />
  </div>


</template>

<script lang="tsx" setup>
import { reactive } from 'vue';
import MyDialog from './MyDialog.vue';

interface ICityData {

  provinceCode: string



}

// 尝试使用reactive 定义响应式变量
const dialogModal = reactive({
  /**弹框组件 */
  name: null,
  /**传给弹框的数据,内部数据结构可根据业务需要灵活定义 */
  options: {},
  /**关闭弹框 */
  close: (e: Boolean) => {
    dialogModal.name = null
    if (e) {
      //这里可以刷新列表
    }
  },
  /**
   * @data 传给弹框的数据
   * @component 组件
   * 打开弹框
   */
  open: (data: any, component: any) => {
    dialogModal.name = component
    // 根据不同弹框传递不同参数 ,省去了各种if判断 
    dialogModal.options[component.name] = data
  }
})
</script>


<!-- MyDialog.vue
<template>
    <bu-dialog :title="'弹框'" @close="dialogClose" @submit="dialogSubmit">
        弹框内容
    </bu-dialog>
</template>
<script setup>
// 注意：此页面在其他地方也用到
import { ref, onMounted, getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance()
const props = defineProps({
    options: {
        type: Object,
        default: () => { return {} }
    }
})
const formData = ref({})
const emits = defineEmits(['close'])
/** 关闭弹框 */
const dialogClose = (e) => {
    emits('close', false)
}
/** 点击确定按钮的提交事件 */
const dialogSubmit = async () => {
    proxy.$message.success('更改成功')
    emits('close', true)
}
onMounted(async () => {
})
</script>

<style lang="scss" scoped>

</style> -->
