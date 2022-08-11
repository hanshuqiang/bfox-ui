<template>
    <div class="bu-page-collapse">
        <h3>记录些常见的、未解决的问题</h3>
        <el-card style="min-height: calc(100vh - 180px) ;">
            <el-collapse class="box-bollapsse" accordion>
                <el-collapse-item name="1">
                    <template #title>
                        <span class="title">
                            <el-icon>
                                <Discount />
                            </el-icon> Consistency
                        </span>
                    </template>
                    <div class="body">
                        <div>
                            <el-tag type="info">2020-020-23</el-tag>
                        </div>
                        <p> Consistent with real life: in line with the process and logic of real
                            life, and comply with languages and habits that the users are used to;</p>
                    </div>

                </el-collapse-item>
                <el-collapse-item name="2">
                    <template #title>
                        <span class="title">
                            <el-icon>
                                <Discount />
                            </el-icon> Consistency
                        </span>
                    </template>
                    <div class="body">
                        Operation feedback: enable the users to clearly perceive their
                        operations by style updates and interactive effects;
                        <div>
                            Visual feedback: reflect current state by updating or rearranging
                            elements of the page.
                        </div>
                    </div>

                </el-collapse-item>


            </el-collapse>
        </el-card>
    </div>
</template>

<script setup lang="ts">

</script>
<style lang="scss" scoped>
.bu-page-collapse {
    margin: 10px;
    padding: 0px;

    .title {
        margin: 0 0 0 10px;
    }

    .body {
        margin: 10px 30px;
    }
}
</style>