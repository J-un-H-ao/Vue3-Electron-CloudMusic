<template>
  <div class="box">
    <el-menu class="el-menu-vertical-demo" router>
      <el-menu-item index="/404?id=1" class="text"> 发现音乐 </el-menu-item>
      <el-menu-item index="/404?id=2" class="text"> 播客 </el-menu-item>
      <el-menu-item index="/404?id=3" class="text"> 视频 </el-menu-item>
      <el-menu-item index="/404?id=4" class="text"> 关注 </el-menu-item>
      <el-menu-item index="/404?id=5" class="text"> 直播 </el-menu-item>
      <el-menu-item index="/404?id=6" class="text"> 私人FM </el-menu-item>

      <div class="myMusic">我的音乐</div>
      <!--短路运算，如果没有id就设置为0  -->
      <el-menu-item :index="`/musicList?id=${this.myLikeList.id || 0}`" class="myMusicText">
        <el-icon class="myIcon">
          <Star />
        </el-icon>
        <span>我喜欢的音乐</span>
      </el-menu-item>
      <el-menu-item index="/404?id=7" class="myMusicText">
        <el-icon class="myIcon">
          <Download />
        </el-icon>
        <span>本地与下载</span>
      </el-menu-item>
      <el-menu-item index="/404?id=8" class="myMusicText">
        <el-icon class="myIcon">
          <Timer />
        </el-icon>
        <span>最近播放</span>
      </el-menu-item>

      <el-sub-menu index="10">
        <template #title>
          <span class="playlist">创建的歌单</span>
        </template>
        <el-menu-item-group>
          <el-menu-item :index="`/musicList?id=${item.id}`" class="myMusicText" v-for="(item, index) in this.myCreateList"
            :key="item.id" style="padding-left: 20px">
            <el-icon class="myIcon">
              <Tickets />
            </el-icon>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script>



import { mapState } from 'vuex';
export default {

  methods: {

  },
  computed: {
    ...mapState('musicList', ['myLikeList', 'myCreateList'])
  },
  created() {

  },
}
</script>

<style scoped>
.box {
  width: 198px;
  background-color: #fff;
}

.myIcon {
  font-size: 14px;
}

.el-menu-vertical-demo {
  margin-top: 12px;
}

.el-menu-item {
  width: 198px;
}

.text {
  height: 36px;
  line-height: 36px;
  font-size: 14px;
}

.is-active {
  font-size: 16px;
  font-weight: 900;
}

.myMusic {
  font-size: 14px;
  color: #999;
  margin: 10px 20px;
}

.myMusicText {
  font-size: 14px;
  height: 38px;
  line-height: 38px;
  transform: translateX(-5px);
}

.playlist {
  font-size: 12px;
  color: #999;
  font-weight: 400;
  height: 22px;
  line-height: 22px;
}


/deep/.el-sub-menu__title {
  margin-top: 10px;
  line-height: 30px;
  height: 30px;
}

/deep/.el-menu-item-group__title {
  padding: 0;
}

.el-submenu .el-menu-item {
  height: 38px;
  line-height: 38px;
  font-weight: 400;
  padding-left: 20px;
}
</style>
