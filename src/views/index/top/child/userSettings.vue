<template>
  <div>
    <el-icon class="myIcon"><el-icon-user /></el-icon>
    <el-icon class="myIcon"><el-icon-setting /></el-icon>
    <el-icon class="myIcon"><el-icon-message /></el-icon>
  </div>
</template>

<script>
import {
  User as ElIconUser,
  Setting as ElIconSetting,
  Message as ElIconMessage,
} from '@element-plus/icons-vue'
export default {
  components: {
    ElIconUser,
    ElIconSetting,
    ElIconMessage,
  },
}
</script>

<style scoped>
.myIcon {
  font-size: 18px;
  color: #fff;
  margin: 10px;
  cursor: pointer;
  -webkit-app-region: no-drag;
}
</style>
