<template>
  <!-- 歌曲设置 -->
  <div class="box">
    <el-icon class="myIcon"><el-icon-s-promotion /></el-icon>
    <el-icon class="myIcon"><el-icon-headset /></el-icon>
    <el-icon class="myIcon"><el-icon-share /></el-icon>
    <el-icon class="myIcon"><el-icon-s-unfold /></el-icon>
  </div>
</template>

<script>
import {
  SPromotion as ElIconSPromotion,
  Headset as ElIconHeadset,
  Share as ElIconShare,
  SUnfold as ElIconSUnfold,
} from '@element-plus/icons-vue'
export default {
  components: {
    ElIconSPromotion,
    ElIconHeadset,
    ElIconShare,
    ElIconSUnfold,
  },
}
</script>

<style scoped>
.box {
  display: flex;
  justify-content: end;
  align-items: center;
  height: 71px;
}

.myIcon {
  cursor: pointer;
  font-size: 20px;
  margin: 0 11px;
}
</style>
