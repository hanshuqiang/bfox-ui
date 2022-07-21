 
<template>
  <div class="bu-dialog">
    <el-dialog v-model="showDialog" :before-close="handleCancel" :close-on-click-modal="closeOnClickModal"
      :width="width">
      <template #title>
        <slot name="title">{{ title }}</slot>
      </template>
      <div style="padding:0 10px">
        <slot></slot>
      </div>
      <template #footer>
        <slot name="footer">
          <div class="dialog-footer">
            <el-button @click="handleCancel">取 消</el-button>
            <el-button type="primary" @click="handleSubmit">提 交</el-button>
          </div>
        </slot>

      </template>

    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { analyzeMetafile } from 'esbuild';
import { ref, onMounted } from 'vue'
defineOptions({
  name: 'BuDialog',
})


const showDialog = ref(true)
const props = defineProps({
  /** 关闭图标 */
  closeOnClickModal: {
    type: Boolean,
    default: false
  },
  /** 宽度 默认50% ，string or number */
  width: {
    type: [String, Number],
    default: '50%'
  },
  /**弹框标题 */
  title: {
    type: String,
    default: '弹框'
  }
})
const emits = defineEmits(['close', 'submit'])

const handleCancel = () => {
  emits('close', false)
}
const handleSubmit = () => {
  emits('submit', false)
}
</script>
<style lang="scss">
.bu-dialog {
  .el-dialog {
    padding: 0;
    border-radius: 2px;

    .el-dialog__body {
      padding: 20px;
    }

    .el-dialog__header {
      background-color: #f0f7ff;
      font-size: 16px;
      border-radius: 5px;

      .el-dialog__title {
        font-size: 18px;
        font-weight: 500;
      }

      padding: 17px 20px 17px 20px;
      border-bottom: 1px solid #E4E4E4;
    }

    .el-dialog__headerbtn {
      top: 16px;
      transition: font-size 0.3s;
      font-size: 18px;

      &:hover {
        font-size: 20px;
      }
    }

    .el-dialog__footer {

      display: flex;
      justify-content: flex-end;
      align-items: center;

      padding: 10px 10px 10px;
      margin: 0px;
      border-top: 1px solid #E4E4E4;

      .dialog-footer {
        .el-button {
          padding-left: 24px;
          padding-right: 24px;
        }
      }
    }
  }
}
</style>