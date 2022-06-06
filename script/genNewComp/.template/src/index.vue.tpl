<template>
  <div class="{{ compClassName }}">
    我是{{ compZhName }}组件
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: '{{compName}}',
})
</script>

<style scoped>
.bfox-{{ compClassName }} {
  
}
</style>