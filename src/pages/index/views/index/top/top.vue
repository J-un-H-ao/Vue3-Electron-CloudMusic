<template>
  <el-row class="topBox" type="flex" justify="space-between">
    <!-- 左 -->
    <el-col :span="12" class="left">
      <div class="grid-content logo">Logo</div>
      <div class="grid-content search">
        <search></search>
      </div>
    </el-col>

    <!-- 右 -->
    <el-col :span="12" class="right">
      <div class="grid-content user">
        <user></user>
      </div>
      <div class="grid-content userSettings">
        <userSettings></userSettings>
      </div>
      <div class="grid-content windowSetting">
        <windowSetting></windowSetting>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import search from './child/search.vue'
import user from './child/user.vue'
import userSettings from './child/userSettings.vue'
import windowSetting from './child/windowSetting.vue'
export default {
  components: {
    search,
    user,
    userSettings,
    windowSetting,
  },
}
</script>

<style scoped>
.topBox {
  background-color: #55b3fb;
}

.grid-content {
  display: flex;
  align-items: center;
  height: 60px;
}

.logo {
  font-size: 32px;
  font-weight: 900;
  color: #fff;
  margin-left: 17px;
}

.search {
  margin-left: 125px;
}

.user {
  margin-right: 10px;
}

.userSettings {
  margin-right: 10px;
}

.windowSetting {
  margin-right: 20px;
}

.left {
  display: flex;
  justify-content: start;
}

.right {
  display: flex;
  justify-content: end;
}
</style>
