<template>
  <div class="bottomBox">
    <el-row type="flex" justify="space-between">
      <!-- 歌曲信息 -->
      <el-col :span="6">
        <div class="grid-content bg-purple-dark">
          <musicInformation></musicInformation>
        </div>
      </el-col>
      <!-- 进度条 -->
      <el-col :span="10">
        <div class="grid-content bg-purple-dark">
          <musicProgress></musicProgress>
        </div>
      </el-col>
      <!-- 歌曲设置 -->
      <el-col :span="6">
        <div class="grid-content bg-purple-dark">
          <musicSetting></musicSetting>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import musicInformation from './child/musicInformation.vue'
import musicSetting from './child/musicSetting.vue'
import musicProgress from './child/musicProgress.vue'
export default {
  components: {
    musicInformation,
    musicSetting,
    musicProgress,
  },
}
</script>

<style scoped>
.bottomBox {
  height: 71px;
  /* background-color: #55b3fb; */
}
</style>
