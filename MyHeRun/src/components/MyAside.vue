<template>
  <el-aside :width="isCollapse ? '55px' : '200px'">
    <div class="main">
      <el-menu
          router
          :default-active="route.path"
          class="el-menu-vertical-demo"
          @select="handleSelcet"
          text-color="#fff"
          background-color="#182844"
          active-text-color="#fff"
          unique-opened
          :collapse-transition="false"
          :collapse="isCollapse"
      >
        <template v-for="item in router.options.routes" :key="item.path">
          <el-sub-menu :index="item.path+''" v-if="!item.isHidden" :key="item.path">
            <!-- 一级  -->
            <template #title>
              <el-icon><span :class="item.iconName"></span></el-icon>
              <span>{{ item.name }}</span>
              <el-icon><span class="iconfont "></span></el-icon>
            </template>
            <!--   二级  -->
            <el-menu-item :index="subMenu.path+''" v-for="subMenu in item.children" :key="subMenu.path">
              <template #title>
                <span>{{ subMenu.name }}</span>
              </template>
            </el-menu-item>
          </el-sub-menu>
        </template>
      </el-menu>
    </div>
  </el-aside>
  <div :class="isCollapse? 'toggle-button iconfont hr-show-side' : 'toggle-button iconfont hr-hide-side'"
       @click="toggleCollapse"></div>
</template>

<script setup>
import {ref} from 'vue'
import {useRouter, useRoute} from 'vue-router'


const router = useRouter()
const route = useRoute()
const isCollapse = ref(false)
/*const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)

}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}*/
const handleSelcet = (index, indexPath, item) => {
  console.log(index, indexPath, item)
}
const toggleCollapse = () => {
  isCollapse.value = !isCollapse.value
}
</script>

<style scoped>
.el-aside {
  background-color: #182844;
  height: 100%;
  overflow: hidden;
}

.el-aside .main {
  width: 100%;
  height: 100%;
}

.el-aside .main .el-menu-vertical-demo {
  width: 100%;
}

.el-menu-vertical-demo .el-sub-menu .iconfont {
  margin-right: 10px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 160px;
  min-height: 400px;
}

.el-menu {
  border-right: none;
}

.toggle-button {
  width: 20px;
  height: 100%;
  padding-top: 380px;
  text-align: center;
  background: #1d315d;
  cursor: pointer;
  color: #fff;
}

.el-menu-item {
  color: #9999B4;
}

.el-menu-item:hover {
  color: #fe9101;
  background-color: #3b3b8d;
}

.el-menu-item.is-active {
  color: #fff !important;
  background-color: #fe9101 !important;
}

:deep(.el-sub-menu.is-active > .el-sub-menu__title) {
  background-color: #3b3b8d !important;
}
</style>
