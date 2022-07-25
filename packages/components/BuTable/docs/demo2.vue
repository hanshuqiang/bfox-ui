<template>
  <div>
    <bu-table :headerTopfixed="true"  apiUrl="/packages/components/BuTable/src/mock.json" ref="table" apiMethod="get" :apiParams="getParams"
      :columns="columns" @sort-change="sortChange" :isPaging="true" :selection="false" :customColumn="true">
      <template #Action="scope">
        <bu-button>详情</bu-button>
      </template>
    </bu-table>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
const searchInfo = reactive({})
const table = ref(null)
const columns = {
  CreatedAt: {
    type: 'datetime',
    label: '创建时间',
    align: 'left',
    minWidth: '180px',
    sortable: 'custom'
  },
  UpdatedAt: {
    type: 'datetime',
    label: '更新时间1',
    align: 'left',
    minWidth: '180px',
    sortable: 'custom'
  },
  name: {
    type: 'default',
    label: 'Name',
    align: 'left',
    minWidth:'180px',
    width: '180px',

  },
  tagsType: {
    type: 'default',
    label: 'tagsType',
    align: 'left',
    width: '180px',

  },
  Action: {
    type: 'slot',
    label: '操作',
    align: 'right',
    width: '100px',
    fixed: 'right'

  }
}

const getParams = () => {
  return searchInfo
}

// 排序
const sortChange = async ({ prop, order }) => {
  if (prop) {
    searchInfo.value.orderKey = orderKey
    searchInfo.value.desc = order === 'descending'
  }
  await table.value.reload()
}
</script>