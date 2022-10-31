<template>
    <div class="markdown-body">
        <div style="text-align: center;">
            <h1>Bfox UI</h1>
            <p style="margin: 20px 0 50px 0;">
                基于 Vue 3 TS，面向开发者的组件库，封装常用的Element组件，使用更便捷
            </p>
            <img style="width: 800px;" src="../assets/home-bg.jpg" alt="">
        </div>
        <div class="changelog">
            <h4>更新日志</h4>

            <div v-for="(item, index) in logList" :key="index">
                <h4>{{ item.date }} {{ item.type }}</h4>
                <ul>
                    <li v-for="(sub, subindex) in item.description" :key="subindex">{{ sub }}</li>
                </ul>
            </div>
        </div>
    </div>

</template>
<script setup>
import { ref } from 'vue';
const logList = ref([
    {
        date: '2022-10-31',
        description: [
            '[优化]table组件增加了无刷新更新单条数据，如：编辑弹框提交后，列表数据无刷新动态改变，主要解决：编辑数据提交后，table表格还停留在原来位置'
        ]
    },
    {
        date: '2022-10-10',
        description: [
            '[优化]更新一些文案'
        ]
    },
    {
        date: '2022-07-27',
        description: [
            '[bug]修复table组件当接口返回null时报错的bug',
            '[bug]修复table组件查不到数据时，表格数据未清空的bug',
            '[bug]表头浮动bug修改',
        ]
    },


])
</script>

<style lang="scss" scoped>
.changelog {
    margin: 20px 0 0 50px;
}
</style>