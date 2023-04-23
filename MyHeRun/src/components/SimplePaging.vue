<template>
  <el-pagination
      :page-size="20"
      layout="prev, pager, next"
      :total="500"
  />
</template>

<script>
export default {
  name: "SimplePaging"
}
</script>

<style scoped>
.el-pagination {
  float: right;
  margin-top: 10px;
}
</style>