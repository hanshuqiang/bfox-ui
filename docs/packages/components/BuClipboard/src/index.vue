<template>
  <div class="clipboard-box" @click="handleCopy(text)">
    <slot>

    </slot>
    <div class="clipboard" style="width:17px;height:17px;">

      <transition name="el-fade-in-linear">
        <div v-show="showTip" class="txt">已复制到粘贴板</div>
      </transition>


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
console.log('luyou',route);

const showTip = ref(false)

const { toClipboard } = useClipboard()
const handleCopy = async (msg: string) => {
  try {
    await toClipboard(msg)

    showTip.value = true

    setTimeout(() => {
      showTip.value = false
    }, 1000);
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

    position: relative;

    .txt {
      padding: 2px 9px;
      background: #f0f9eb;
      width: 92px;
      position: absolute;
      top: -40px;
      color: #67c23a;
      font-size: 13px;
      left: 21px;
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 99999;

    }


  }
}
</style>