<template>
  <!-- 歌曲设置 -->
  <div class="box">
    <!-- 音量 -->
    <el-popover placement="top" trigger="hover" popper-style="min-width: 0px;width: 50px;padding: 10px 5px">
      <template #reference>
        <el-icon class=" myIcon">
          <Headset />
        </el-icon>
      </template>
      <el-slider v-model="musicVolume" vertical height="100px" tooltip-class="mySlider" @input="volumeChange" />
    </el-popover>


    <!-- 分享 -->
    <el-icon class="myIcon">
      <Share />
    </el-icon>
    <!-- 历史列表 -->
    <el-icon class="myIcon">
      <Expand />
    </el-icon>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';


export default {

  computed: {
    ...mapState(['musicVolume'])
  },
  methods: {
    ...mapMutations(['setMusicVolume']),
    volumeChange(e) {
      this.setMusicVolume(e)
    }
  }

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

