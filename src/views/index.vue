<template>
  <el-container class="indexBox">
    <el-header class="header" height="60px">
      <top></top>
    </el-header>
    <el-main class="main" id="test">
      <el-container>
        <el-aside class="main-aside" width="199px">
          <Aside></Aside>
        </el-aside>

        <el-main class="main-main">
          <RouterView></RouterView>
        </el-main>
      </el-container>
    </el-main>

    <el-footer class="footer" height="74px">
      <bottom></bottom>
    </el-footer>
  </el-container>
</template>

<script>
import top from './index/top/top.vue'
import bottom from './index/bottom/bottom.vue'
import Aside from './index/aside/aside.vue'
import { RouterView } from 'vue-router'

export default {
  components: {
    top,
    bottom,
    Aside,
    RouterView,
  },
}
</script>

<style scoped>
.indexBox {
  height: 100vh;
}

.header {
  padding: 0;
  -webkit-app-region: drag;
}

.main {
  padding: 0;
  display: flex;
}

.main-aside {
  padding: 0;
  border-right: 1px solid #cecece;
  height: 100%;
  overflow: auto;
  overflow-x: hidden;
}

.main-main {
  padding: 0;
  height: 100%;
  overflow: auto;
  overflow-x: hidden;
  /* background-color: green; */
}

.footer {
  padding: 0;
  border-top: 1px solid #cecece;
}
</style>
