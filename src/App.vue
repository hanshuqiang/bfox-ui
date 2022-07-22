<template>
  <div class="bfox-ui-doc">
    <div class="bfox-ui-doc_sider">
      <h4>BfoxUI</h4>
      <router-link v-for="(link, index) in data.links" :key="index" :to="link.path">{{ link.name }}</router-link>
    </div>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import ComponentList from 'packages/list.json'
import { reactive } from 'vue'

const data = reactive({
  links: [
    {
      path: '/',
      name: '简介'
    },
    {
      path: '/install',
      name: '快速开始'
    },
    ...ComponentList.map((item) => ({
      path: `/components/${item.compName}`,
      name: item.compZhName
    }))
  ]
})
</script>

<style lang="less">
.bfox-ui-doc {
  display: flex;
  min-height: 100vh;


  &_sider {
    width: 200px;
    padding: 15px;
    border-right: 1px solid #ccc;
    display: flex;
    flex-direction: column;

    a {
      text-decoration: none;
      padding: 7px 16px;
      font-size: 13px;
      color: #606266;
      background: #409eff1a;
      margin: 2px 0;
      border-radius: 5px;
      min-width: 100px;

      &:hover {
        color: #409eff
      }
    }

    a.is-active {
      background-color: #409eff1a;
      color: #409eff
    }
  }

  main {
    width: 100%;
    flex: 1;
    padding: 15px;

    .prev_table {

      table {
        border-collapse: collapse;
        width: 100%;
      }

      table,
      td,
      th {
        border: 1px solid rgb(235, 238, 245);
      }
    }
  }
}
</style>