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
    closeWin() {
      window.electronAPI.indexWin()
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
