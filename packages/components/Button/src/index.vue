<template>
  <button class="bfox-button" @click="$emit('click', $event)">
    <slot></slot>
  </button>
</template>

<!-- <script lang="ts">
export default {
  name: 'BuButton'
}
</script> -->

<script lang="ts" setup>
defineEmits(['click'])
</script>

<style scoped lang="less">
.bfox-button {
  appearance: none;
  padding: 5px 10px;
  background: #409eff;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;

  &:active {
    background: rgb(92, 185, 243);
  }

  &:not(:last-child) {
    margin-right: 15px;
  }
}
</style>
