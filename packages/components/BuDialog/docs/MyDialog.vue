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
</style>