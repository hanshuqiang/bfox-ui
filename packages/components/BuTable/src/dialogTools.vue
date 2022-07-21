<template>
  <div style="display: flex;justify-content: end;text-align: center;margin-left: auto;">
    <el-popover placement="left" :width="600" trigger="click">
      <template #reference>
        <el-icon :size="20" title="自定义列">
          <Grid />
        </el-icon>
      </template>
      <el-checkbox-group v-model="colunmVisible">
        <h5>自定义显示列</h5>
        <el-row justify="start">
          <el-col :span="6" v-for="(val, key, ind) in props.columns" :key="ind">
            <el-checkbox :label="key">{{ val.label }}</el-checkbox>
          </el-col>

          <el-col :span="24">
            <el-button style="padding: 5px 9px;   height: unset;" type="success" @click="handleSaveDiyColumn">保存
            </el-button>
            <el-button style="padding: 5px 9px;   height: unset;" type="info" @click="handleRestDiyColumn">重置
            </el-button>
            <el-button style="padding: 5px 9px;   height: unset;" @click="handleAllDiyColumn">全选
            </el-button>
          </el-col>
        </el-row>

      </el-checkbox-group>
    </el-popover>
  </div>

</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const emits = defineEmits(['input'])
const route = useRoute()
const colunmVisible = ref([])
const props = defineProps({
  colunmVisible: {
    type: Array,
    default: () => {
      return []
    }
  },
  columns: {
    type: Object,
    default: () => {
      return {}
    }
  }
})
const handleSaveDiyColumn = () => {
  localStorage.setItem(
    'app-table-column_' + route.name.toLowerCase(),
    JSON.stringify(colunmVisible.value)
  )
  window.location.reload()
}
const handleRestDiyColumn = () => {
  colunmVisible.value = []
  localStorage.removeItem(
    'app-table-column_' + route.name.toLowerCase(),

  )
  window.location.reload()
}
const handleAllDiyColumn = () => {
  colunmVisible.value = Object.keys(props.columns)
}

onMounted(() => {
  colunmVisible.value = [...props.colunmVisible]
})
</script>

<style lang="scss" scoped>
::v-deep(.el-row) {
  .el-col {
    label {
      width: unset;
    }
  }
}
</style>