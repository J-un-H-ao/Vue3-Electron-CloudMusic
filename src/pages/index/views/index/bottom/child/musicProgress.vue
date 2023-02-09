<template>
  <div class="box">
    <div class="topIcon">
      <el-icon class="myIcon"><el-icon-d-arrow-left /></el-icon>
      <i :class="{
        myIcon: true,
        play: true,
        'el-icon-video-play': !musicPlay,
        'el-icon-video-pause': musicPlay,
      }" @click="musicPause"></i>
      <el-icon class="myIcon"><el-icon-d-arrow-right /></el-icon>
    </div>
    <div class="progressBox">
      <div class="progressNumber">{{ musicTime }}</div>
      <div class="progress">
        <el-slider v-model="value1" :show-tooltip="false" class="a" @change="changeBar"></el-slider>
      </div>
      <div class="progressNumber">{{ this.musicDuration || '00:00' }}</div>
    </div>

    <!-- 音频标签 -->
    <audio :src="this.musicUrl" autoplay ref="musicAudio" @play="musicPlay = true" @timeupdate="musicBar"></audio>
  </div>
</template>

<script>
import {
  DArrowLeft as ElIconDArrowLeft,
  DArrowRight as ElIconDArrowRight,
} from '@element-plus/icons-vue'

import { mapState } from 'vuex'

export default {
  components: {
    ElIconDArrowLeft,
    ElIconDArrowRight,
  },
  data() {
    return {
      value1: 0,
      musicPlay: false,
      musicTime: '00:00',
    }
  },
  methods: {
    //控制音乐是否播放
    musicPause() {
      const audio = this.$refs['musicAudio']
      this.musicPlay = !this.musicPlay
      if (this.musicPlay) {
        audio.play()
      } else {
        audio.pause()
      }
    },

    //进度条
    musicBar() {
      const audio = this.$refs['musicAudio']
      this.value1 = audio.currentTime / (audio.duration / 100)

      //播放结束把按钮改一改
      if (audio.ended) {
        this.musicPlay = !this.musicPlay
      }

      //实时计算
      this.MusicTime()
    },

    //计算分钟以及补0
    MusicTime() {
      const audio = this.$refs['musicAudio']
      let m = parseInt(audio.currentTime / 60)
      if (m < 10) {
        m = '0' + m
      }
      let s = Math.round(audio.currentTime % 60)
      if (s < 10) {
        s = '0' + s
      }

      this.musicTime = `${m}:${s}`
    },

    //手拖进度条
    changeBar(e) {
      const audio = this.$refs['musicAudio']
      //先暂停
      audio.pause()
      //然后设置时间
      audio.currentTime = audio.duration * (e / 100)
      //播放
      audio.play()
    },
  },
  computed: {
    ...mapState(['musicUrl', 'musicDuration']),
  },
  created() { },
  watch: {},
}
</script>

<style scoped>
.box {
  /* background-color: red; */
  height: 71px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.play {
  height: 34px;
  width: 34px;
  text-align: center;
  line-height: 36px;
  background-color: #cecece70;
  border-radius: 50%;
  font-size: 24px;
}

.myIcon {
  font-weight: 900;
  font-size: 20px;
  margin: 0 16px;
  cursor: pointer;
}

.progressBox {
  display: flex;
  justify-content: center;
  align-items: center;
}

.progress {
  width: 352px;
}

.progressNumber {
  font-size: 20px;
  margin: 0 5px;
  color: #cecece;
  transform: scale(0.5, 0.5);
}

/* 进度条样式 */
/deep/ .el-slider__runway {
  height: 2px;
  margin: 0;
}

/deep/ .el-slider__bar {
  height: 2px;
}

/* 小圆点 */
/deep/ .el-slider__button {
  height: 8px;
  width: 8px;
  transform: translateY(-2px);
  border: none;
  background-color: #409eff;
}

/deep/ .el-slider__button.hover {
  transform: scale(1.2) translateY(-1px);
}

/deep/ .el-slider__button.dragging {
  transform: scale(1.2) translateY(-1px);
}
</style>
