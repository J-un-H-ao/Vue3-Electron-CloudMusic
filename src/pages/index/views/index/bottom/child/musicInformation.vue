<template>
  <!-- 歌曲信息 -->
  <div class="box">
    <div>
      <el-image style="width: 48px; height: 48px" :src="
        this.musicImgUrl ||
        'https://scpic.chinaz.net/files/pic/pic9/202009/apic27858.jpg'
      " fit="cover" class="img"></el-image>
    </div>
    <div class="childBox">
      <div>
        <span class="text music">{{
          this.musicName ||
            '超长的歌名名名名名名名名名名名名名名名名名名名名名名名名'
        }}</span>
        <el-icon class="myIcon">
          <Star />
        </el-icon>
      </div>

      <span class="text singer">{{
        this.musicSinger || '超长的歌手名字字字字字字字字字字字字字字字字'
      }}</span>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'
export default {

  computed: {
    ...mapState(['musicImgUrl', 'musicName', 'musicSinger']),
  },
}
</script>

<style scoped>
.box {
  display: flex;
  margin-left: 12px;
  align-items: center;
  height: 71px;
}

.childBox {
  /* display: flex; */
  overflow: hidden;
  flex-direction: column;
}

.img {
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;
}

.music {
  display: inline-block;
  width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: clip;
}

.singer {
  width: fit-content;
  white-space: nowrap;
  text-overflow: clip;
}

.text {
  font-size: 14px;
  margin-left: 12px;
  cursor: pointer;
  vertical-align: top;
}

.myIcon {
  font-size: 18px;
  margin-left: 8px;
  cursor: pointer;
  vertical-align: top;
}
</style>
