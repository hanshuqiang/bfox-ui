<template>
  <div class="bfox-ui-doc">
    <div class="bfox-ui-doc_sider">
      <h4>BfoxUI</h4>
      <router-link v-for="(link, index) in data.links" :key="index" :to="link.path">{{ link.name }}</router-link>
    </div>
    <main>
      <div class="main_header">

        <a href="https://github.com/hanpanapn/bfox-ui" target="_blank" class="icon"><svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em"
            data-v-6c8d2bba="">
            <path fill="currentColor"
              d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.338 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.688c-.1-.25-.45-1.275.1-2.65c0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337c1.912-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z">
            </path>
          </svg></a>
      </div>
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

    display: flex;
    flex-direction: column;

    background-image: linear-gradient(#e66465, #9198e5);
    box-shadow: 2px 10px 30px 0px rgb(0 0 0 / 26%), 0 4px 25px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(0 0 0 / 20%);

    h4 {
      color: white
    }

    a {
      text-decoration: none;
      padding: 7px 16px;
      font-size: 13px;
      // color: #606266;
      color: white;
      background: #409eff1a;
      margin: 2px 0;
      border-radius: 5px;
      min-width: 100px;
      box-shadow: 3px 4px 9px 2px #ffffff1c;

      &:hover {
        // color: #409eff
        background-color: #ffffff4d;
        box-shadow: 3px 4px 9px 2px #ffffff26;
      }
    }

    a.is-active {
      background-color: #409eff1a;
      color: #409eff
    }
  }


  main {
    width: 100%;


    height: 95vh;
    overflow-y: scroll;

    .main_header {
      border-bottom: 1px solid #dcdfe6;
      height: 50px;
      line-height: 50px;

      .icon {
        float: right;
        line-height: 63px;
        margin-right: 20px;

        svg {
          width: 26px;

          height: 26px;
        }
      }
    }

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

    .markdown-body {
      padding: 15px;

      h1,
      h2,
      h3,
      h4,
      h5 {
        color: #606266;
      }

      p {
        color: #303331;
      }
    }
  }
}
</style>