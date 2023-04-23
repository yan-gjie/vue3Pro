<template>
  <el-config-provider :locale="zhCn">
    <el-pagination
        v-model:current-page="currentPage4"
        v-model:page-size="pageSize4"
        :page-sizes="[10, 20, 30, 50,100]"
        :small="small"
        :disabled="disabled"
        layout="prev, pager, next, sizes, jumper"
        :total="0"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
    />
  </el-config-provider>
</template>

<script setup>
// ElConfigProvider 组件
import {ElConfigProvider} from 'element-plus'
// 引入中文包
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import {ref} from 'vue'

const currentPage4 = ref(1)
const pageSize4 = ref(10)
const small = ref(true)
const disabled = ref(false)

const handleSizeChange = (val) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val) => {
  console.log(`current page: ${val}`)
}
</script>

<style scoped>
.el-pagination {
  margin-top: 20px;
  display: flex;
  justify-content: end;
}
:deep .el-pager li.is-active {
  color: #5252AA;
}
</style>