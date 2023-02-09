<template>
  <div>
    <el-icon class="myIcon"><el-icon-s-operation /></el-icon>
    <el-icon class="myIcon"><el-icon-minus /></el-icon>
    <el-icon class="myIcon"><el-icon-monitor /></el-icon>
    <el-icon class="myIcon"><el-icon-close /></el-icon>
  </div>
</template>

<script>
import {
  SOperation as ElIconSOperation,
  Minus as ElIconMinus,
  Monitor as ElIconMonitor,
  Close as ElIconClose,
} from '@element-plus/icons-vue'
export default {
  components: {
    ElIconSOperation,
    ElIconMinus,
    ElIconMonitor,
    ElIconClose,
  },
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
