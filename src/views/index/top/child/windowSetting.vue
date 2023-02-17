<template>
  <div>
    <el-icon class="myIcon">
      <Operation />
    </el-icon>
    <el-icon class="myIcon">
      <Minus />
    </el-icon>
    <el-icon class="myIcon">
      <FullScreen />
    </el-icon>
    <el-icon class="myIcon" @click="closeWin">
      <Close />
    </el-icon>
  </div>
</template>

<script>

export default {
  methods: {
    //关闭窗口
    closeWin() {
      window.electronAPI.indexWinDestroy()
    }
  }
}
</script>

<style scoped>
.myIcon {
  font-size: 18px;
  color: #fff;
  margin: 8px;
  cursor: pointer;
  -webkit-app-region: no-drag;
}
</style>
