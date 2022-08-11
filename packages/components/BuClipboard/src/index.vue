<template>
  <div class="clipboard-box" @click="handleCopy(text)">
    <slot>
    </slot>
    <div class="clipboard" style="width:17px;height:17px;">

      <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor"
          d="M768 832a128 128 0 0 1-128 128H192A128 128 0 0 1 64 832V384a128 128 0 0 1 128-128v64a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64h64z">
        </path>
        <path fill="currentColor"
          d="M384 128a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64H384zm0-64h448a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H384a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64z">
        </path>
      </svg>
    </div>
  </div>

</template>

<script lang="ts" setup>
import { ref } from 'vue'
import useClipboard from 'vue-clipboard3'
import { ElMessage } from 'element-plus'
import { useRouter, useRoute } from 'vue-router'
const props = defineProps({
  text: {
    type: String,
    default: ''
  }
})
const route = useRoute()

const { toClipboard } = useClipboard()
const handleCopy = async (msg: string) => {
  try {
    await toClipboard(msg)
    ElMessage({ message: '已复制到粘贴板', type: 'success', })
    
  } catch (e) { }
}
</script>

<style lang="scss" scoped>
.clipboard-box {
  display: inline;
  cursor: pointer;

  &:hover {
    color: #409eff !important;
  }
  .clipboard {
    display: inline-block;
  }
}
</style>