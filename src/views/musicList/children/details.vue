<template>
  <el-container>
    <el-aside width="214px">
      <el-image style="width: 184px; height: 184px" src="https://scpic.chinaz.net/files/pic/pic9/202009/apic27858.jpg"
        fit="cover" class="img"></el-image>
    </el-aside>
    <el-main>
      <!-- 标题 -->
      <div class="title">
        <span class="MYicon">歌单</span>
        <span class="myLike">我喜欢的音乐</span>
      </div>

      <!-- 歌单作者 -->
      <div class="author">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" :size="24">
        </el-avatar>
        <span class="authorText authorName">一只大狗木</span>
        <span class="authorText">2016-06-18创建</span>
      </div>

      <!-- 按钮 -->
      <div class="button">
        <el-button type="primary" round>
          <el-icon class="myIcon"><el-icon-caret-right /></el-icon>
          <span>播放全部</span>
        </el-button>
        <el-button round>
          <el-icon class="myIcon"><el-icon-star-off /></el-icon>
          <span>收藏(1)</span>
        </el-button>
        <el-button round>
          <el-icon class="myIcon"><el-icon-share /></el-icon>
          <span>分享(1)</span>
        </el-button>
        <el-button round>
          <el-icon class="myIcon"><el-icon-download /></el-icon>
          <span>下载全部</span>
        </el-button>
      </div>

      <!-- 歌单详情 -->
      <div class="listDetails">
        <div class="detailsText">
          <span>标签 : </span>
          <span>电子/清新/游戏</span>
        </div>
        <div class="detailsText">
          <span class="statistics">歌曲 : 61</span>
          <span>播放 : 62万</span>
        </div>
        <div class="detailsText">
          <span>简介 : </span>
          <span class="introduction">这里是简介......</span>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import {
  CaretRight as ElIconCaretRight,
  StarOff as ElIconStarOff,
  Share as ElIconShare,
  Download as ElIconDownload,
} from '@element-plus/icons-vue'
export default {
  components: {
    ElIconCaretRight,
    ElIconStarOff,
    ElIconShare,
    ElIconDownload,
  },
}
</script>

<style scoped>
.el-main {
  padding: 0;
  padding-left: 20px;
}

.myIcon {
  font-size: 14px;
  transform: scale(1.4) translateX(-2px);
}

.img {
  margin-top: 30px;
  margin-left: 30px;
  border-radius: 5px;
}

.title {
  display: flex;
  align-items: center;
  margin-top: 32px;
}

.MYicon {
  display: inline-block;
  width: 34px;
  height: 18px;
  line-height: 16px;
  text-align: center;
  font-size: 12px;
  color: #55b3fb;
  border: 1px solid #55b3fb;
  border-radius: 4px;
}

.myLike {
  font-size: 20px;
  font-weight: 900;
  margin-left: 8px;
}

.author {
  margin-top: 10px;
  display: flex;
  align-items: center;
}

.authorText {
  font-size: 12px;
  margin-left: 8px;
}

.button {
  margin-top: 12px;
}

.el-button.is-round {
  padding: 10px 16px;
}

.listDetails {
  font-size: 12px;
  margin-top: 11px;
}

.detailsText {
  margin-top: 8px;
}

.statistics {
  margin-right: 14px;
}

.introduction {
  color: #999;
}
</style>
