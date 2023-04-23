<template>
  <div class="headerTag">
    <el-tag
        v-for="(item,index) in tagList "
        :key="item.name"
        class="mx-1"
        :closable="index >0"
        size="large"
        :effect="item.name === routeName? 'dark':'plain'"
        :disable-transitions="false"
        @close="handleClose(item,index)"
        @click="toPage(item)"
    >
      {{ item.name }}
    </el-tag>
  </div>

</template>

<script setup>
import {ref, watch, computed} from 'vue'
import {useRoute, useRouter} from 'vue-router'

const route = useRoute()
const router = useRouter()
console.log(route)
const tagList = ref([{path: '/', name: '首页'}])

const getBreadcrumb = () => {
  const metaItem = {name: route.name, path: route.path}
  const res = tagList.value.findIndex(item => item.name === route.name)
  if (route.name !== '首页' && res === -1) {
    tagList.value.push(metaItem)
  }
}
const handleClose = (item, index) => {
  const handleLength = tagList.value.length - 1
  tagList.value.splice(index, 1)
  // 如果删除的不是当前页面,就不执行后后面代码
  if (item.name !== route.name) return
  // 如果删除的是当前页面,判断是不是最后一个
  if (index === handleLength) {
    // 如果是最后一个,删除后就跳到前一个页面
    router.push(tagList.value[index - 1].path)
  } else {
    // 如果不是就跳转到后一个页面
    router.push(tagList.value[index].path)
  }
}

let routeName = computed(() => {
  return route.name
})
watch(
    route, () => {
      getBreadcrumb()
    }
)
/*const showInput = () => {
  inputVisible.value = true
  nextTick(() => {
    InputRef.value!.input!.focus()
  })
}*/
const toPage = (item) => {
  router.push(item.path)
}

</script>
<style scoped>
.headerTag {
  padding-left: 15px;
}

.el-tag {
  margin-right: 2px;
  height: 40px;
  font-size: 14px;
  border-color: #e8e8e8;
  --el-tag-hover-color: #5252aa;
  cursor: pointer;
}

:deep .el-tag--dark {
  --el-tag-bg-color: #5252AA;
  --el-tag-text-color: #fff;
}

:deep .el-tag--plain {
  --el-tag-bg-color: #fafafa;
  --el-tag-text-color: #000000A6;
}
</style>