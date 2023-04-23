<template>
  <div class="common-layout">
    <el-container>
      <el-header><Header/></el-header>
      <el-container>
        <MyAside/>
        <el-main>
          <Breadcrumb></Breadcrumb>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script setup>
import Header from "./components/MyHeader.vue";
import MyAside from './components/MyAside.vue'
import Breadcrumb from './components/CommonTag.vue'
</script>
<style>
/*设置高度占满全屏  html,body,#app,.el-container,.el-aside都要设置height:100%*/
html,
body,
#app,
.el-container{
  height: 100%;
}
.common-layout {
  width: 100%;
  height: 100%;
}
.el-header {
  height: 60px;
  line-height: 60px;
  background: #3b3b8d url("./assets/img/header/layout_header_bg.png")  220px 0 no-repeat;
  color: #ffffff;
}
.el-main {
  background-color: #f2f2f2;
}
</style>