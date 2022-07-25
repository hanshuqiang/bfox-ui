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
            <div v-for="(item,index) in logList" :key="index">
                <h4>{{item.date}} {{item.type}}</h4>
                <ul>
                    <li v-for="(sub,subindex) in item.description" :key="subindex">{{sub}}</li>
                </ul>
            </div>
        </div>
    </div>

</template>
<script setup>
import { ref } from 'vue';
const logList = ref([
    {
        date: '2020-01-12',
        description: [
            '[bug]表头浮动bug修改',
            '[bug]表头浮动bug修改',
            '[bug]表头浮动bug修改',
        ]
    },
    {
        date: '2020-01-13',
       
         description: [
            '[bug]表头浮动bug修改',
            '[bug]表头浮动bug修改',
            '[bug]表头浮动bug修改',
        ]
    }
])
</script>

<style lang="scss" scoped>
.changelog{
    margin: 20px 0 0 50px;
}
</style>