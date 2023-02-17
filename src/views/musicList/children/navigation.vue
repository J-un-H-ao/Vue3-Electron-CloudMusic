<template>
  <div class="listBox">
    <div class="navigationBox">
      <!-- 导航条 -->
      <el-menu class="navigation" mode="horizontal" default-active="1">
        <el-menu-item index="1">歌曲列表</el-menu-item>
        <el-menu-item index="2">评论(159)</el-menu-item>
        <el-menu-item index="3">收藏者</el-menu-item>
      </el-menu>

      <!-- 搜索框 -->
      <div class="searchBox">
        <input type="text" placeholder="搜索歌单音乐" class="input" />
        <el-icon class="myIcon"><el-icon-search /></el-icon>
      </div>
    </div>

    <musicList></musicList>
  </div>
</template>

<script>
import { Search as ElIconSearch } from '@element-plus/icons-vue'
import musicList from '@/components/musicList.vue'
export default {
  components: {
    musicList,
    ElIconSearch,
  },
}
</script>

<style scoped>
.navigationBox {
  margin-left: 26px;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
}

.el-menu.el-menu--horizontal {
  border: none;
}

.el-menu--horizontal>.el-menu-item {
  height: 24px;
  font-size: 12px;
  line-height: 12px;
  padding: 0;
  padding-bottom: 7px;
  margin: 0 10px;
}

.el-menu--horizontal>.el-menu-item.is-active {
  font-size: 20px;
  font-weight: 900;
  border-bottom: 3px solid #44aaf8;
}

.searchBox {
  height: 24px;
  width: 200px;
  background-color: #f7f7f7;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
  margin-right: 36px;
}

.myIcon {
  font-size: 14px;
  margin-right: 10px;
}

.input {
  border: none;
  background-color: #f7f7f7;
  outline: none;
  margin-left: 10px;
}
</style>
